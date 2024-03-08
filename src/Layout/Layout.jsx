import { Outlet } from "react-router-dom";
import Foother from "../Shared/Footer/Foother";
import Header from "../Shared/Header/Header";



export default function Layout() {
  return (
    <div className=" dark">   
        <Header></Header>
        <Outlet></Outlet>
        <Foother></Foother>
    </div>
  )
}
