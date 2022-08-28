function InputSelect(prop) {

    const array = prop.optionsArray;

    const mapedOptions = array.map((item, i) =>
        <option key={i} value={item}>{item}</option>
    )

    return (
        <>
            <label htmlFor="select" >{prop.labelText}</label>
            <select name="select" value={prop.value} onChange={prop.onChange}>
                {mapedOptions}
                <option value='all'>Todos</option>
            </select>
        </>
    )
}

export default InputSelect;

