function InputRadio(prop) {

    const handleRadioInput = (ev) => {
        prop.handleRadio(ev.target.value);
    }

    return (<>
        <div>
            <input type="radio" id="alive" name="isAlive" value={'alive'}
                checked={prop.radioInput === 'alive' ? true : false} onChange={handleRadioInput} />
            <label htmlFor="alive">Alive</label>
        </div>
        <div>
            <input type="radio" id="dead" name="isAlive" value={'dead'}  checked={prop.radioInput === 'dead' ? true : false} onChange={handleRadioInput}/>
            <label htmlFor="dead">Dead</label>
        </div>
    </>)
}

export default InputRadio