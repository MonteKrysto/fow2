import React, { Fragment } from "react"
import SearchField from "../../components/Navigation/Links/Features/Menu/Search"
import {Navigation} from "../../components/Navigation"


interface Props {}
const Header: React.FC<Props> = () => (
    <Fragment>
        <header className="xs:px-2 sm:py-2
                           sm:px-6 sm:py-3
                           md:px-8 sm:py-4
                           flex justify-start bg-blue-900 py-4 px-10 items-center ">
            <div className="flex flex-grow items-center">
                <div>
                <Navigation/>
                </div>
            <div className="flex items-center ml-auto">
            </div>
            </div>
        </header>
    </Fragment>)

export { Header}
