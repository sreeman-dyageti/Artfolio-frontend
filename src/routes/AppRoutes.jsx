import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Artworks from "../pages/Artworks";
import ArtworkDetail from "../pages/ArtworkDetail";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/artworks" element={<Artworks />} />
                <Route path="/artworks/:id" element={<ArtworkDetail />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;