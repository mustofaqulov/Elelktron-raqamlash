// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "../constants/routers";
import {
  AdduserPage,
  EdituserPage,
  MoreInfoPage,
  SearchPage,
  // LoginPage,
} from "../pages";
import { Layout } from "../layout/Layout";

export function Router() {
  const { ADDUSER, EDITUSER, MOREINFO, HOME } = routePaths;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchPage />} />
        <Route path={HOME + ADDUSER} element={<AdduserPage />} />
        <Route path={EDITUSER} element={<EdituserPage />} />
        <Route path={MOREINFO} element={<MoreInfoPage />} />
      </Route>
    </Routes>
  );
}
