import React, { useState, useEffect } from 'react';

const Button = ({ children, onClick, className, contentEditable = false, onBlur }) => {
    const [editableText, setEditableText] = useState(children);
    //getting external state
    useEffect(() => {
        setEditableText(children);
    }, [children]);

    const handleBlur = (e) => {
        if (contentEditable && onBlur) {
            onBlur(e); // Callback func
        }
         if (contentEditable) {
            setEditableText(e.target.innerText); // update internal state
        }
    };

    return (
        <button
            onClick={onClick}
            className={`font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 ${className}`}
            contentEditable={contentEditable}
            onBlur={handleBlur}
            suppressContentEditableWarning={true}
        >
            {contentEditable ? editableText : children}
        </button>
    );
};

export default Button;
