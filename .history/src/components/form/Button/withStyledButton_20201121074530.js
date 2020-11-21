import React from "react"
import { Button } from "./Brand"

const withStyledButton = (defaultClasses, {
    type,
    value,
    event,
    classes ) => {
    let classes = props.classes
    classes && defaultClasses.push(classes)
    return <Button {...props} classes={defaultClasses.join(" ")} />
}

export default withStyledButton
