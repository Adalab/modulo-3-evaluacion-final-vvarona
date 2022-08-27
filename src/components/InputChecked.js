import React from "react";

function InputChecked(prop) {

    const array = prop.optionsArray;

    const mapedChecked = array.map((item, i) => {

        return (
            <React.Fragment key={i}>
                <input 
                    type="checkbox" 
                    id={`checkbox${i}`} 
                    name={`checkbox${i}`} 
                    value={item} 
                    
                />
                <label 
                    htmlFor={`checkbox${i}`}
                > 
                    {item} 
                </label>
            </React.Fragment>
        )
    }
    )


    return (
        <>
            {mapedChecked}
        </>
    )
}

export default InputChecked;

