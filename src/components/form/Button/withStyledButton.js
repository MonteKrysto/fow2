import React from "react"
import { Button } from "./Brand"

const withStyledButton = (defaultClasses,
    type,
    value,
    event,
    classes ) => {
    
    classes && defaultClasses.push(classes)
    return <Button
            type={type}
            value={value}
            event={event}
            classes={defaultClasses.join(" ")}
        />
}

export default withStyledButton
