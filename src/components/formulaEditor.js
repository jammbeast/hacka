import React from 'react'

const FormulaEditor = ({onFormulaChange}) =>{
    const [formula, setformula] = React.useState('');

    const handleChange = (e) => {
        const newformula = e.target.value;
        setformula(newformula);
        onFormulaChange(newformula);
    };
    return (
        <div className ="flex flex-col h-full text-black">
            <textarea
                value = {formula}
                onChange = {handleChange}
                className = "flex-1 border p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder = "Введите формулу в формате LaTeX"

            ></textarea>
        </div>
    );

};
export default FormulaEditor;