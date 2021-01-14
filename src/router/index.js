import Home from "../components/Home"
import CoachSignup from "../components/coach/Signup"
import CoachLogin from "../components/coach/Login"
import UserSignup from "../components/user/Signup"

export const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/coachsignup", component: CoachSignup },
    { path: "/coachlogin", component: CoachLogin },
    { path: "/usersignup", component: UserSignup }
]