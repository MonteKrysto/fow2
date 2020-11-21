import React from 'react';
import Switcher from './Switcher';
import Linker from "./Linker"

interface IProps {}

const Navigation: FC<IProps> = props => (
    <div>
        <Linker />
    </div>
);

export default Navigation
export { Switcher }