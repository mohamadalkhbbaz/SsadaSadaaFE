import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/Login";
import SignUp from "./Pages/Signup";
import PrivateRoute from "./PrivateRoute";

function Router() {
    return (
        <Routes>
            {/* Home */}
            <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
            </Route>

            {/* Auth */}
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
    );
}

export default Router;
