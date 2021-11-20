import React, { createContext, useState } from 'react';

const UserContext = createContext({
    
});

const UserProvider = ({ children }) => {
    const [isUserAuth, setUserAuth] = useState(false)
    const [user, setUser] = useState(null)

    const login = (data) => {
        setUser(data)
        setUserAuth(true)
    }

    const logout = () => {
        setUser(null)
        setUserAuth(false)
    }

    const data = { user, login, logout, isUserAuth }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext;