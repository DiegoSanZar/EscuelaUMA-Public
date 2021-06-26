import {useState, createContext} from "react";

export const sideBarAdminContext = createContext()

const SideBarAdminContextProvider = (props) => {
  //Aquí ira mi estado y las funciones que se encarguen de actualizar ese estado
  const [sideBarAdminActive, setSideBarAdminActive] = useState("")

  const actualizarActiveLink = (Link) => {    
    setSideBarAdminActive(Link);
  }

  return (
    <sideBarAdminContext.Provider
      value={{
        sideBarAdminActive,
        actualizarActiveLink
      }}
    >
      {props.children}
    </sideBarAdminContext.Provider>
  )
}

export default SideBarAdminContextProvider;