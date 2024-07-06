import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [show, setShow] = useState(false);
    return (
        <AppContext.Provider value={[show, setShow]}>
            {children}     
        </AppContext.Provider>
    )
}

export default AppProvider;
 

