import React from "react"
import { Button } from "./Brand"

const withStyledButton = (defaultClasses,
    type,
    value,
    event,
    classes ) => {
    let classes = props.classes
    classes && defaultClasses.push(classes)
    return <Button {
        type={{
    type,
    value,
    event,
    classes }}
        value={{
    type,
    value,
    event,
    classes }}
        event={{
    type,
    value,
    event,
    classes }}
        classes } classes={defaultClasses.join(" ")} />
}

export default withStyledButton
