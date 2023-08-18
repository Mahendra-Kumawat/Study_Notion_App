// to create a context 
import { createContext, useState } from "react";

export const AppContext = createContext()

export function AppContextProvider({children}){
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    const [loginData , setLoginData] = useState([])



    const [crUserLoggedIn , setCrUserLoggedIn] = useState("")

    const [currentObject , setCurrentObject] = useState(null)


    function updateUserData(profileFormData, event){
        

        console.log(currentObject)
        console.log(event)
        // let userData = loginData.filter((data) => {
        //     return (
        //         data.email === profileFormData.email
        //     )
        // }) 

        // setCurrentObject((prev) => {
        //     return{
        //         ...prev,
        //         [currentObject.firstName] : userData.firstName 
                
        //     }
        // })



    }

    const value = {
      isLoggedIn,
      setIsLoggedIn,
      loginData,
      setLoginData,
      crUserLoggedIn,
      setCrUserLoggedIn,
      currentObject,
      setCurrentObject,
      updateUserData,
    };

    return (
        <AppContext.Provider value={value}>
            {
                children
            }
        </AppContext.Provider>
    )
}