import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
/* import Character from "../pages/Character";
import MenScreen from "../pages/MenScreen";
import Search from "../pages/Search";
import WomenScreen from "../pages/WomenScreen"; */

const Character = lazy(() => import("../pages/Character"))
const MenScreen = lazy(() => import('../pages/MenScreen'))
const WomenScreen = lazy(() => import('../pages/WomenScreen'))
const Search = lazy(() => import('../pages/Search'))

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="men" element={<MenScreen />} />
        <Route path="women" element={<WomenScreen />} />
        <Route path="search" element={<Search />} />
        <Route path="character/:id" element={<Character />} />
      </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
