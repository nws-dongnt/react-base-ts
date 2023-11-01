import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "reduxx";
import { AuthUser, setAuthUser } from "reduxx/authReducer";
import Path from "route/Path";
import { writeToken } from "utils/storage";
import * as Yup from "yup";
import { useFormik } from "formik";
import BaseLayout from "layouts/BaseLayout";
import { Button, Box, Alert, Grid, TextField, Typography } from "@mui/material";

type FormValue = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(false);
  const [textError, setTextErr] = useState("");
  const [disable, setDisable] = useState(false);
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required(t("required") as string)
      .trim(),
    password: Yup.string().required(t("required") as string),
  });

  const onSubmit = async (values: FormValue) => {
    const data = { ...values, username: values.username.trim() };
    await new Promise<AuthUser>((resolve) => {
      resolve({
        accessToken: "",
        username: data.username,
      });
    })
      .then((res: AuthUser) => {
        writeToken(res.accessToken);
        dispatch(setAuthUser(res));
        navigate(location.state?.redirectTo || Path.home, {
          replace: true,
        });
      })
      .catch(() => {
        setError(true);
        setDisable(true);
        return setTextErr(t("MSG_065_all_system_api_error") as string);
      });
  };

  const { handleSubmit, errors, values, setFieldValue, touched } =
    useFormik<FormValue>({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema,
    });

  return (
    <BaseLayout>
      <Box
        className="m-auto p-3"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginBottom: 2,
            marginLeft: 5,
          }}
        >
          <h1>LOGO</h1>
        </Box>

        <Typography component="h1" variant="h3">
          {t("login")}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 5, maxWidth: 410 }}
        >
          {error && (
            <Alert
              severity="error"
              sx={{ marginTop: 3, marginBottom: 3 }}
              onClose={() => setError(false)}
            >
              {textError}
            </Alert>
          )}
          <TextField
            size="small"
            placeholder={t("username") as string}
            fullWidth
            value={values.username}
            onChange={(e) => setFieldValue("username", e.target.value)}
            disabled={disable}
            error={Boolean(errors.username)}
            InputProps={{
              sx: {
                paddingTop: 1,
                paddingBottom: 1,
                backgroundColor: "rgb(232, 240, 254)",
              },
            }}
            helperText={
              touched.username && errors.username ? errors.username : ""
            }
          />

          <TextField
            size="small"
            placeholder={t("password") as string}
            type="password"
            sx={{ marginTop: 2 }}
            fullWidth
            disabled={disable}
            value={values.password}
            onChange={(e) => setFieldValue("password", e.target.value)}
            error={Boolean(errors.password)}
            InputProps={{
              sx: {
                paddingTop: 1,
                paddingBottom: 1,
                backgroundColor: "rgb(232, 240, 254)",
              },
            }}
            helperText={
              touched.password && errors.password ? errors.password : ""
            }
          />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              type="submit"
              fullWidth
              disabled={disable}
              variant="contained"
              sx={{ px: 6, mt: 3, mb: 2, width: 1 / 2 }}
            >
              {t("login")}
            </Button>
          </Grid>
        </Box>
      </Box>
    </BaseLayout>
  );
}
