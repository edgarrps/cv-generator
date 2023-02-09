import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

export default () => {
    return (
        <>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/personal-information' element={<Profile />}/>
        </Routes>
        </>
    )
}