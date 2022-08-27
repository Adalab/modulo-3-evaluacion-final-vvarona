function InputText(prop) {
    return (
        <>
            <label htmlFor='quote'>{prop.labelText}</label>
            <input
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