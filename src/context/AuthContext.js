import {useState, createContext} from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    //Aquí ira mi estado y las funciones que se encarguen de actualizar ese estado
    const [isAuth, setAuth] = useState(false)
    const [alumnoIdContext, setAlumnoIdContext] = useState("")

  
    const actualizarAuth = (state) => {    
        setAuth(state);
    }
    const actualizarAlumnoId = (_alumnoId) => {    
      setAlumnoIdContext(_alumnoId);
    }

    return (
      <AuthContext.Provider
        value={{
            isAuth,
            actualizarAuth,
            alumnoIdContext,
            actualizarAlumnoId
        }}
      >
        {props.children}
      </AuthContext.Provider>
    )
  }
  
  export default AuthContextProvider;
