import React from "react"
import PropTypes from "prop-types"
import withStyledButton from "./withStyledButton"

const commonClasses: String= "bg-brand outline-none font-helvetica text-white tracking-wider cursor-pointer focus:shadow-outline"

interface Props {
    type: string
    value: string
    event: () => {}
    classes: string
}
const BrandButtonDefault: React.FC<Props> = ({
    type,
    value,
    event,
    classes }) => {
    let defaultClasses: String[] = ["w-26 py-2 text-base rounded-base mr-5"]
    defaultClasses.push(commonClasses)
    return withStyledButton(defaultClasses, type, value, event, classes)
}

const BrandButtonLarge: React.FC<Props> = ({
    type,
    value,
    event,
    classes }) => {
    let defaultClasses: String[] = ["w-full py-4 rounded-md outline-none cursor-pointer"]
    defaultClasses.push(commonClasses)
    return withStyledButton(defaultClasses, type, value, event, classes)
}

interface ButtonProps {
    type: string
    value: string
    event: any
    classes: string
}
const Button: React.FC<ButtonProps> = ({
    type,
    value,
    event,
    classes }: ButtonProps) => {

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
    return null
}


export { Button }
export { BrandButtonDefault }
export { BrandButtonLarge }
