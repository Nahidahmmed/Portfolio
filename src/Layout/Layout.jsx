import { Outlet } from "react-router-dom";
import Foother from "../Shared/Footer/Foother";
import Header from "../Shared/Header/Header";


export default function Layout() {
  return (
    <div className="min-h-screen">
        <div className="fixed z-10 w-full">
        <Header></Header>
        </div>
        <Outlet></Outlet>
        <Foother></Foother>
    </div>
  )
}
