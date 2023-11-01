import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "layouts/MainLayout";
import SampleLayout from "layouts/SampleLayout";
import NotFound from "pages/NotFound";

import Path from "./Path";
import UnAuthRoute from "./UnAuthRoute";
import AuthRoute from "./AuthRoute";

const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));
const ListExample = lazy(() => import("pages/ListExample"));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnAuthRoute />}>
          <Route
            path={Path.login}
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Login />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AuthRoute />}>
          <Route element={<MainLayout />}>
            <Route
              path={Path.home}
              element={
                <Suspense fallback={<h1>loading...</h1>}>
                  <Home />
                </Suspense>
              }
            />
            <Route element={<SampleLayout />}>
              <Route
                path={Path.sample}
                element={<Navigate to={Path.listPageExample} replace />}
              />
              <Route
                path={Path.listPageExample}
                element={
                  <Suspense fallback={<h1>loading...</h1>}>
                    <ListExample />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
