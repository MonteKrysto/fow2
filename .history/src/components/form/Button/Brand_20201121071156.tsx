import React from "react"
import PropTypes from "prop-types"
import withStyledButton from "./withStyledButton"

const commonClasses: String[] = ["bg-brand outline-none font-helvetica text-white tracking-wider cursor-pointer focus:shadow-outline"]

interface Props {
    props: any
}
const BrandButtonDefault = (props: Props) => {
    let defaultClasses: String[] = ["w-26 py-2 text-base rounded-base mr-5"]
    defaultClasses.push(commonClasses)
    return withStyledButton(defaultClasses, props)
}

const BrandButtonLarge = (props: Props) => {
    let defaultClasses = ["w-full py-4 rounded-md outline-none cursor-pointer"]
    defaultClasses.push(commonClasses)
    return withStyledButton(defaultClasses, props)
}

interface ButtonProps {
    type: string
    value: string
    event: React.MouseEvent<HTMLButtonElement>
    classes: string
}
const Button: React.FC<ButtonProps> = ({
    type,
    value,
    event,
    classes }) => {

    if (type === "submit") {
        return (<input
            className={classes}
            type={type}
            value={value}
            onSubmit={event} />)
    }

    if (type === "button") {
        return (<input
            className={classes}
            type={type}
            value={value}
            onClick={event} />)
    }

}

export { Button }
export { BrandButtonDefault }
export { BrandButtonLarge }
