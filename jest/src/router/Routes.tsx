import React from "react"
import { createRoutesFromElements, Route, RouteObject } from "react-router-dom"
import HomePage from "../site/home/HomePage"
import HomeRoutes from "../site/home/HomeRoutes"

export const Routes : RouteObject[] = createRoutesFromElements(
  <>
    <Route
        path="/"
        element={<HomePage/>}
      />
    <HomeRoutes />
  </>
)