import React from 'react';
import {Switcher} from './Switcher';
import {Linker} from "./Linker"

interface IProps {}

const Navigation: React.FC<IProps> = props => (
    <div>
        <Linker />
    </div>
);

export {Navigation, Switcher};
