import React from 'react';
import {MathComponent} from 'mathjax-react';

const FormulaDisplay = ({latex}) => {


return (
    <div>
        <MathComponent tex={latex} />
    </div>
);
};
export default FormulaDisplay;