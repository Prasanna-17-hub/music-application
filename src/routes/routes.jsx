import { createBrowserRouter } from "react-router-dom";
import NavbarContainer from "../components/NavbarBlock/NavbarContainer";
import Layout from "../layout/Layout";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Home from "../auth/Home";
import ResetPassword from "../auth/ResetPassword";
import ProfileContainer from "../components/UserProfile/ProfileContainer";
import MyAccount from "../components/UserProfile/MyAccount";
import AddProfile from "../components/UserProfile/AddProfile";
import UploadProfilePhoto from "../components/UserProfile/UploadProfilePhoto";
import ChangePassword from "../components/UserProfile/ChangePassword";
import DeleteAccount from "../components/UserProfile/DeleteAccount";
import AdminContainer from "../admin/AdminContainer";
import CreateAlbum from "../admin/album/CreateAlbum";
import AlbumLandingContainer from "../AlbumLanding/AlbumLandingContainer";
import PopularAlbums from "../AlbumLanding/PopularAlbums";
import AlbumDetails from "../AlbumLanding/AlbumDetails";


let myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <AlbumLandingContainer />,
                children:[
                    {
                        index:true,
                        element:<PopularAlbums/>
                    },{
                        path:"album-details/:title",
                        element:<AlbumDetails/>
                    }
                ]
            },
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
            {
                path: "/auth/reset-password",
                element: <ResetPassword />,
            },
            {
                path:"/admin",
                element:<AdminContainer/>,
                children:[
                    {
                        path:"create-album",
                        element:<CreateAlbum/>
                    }
                ]
            },
            {
                path: "/user/profile",
                element: <ProfileContainer />,
                children: [
                    {
                        index:true,
                        element: <MyAccount />,
                    },
                    {
                        path: "add-profile",
                        element: <AddProfile />,
                    },
                    {
                        path: "upload-photo",
                        element: <UploadProfilePhoto />,
                    },
                    {
                        path: "change-password",
                        element: <ChangePassword />,
                    },
                    {
                        path: "delete-account",
                        element: <DeleteAccount />,
                    },
                ]
            },
            {
                path: "*",
                element: <h1>404! Page Not Found</h1>,
            }
        ]
    },
])
export default myRoutes