import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getListUser } from "services/api/withdraw";
import { UserType } from "services/api/withdraw/type";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

type UserState = {
  loading: boolean;
  users: UserType[];
};

export default function ListExample() {
  const [searchParams, setSearchParams] = useSearchParams({
    page: String(1),
    perPage: String(10),
  });
  const [usersState, setUsersState] = useState<UserState>({
    loading: true,
    users: [],
  });
  const [keyword, setKeyword] = useState(searchParams.get("searchKeyword"));

  /**
   * Search
   */
  useEffect(() => {
    let mounted = true;
    const cleanup = () => {
      mounted = false;
    };
    if (!usersState.loading) {
      return cleanup;
    }

    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 10;
    const searchKeyword = searchParams.get("searchKeyword") || "";

    getListUser({ page, pageSize, searchKeyword })
      .then((res) => {
        if (!mounted) return;
        setUsersState({ loading: false, users: res.data.data });
      })
      .catch(() => {
        if (!mounted) return;
        setUsersState({ loading: false, users: [] });
      });

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersState.loading]);

  const handleChangePage = (pageChange: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(
      "page",
      String(Number(searchParams.get("page")) + pageChange),
    );
    setSearchParams(newSearchParams);
    setUsersState((prev) => ({ ...prev, loading: true }));
  };

  const handleChangeSearch = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("searchKeyword", String(keyword || "").trim());
    setSearchParams(newSearchParams);
    setUsersState((prev) => ({ ...prev, loading: true }));
  };

  return (
    <Box sx={{ pt: 5 }}>
      <TextField
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        label="Keyword"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleChangeSearch}>
        Search
      </Button>
      <Box sx={{ pt: 5 }}>
        {usersState.loading ? (
          <span>loading...</span>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersState.users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={user.avatar}
                        alt={user.email}
                        style={{ borderRadius: "50%", width: 60, height: 60 }}
                      />
                    </TableCell>
                    <TableCell align="right">{user.first_name}</TableCell>
                    <TableCell align="right">{user.last_name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 100,
          paddingTop: 10,
        }}
      >
        <button type="button" onClick={() => handleChangePage(-1)}>
          {"<< Prev"}
        </button>
        <button type="button" onClick={() => handleChangePage(1)}>
          {"Next >>"}
        </button>
      </div>
    </Box>
  );
}
