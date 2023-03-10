import { Component, ReactElement, ReactFragment } from "react";
import { Route } from "react-router-dom"
import HomePage from "./HomePage"

const HomeRoutes = (): ReactFragment | React.ReactElement< typeof Route>=> (
  <>
    <Route
        path="/"
        element={<HomePage/>}
      />
    <Route
      path="/2"
      element={<HomePage/>}
    />
  </>
)

export default HomeRoutes;
