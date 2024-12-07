import React, {useState, useEffect, useRef} from 'react';

import MathQuill from 'react-mathquill';


const FormulaEditor = ({onChange}) => {
        const [Latex, setLatex] = useState('');
        const MathFieldRef = useRef(null);

        useEffect(() => {
            if (MathFieldRef.current) {
                MathFieldRef.current.latex(Latex);
            }
        
        }, [Latex]);
        
        const handleLatexChange = (mathField) => {
            setLatex(mathField.latex());
            if (onChange){
                onChange(mathField.latex());
            }
        };
        return (
            <div>
            <MathQuill.MathField
                ref = {MathFieldRef}
                latex={Latex}
                onChange={handleLatexChange}
            />
            </div>

        );
};
export default FormulaEditor;