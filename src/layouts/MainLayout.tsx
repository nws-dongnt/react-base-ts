import React, { ChangeEvent } from "react";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18n";
import BaseLayout from "./BaseLayout";

export default function MainLayout() {
  const { t } = useTranslation();
  const { t: tNavBar } = useTranslation("translation", { keyPrefix: "navBar" });

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <BaseLayout>
      <div
        style={{
          display: "flex",
          gap: 15,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#282c34",
        }}
      >
        <p>{t("navBar.chooseLanguage")}</p>
        <div>
          <select onChange={handleChange}>
            <option value="vi">{t("navBar.vi")}</option>
            <option value="en">{t("navBar.en")}</option>
          </select>
        </div>
        <Link to="/">
          <h1>{tNavBar("home")}</h1>
        </Link>
        <Link to="/about">
          <h1>{tNavBar("about")}</h1>
        </Link>
      </div>
      <Outlet />
    </BaseLayout>
  );
}
