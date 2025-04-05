import Home from "@containers/Home/Home"
import About from "../pages/About/About"


const routes = [
    {
        path: "/",
        end: true,
        component: Home,
    },
    {
        path:"/About",
        end: true,
        component: About,
    }
]

export default routes
