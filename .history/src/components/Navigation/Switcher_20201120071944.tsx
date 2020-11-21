import React from "react"
import { Switch, Route } from "react-router-dom"
import { Home } from "../../../pages"
import { SignIn } from "../../pages/auth/signIn"
import { SignUp } from "../../pages/auth/signUp"

const Switcher = () => (
    <Switch>
        <Route path="/signin">
            <SignIn />
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
        {/* <Route path="/customers">
            <CustomersPage />
        </Route>
        <Route path="/sales">
            <SalesPage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route> */}
        <Route path="/">
            <Home />
        </Route>
    </Switch>)

export { Switcher }
