import React from "react";

function InputChecked(prop) {

    const handleCheckFilter = (ev) => {
        prop.handleChecked(ev.target.value)
    }

   
    const array = prop.optionsArray;

    const mapedChecked = array.map((item, i) => {

        return (
            <React.Fragment key={i}>
                <input
                    type="checkbox"

                    name='species'
                    value={item}
                    onChange={handleCheckFilter}
                />
                <label
                    htmlFor="">
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

