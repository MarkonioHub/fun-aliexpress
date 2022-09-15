import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>} />
            })}
            {user.isAuth && authRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>} />
            })}
            {!user.isAuth && authRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Navigate to={LOGIN_ROUTE} replace/>}/>
            })}
        </Routes>
    );
});

export default AppRouter;
