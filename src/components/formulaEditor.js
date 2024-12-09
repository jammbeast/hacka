import React from 'react'

const FormulaEditor = ({onFormulaChange}) =>{
    const [formula, setformula] = React.useState('');

    const handleChange = (e) => {
        const newformula = e.target.value;
        setformula(newformula);
        onFormulaChange(newformula);
    };
    return (
        <div className ="flex flex-col h-[95%] text-white">
            <textarea
                value = {formula}
                onChange = {handleChange}
                className = "flex-1 border p-4 rounded- resize-none focus:outline-none focus:ring-2 bg-transparent focus:ring-gray-500"
                placeholder = "Введите формулу в формате LaTeX"

            ></textarea>
        </div>
    );

};
export default FormulaEditor;