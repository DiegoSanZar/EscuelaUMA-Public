 import React from 'react' 
 import SideBarAdmin from "../components/SideBarAdmin"
 import IntranetAdmin from '../components/IntranetAdmin';
 
 function IntranetAdminView() {
     return (
        <div className="d-flex flex-row">
            <SideBarAdmin></SideBarAdmin> 
            <IntranetAdmin></IntranetAdmin>               
         </div>
     )
 }
 
 export default IntranetAdminView;
