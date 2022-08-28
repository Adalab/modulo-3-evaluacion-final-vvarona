function InputSelect(prop) {

    const array = prop.optionsArray;

    const mapedOptions = array.map((item, i) =>
        <option key={i} value={item}>{item}</option>
    )

    return (
        <>
            <label htmlFor={prop.labelText}>{prop.labelText}</label>
            <select name="select" id={prop.labelText} value={prop.value} onChange={prop.onChange}>
                {mapedOptions}
                <option value='all'>Todos</option>
            </select>
        </>
    )
}

export default InputSelect;

