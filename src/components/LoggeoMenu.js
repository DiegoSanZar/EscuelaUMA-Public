/**
 * @author: Jorge H. Melgarejo <jherrera@kpilogistica.com.pe>
 * @see: <https://www.linkedin.com/in/jorge-herrera-melgarejo-394544194/>
 * @version: 1.0
 * @since: 2020-06-09 - 18:45 p.m.
 */

 import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faEdit, faCalendarAlt, faUserCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons'
 
 //Componente - Menú:
 const LoggeoMenu = () => {
 
   return (
       <div className="container-fluid">
         <div className="card m-2">
           <div className="card-body">
             <div className="row">
               <div className="col-sm-3">
                 <div className="card">
                   <span className="card-img-top text-center m-2"><FontAwesomeIcon icon={faEdit} size="6x"/></span>
                   <div className="card-header bg-primary text-light">
                     Mis datos
                   </div>
                 </div>                   
               </div>
 
               <div className="col-sm-3">
                 <div className="card">
                   <span className="card-img-top text-center m-2"><FontAwesomeIcon icon={faCalendarAlt} size="6x"/></span>
                   <div className="card-header bg-success text-light">
                     Cronograma de clases
                   </div>
                 </div>                   
               </div>
 
               <div className="col-sm-3">
                 <div className="card">
                   <span className="card-img-top text-center m-2"><FontAwesomeIcon icon={faUserCheck} size="6x"/></span>
                   <div className="card-header bg-danger text-light">
                     Record de asistencias
                   </div>
                 </div>                   
               </div>
 
               <div className="col-sm-3">
                 <div className="card">
                   <span className="card-img-top text-center m-2"><FontAwesomeIcon icon={faLightbulb} size="6x"/></span>
                   <div className="card-header bg-warning text-light">
                     Mis retos
                   </div>
                 </div>                   
               </div>
             </div>  
 
             <div className="row">
               <div className="col-sm-12">
                 <hr />
                 <p>
                   <i>Intranet</i> - UMA:
                   <br />
 
                   La <i>Intranet</i> es la plataforma web creada por UMA Psicologia y Musica que presenta datos de forma que cualquiera los pueda entender, transformando información en conocimiento, con el objetivo de mejorar las interacciones entre padres, alumnos y maestros.
                 </p>  
               </div>  
             </div>                              
           </div>
         </div>
       </div>
   )
 }
 
 export default LoggeoMenu;
