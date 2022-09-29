import React from "react";

function InputChecked(prop) {

    const handleCheckFilter = (ev) => {
        prop.handleChecked(ev.target.value)
    }

   
    const array = prop.optionsArray;

    const mapedChecked = array.map((item, i) => {

        return (
            <div key={i} className={"check-label-container"}>
                <input
                    className="check-input"
                    type="checkbox"
                    name='species'
                    value={item}
                    id={item}
                    checked={prop.checkedValues.includes(item)}
                    onChange={handleCheckFilter}
                />
                <label
                    className="check-label"
                    htmlFor={item}>
                    {item}
                </label>
            </div>
        )
    }
    )


    return (
        <fieldset className={"check-section"} >
            {mapedChecked}
        </fieldset>
    )
}

export default InputChecked;

