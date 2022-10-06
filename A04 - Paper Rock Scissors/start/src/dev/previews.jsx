import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Gggg from "../gggg";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Gggg">
                <Gggg/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
