import { useLocation } from "react-router-dom";
import { projectType } from "../../recoil/dashBoard/project";
import Path from "./path";

export default function UserManagement({item}:{item:projectType}) {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <div id="usermanagement">
            <Path pathname={pathName}/>
            <h1 className="font-bold text-black mb-2 uppercase text-2xl">User Management</h1>
            <div className="h-fit min-h-[500px] bg-white mt-3 rounded-md drop-shadow-md">

            </div>
        </div>
    )
}