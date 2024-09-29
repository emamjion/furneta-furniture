import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import ContactPage from "../pages/Contact/ContactPage";
import FurniturePage from "../pages/FurniturePage/FurniturePage";
import ShopPage from "../pages/ShopPage/ShopPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <FurniturePage/>
            },
            {
                path: '/about',
                element: <AboutUsPage/>
            },
            {
                path: '/shop',
                element: <ShopPage/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
        ]
    }
]);

export default router;