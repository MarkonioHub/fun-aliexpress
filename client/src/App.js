import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {check} from "./http/userAPI";

function App() {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            if (data) {
                user.setUser(data)
                user.setIsAuth(true)
            } else {
                user.setUser({})
                user.setIsAuth(false)
            }

        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <div className="loading-spinner-box"><div className="loading-spinner"></div></div>
    }

    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
}

export default App;
