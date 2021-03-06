import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault as Button } from '../../../../../form/Button';


const RequestButton = () => {

    const login = (e: E) => e.preventDefault()

    return <Link to="/features/request-feature">
        <Button
            type="submit"
            value="Request"
            event={login}
            classes="rounded-tr-none rounded-tl-none text-xs w-full" />
    </Link>
}

export default RequestButton
