import React from "react";

function InputChecked(prop) {

    const array = prop.optionsArray;

    const mapedChecked = array.map((item, i) => {

        return (
            <React.Fragment key={i}>
                <input
                    type="checkbox"
                    id={item}
                    name={prop.name}
                    
                    onChange={prop.handleChecked}
                />
                <label
                    htmlFor={item}>
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

