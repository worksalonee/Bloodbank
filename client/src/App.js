import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./component/Route/PublicRoute";
import PrivateRoute from "./component/Route/PrivateRoute";
import Layout from "./component/shared/Layout/Layout";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import Organization from "./pages/Dashboard/Organization";
import Donation from "./pages/Dashboard/Donation";
import Consumer from "./pages/Dashboard/Consumer";
import GetDonerList from "./pages/Dashboard/Admin/GetDonerList";
import GetOrgList from "./pages/Dashboard/Admin/GetOrgList";
import GetHospitalList from "./pages/Dashboard/Admin/GetHospitalList";
import HomeAdmin from "./pages/Dashboard/Admin/HomeAdmin";
import Analytics from "./pages/Analytics";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <HomePage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <Analytics />
            </PrivateRoute>
          }
        />
        <Route
          path="/donar-list"
          element={
            <PrivateRoute>
              <Layout>
                <GetDonerList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <PrivateRoute>
              <Layout>
                <GetOrgList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <PrivateRoute>
              <Layout>
                <GetHospitalList />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/donation"
          element={
            <PrivateRoute>
              <Layout>
                <Donation />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <PrivateRoute>
              <Layout>
                <Consumer />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/organization"
          element={
            <PrivateRoute>
              <Layout>
                <Organization />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/doner"
          element={
            <PrivateRoute>
              <Layout>
                <Donar />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <PrivateRoute>
              <Layout>
                <Hospitals />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
