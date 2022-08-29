function InputText(prop) {
    return (
        <>
            <label
                htmlFor={prop.inputId}
                className={prop.classNameLabel}>
                {prop.labelText}
            </label>
            <input
                className={prop.classNameInput}
                type='text'
                id={prop.inputId}
                name={prop.inputId}
                placeholder={prop.placeholder}
                value={prop.inputValue}
                onChange={prop.onChange}
            />
        </>
    )
}

export default InputText;