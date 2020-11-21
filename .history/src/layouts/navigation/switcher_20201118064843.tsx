import React from "react"
import { Switch, Route } from "react-router-dom"
import Home, {
    FeaturesPage,
    ProductsPage,
    CustomersPage,
    SalesPage,
    LoginPage
} from "../../../pages"
import { SignIn } from "../../pages/auth/signIn"

const Switcher = () => (
    <Switch>
        <Route path="/signin">
            <SignIn />
        </Route>
        <Route path="/products">
            <ProductsPage />
        </Route>
        <Route path="/customers">
            <CustomersPage />
        </Route>
        <Route path="/sales">
            <SalesPage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>)

export default Switcher