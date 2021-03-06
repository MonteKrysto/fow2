import React from "react"

interface Props {}

const Badge: React.FC<Props> = ({ text }: string) => (
    <span className="flex rounded-full align-baseline items-center justify-center bg-red-200 px-1 ml-auto rounded-sm">
        <p className="text-red-600 text-xs-10 font-sans font-bold px-1">{text}</p>
    </span>
)
export default Badge
