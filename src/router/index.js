import Home from "../components/Home"
import CoachSignup from "../components/coach/Signup"
import CoachLogin from "../components/coach/Login"
import UserSignup from "../components/user/Signup"
import UserLogin from "../components/user/Login"
import CoachHome from "../components/coach/Home"
import CoachProfile from "../components/coach/Profile"
import UserHome from "../components/user/Home"
import BookAppointment from "../components/user/BookAppointment"
import UserAppointments from "../components/user/UserAppointments"
import RescheduleAppointment from "../components/user/RescheduleAppointment"
import UserProfile from "../components/user/Profile"

export const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/coachsignup", component: CoachSignup },
    { path: "/coachlogin", component: CoachLogin },
    { path: "/usersignup", component: UserSignup },
    { path: "/userlogin", component: UserLogin },
    { path: "/coachhome", component: CoachHome },
    { path: "/coachprofile", component: CoachProfile },
    { path: "/userhome", component: UserHome },
    { path: "/bookappointment", component: BookAppointment },
    { path: "/userappointments", component: UserAppointments },
    { path: "/rescheduleappointment", component: RescheduleAppointment },
    { path: "/userprofile", component: UserProfile }
]   