import React from 'react'
import MathJax from 'react-mathjax2'

const FormulaDisplay = ({formula}) => {
    return (
        <div className="flex flex-col flex-grow text-whitetext-[24px]">
            <MathJax.Context input='tex'>
                <div>
                    <MathJax.Node>{formula}</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );


};

export default FormulaDisplay;