// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "../constants/routers";
import {
  AdduserPage,
  EdituserPage,
  MoreInfoPage,
  SearchPage,
  LoginPage,
} from "../pages";

export function Router() {
  const { LOGIN, ADDUSER, EDITUSER, MOREINFO, SEARCH } = routePaths;

  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={ADDUSER} element={<AdduserPage />} />
      <Route path={EDITUSER} element={<EdituserPage />} />
      <Route path={MOREINFO} element={<MoreInfoPage />} />
      <Route path={SEARCH} element={<SearchPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
