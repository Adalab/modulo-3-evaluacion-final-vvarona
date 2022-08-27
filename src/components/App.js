import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/Fetch';
import ls from '../services/LocalStorage'
import InputSelect from './InputSelect';
import InputChecked from './InputChecked';
import InputText from './InputText';


function App() {

  const [charactersData, setCharactersData] = useState([]) // useState(ls.get('HarryPotterData', []));
  const [nameInput, setNameInput] = useState('');
  const [houseInput, setHouseInput] = useState('Gryffindor')

  

  useEffect(() => {
    callToApi()
      .then((result) => {
        setCharactersData(result);
      })
  }, [])

  // ls.set('HarryPotterData', charactersData);

  const filterByName = (characterList) => {
    return (
      characterList.filter((item) => item.name.toLowerCase().includes(nameInput.toLowerCase())))
  }

  const handleNameInput = (ev) => {
    setNameInput(ev.target.value)
  }

  const handleSelectInput = (ev) => {
    setHouseInput(ev.target.value)
  }

 
  const filteredHouse = (characterList) => {
    const properties = characterList.map((item)=> item.house)
    const setproperty = new Set(properties)
    const arrayOfSetedProperty = Array.from(setproperty)

    return arrayOfSetedProperty
  }

  const filteredSpecies = (characterList) => {
    const properties = characterList.map((item)=> item.species)
    const setproperty = new Set(properties)
    const arrayOfSetedProperty = Array.from(setproperty)

    return arrayOfSetedProperty
  }
 

  const renderCharactersData = filterByName(charactersData).map((item, index) => {

    return (
      <li className='card-item' key={index}>
        <div className='card-item-more'>+</div>
        <img
          className='card-item-img'
          src={item.image}
          title={item.imageAlt}
          alt={item.imageAlt}
        />
        <h3 className='card-item-name'>{item.name}</h3>
        <p className='card-item-species'>{item.species}</p>
        <div className='card-item-house'><p>{item.house}</p></div>
      </li>
    )
  })



  return (
    <div>
      <header>
        <h1 className='header-title'>Harry Potter Characters</h1>
      </header>
      <InputText
        labelText={'Filtro: '}
        inputId={'name'}
        placeholder={'Escribe un nombre '}
        inputValue={nameInput}
        onChange={handleNameInput}
      />
      <InputSelect
        labelText={'Casas: '}
        optionsArray={filteredHouse(charactersData)}
        value={houseInput}
        onChange={handleSelectInput}
      />
      <InputSelect
        labelText={'Especie: '}
        optionsArray={filteredSpecies(charactersData)}
      />
      <InputChecked
        labelText={'Especie: '}
        optionsArray={filteredSpecies(charactersData)}
      />
      <section className='list-cards'>
        {renderCharactersData}
      </section>



    </div>
  );
}

export default App;
