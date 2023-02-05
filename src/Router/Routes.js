import BottomNav from "../Components/BottomNav/BottomNav";
import Loader from "../Components/Loader/Loader";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import Leaderboard from "../Dashboard/Leaderboard/Leaderboard";
import MainDashboard from "../Dashboard/MainDashboard/MainDashboard";
import Profile from "../Dashboard/Profile/Profile";
import Quiz from "../Dashboard/Quiz/Quiz";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import QuizPage from "../QuizPage/QuizPage";

const { createBrowserRouter } = require("react-router-dom");

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/la",
                element: <Loader />
            },
            {
                path: "/lak",
                element: <BottomNav />
            },

        ]

    },
    {
        path: '/dashboard',
        element: <PrivetRoute><MainDashboard /></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />

            },
            {
                path: '/dashboard/quiz',
                element: <Quiz />

            },
            {
                path: '/dashboard/leaderboard',
                element: <Leaderboard />

            },
            {
                path: '/dashboard/profile',
                element: <Profile />

            },
        ]
    },
    { 
        path: '/quiz',
        element: <PrivetRoute><QuizPage /></PrivetRoute>
    }
])