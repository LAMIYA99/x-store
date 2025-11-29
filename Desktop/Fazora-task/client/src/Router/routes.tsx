import { createRootRoute, createRoute } from "@tanstack/react-router";
import Home from "../Featured/Pages/Home";
import Layout from "../Layout";
import Detail from "../Featured/Pages/Detail";
import checkout from "../Featured/Pages/checkout";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
export const checkoutRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: checkout,
});
export const DetailRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/detail/$houseId",
  component: Detail,
});

export const routeTree = rootRoute.addChildren([
  HomeRouter,
  DetailRouter,
  checkoutRouter,
]);
