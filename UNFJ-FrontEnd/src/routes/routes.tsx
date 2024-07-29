import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
    )
}