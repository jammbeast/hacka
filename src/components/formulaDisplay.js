import React from 'react'
import { MathComponent } from 'mathjax-react'

const FormulaDisplay = ({formula}) => {
    return (
        <div className="flex flex-col h-full text-black">
            <MathComponent tex={formula} />
        </div>
    );


};

export default FormulaDisplay;