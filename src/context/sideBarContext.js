import {useState, createContext} from "react";

export const sideBarContext = createContext()

const SideBarContextProvider = (props) => {
  //Aquí ira mi estado y las funciones que se encarguen de actualizar ese estado
  const [sideBarActive, setSideBarActive] = useState("")

  const actualizarActiveLink = (Link) => {    
    setSideBarActive(Link);
  }

  return (
    <sideBarContext.Provider
      value={{
        sideBarActive,
        actualizarActiveLink
      }}
    >
      {props.children}
    </sideBarContext.Provider>
  )
}

export default SideBarContextProvider;