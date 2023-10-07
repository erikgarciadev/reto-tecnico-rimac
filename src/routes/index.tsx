import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PATHS } from "../utils/constants";
import Spinner from "../components/Spinner";
const UserInformation = React.lazy(() => import("../pages/UserInformation"));
const Plans = React.lazy(() => import("../pages/Plans"));
const Summary = React.lazy(() => import("../pages/Summary"));

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense
            fallback={
              <div className="center-full-page">
                <Spinner />
              </div>
            }
          >
            <UserInformation />
          </React.Suspense>
        }
      />
      <Route
        path={PATHS.PLANS}
        element={
          <React.Suspense
            fallback={
              <div className="center-full-page">
                <Spinner />
              </div>
            }
          >
            <Plans />
          </React.Suspense>
        }
      />
      <Route
        path={PATHS.SUMMARY}
        element={
          <React.Suspense
            fallback={
              <div className="center-full-page">
                <Spinner />
              </div>
            }
          >
            <Summary />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ApplicationRoutes;
