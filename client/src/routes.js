import Auth from "./pages/Auth"
import Home from "./pages/Home"
import BuyerProtection from "./pages/BuyerProtection"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Category from "./pages/Category"
import Admin from "./pages/Admin"
import Favorites from "./pages/Favorites"
import Basket from "./pages/Basket"
import React from 'react';
import {BUYER_PROTECTION_ROUTE, HOME_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, CATEGORY_ROUTE, BASKET_ROUTE, FAVORITES_ROUTE} from "./utils/consts"

export const authRoutes = [
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CATEGORY_ROUTE + '/:id',
        Component: Category
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BUYER_PROTECTION_ROUTE,
        Component: BuyerProtection
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: '*',
        Component: NotFound
    }
]
