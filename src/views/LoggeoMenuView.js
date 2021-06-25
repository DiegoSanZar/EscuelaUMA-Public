/**
 * @author: Jorge H. Melgarejo <jherrera@kpilogistica.com.pe>
 * @see: <https://www.linkedin.com/in/jorge-herrera-melgarejo-394544194/>
 * @version: 1.0
 * @since: 2020-06-09 - 18:45 p.m.
 */

 import React from 'react'
 import LoggeoMenu from "../components/LoggeoMenu"
 import SideBar from "../components/SideBar"

 function LoggeoMenuView() {
     return (
        <div className="d-flex flex-row">
            <SideBar></SideBar>   
             <LoggeoMenu></LoggeoMenu>
         </div>
     )
 }
 
 export default LoggeoMenuView;
