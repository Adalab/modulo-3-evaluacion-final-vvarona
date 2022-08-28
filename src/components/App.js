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
  const [speciesInput, setSpeciesInput] = useState('human')
  //const [checkInput, setCheckInput] = useState(false)


  useEffect(() => {
    callToApi()
      .then((result) => {
        setCharactersData(result);
      })
  }, [])

  // ls.set('HarryPotterData', charactersData);

  const handleResetButton = (ev) => {
    ev.preventDefault();
    setNameInput('')
    setHouseInput('Gryffindor')
    setSpeciesInput('human')
    // setCheckInput()
  }

  const handleNameInput = (ev) => {
    ev.preventDefault();
    setNameInput(ev.target.value)
  }

  const handleSelectInputForHouse = (ev) => {
    ev.preventDefault()
    setHouseInput(ev.target.value);
  }

  const handleSelectInputForSpecies = (ev) => {
    ev.preventDefault();
    setSpeciesInput(ev.target.value);
  }

  /*   const handleChecked = (ev) => {
      ev.preventDefault();
     console.log(ev.target.id);;
      
    } */


  const filteredHouse = (characterList) => {
    const properties = characterList.map((item) => item.house)
    const setproperty = new Set(properties)
    const arrayOfSetedProperty = Array.from(setproperty)

    return arrayOfSetedProperty
  }

  const filteredSpecies = (characterList) => {
    const properties = characterList.map((item) => item.species)
    const setproperty = new Set(properties)
    const arrayOfSetedProperty = Array.from(setproperty)

    return arrayOfSetedProperty
  }

  const filterCards = charactersData
    .filter((character) => {
      if (houseInput === 'all') {
        return true
      } else {
        return (character.house === houseInput)
      }
    }
    ).filter((character) => {
      if (speciesInput === 'all') {
        return true
      } else {
        return (character.species === speciesInput)
      }
    }
    ).filter((item) => item.name.toLowerCase().includes(nameInput.toLowerCase()))

  /* const noResults = () => {
    if (filterCards.length === -1)
    return console.log('oh no, no hay ningun resultado');
  } */



  const renderCharactersData = filterCards.map((item, index) => {

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
      <form>
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
          onChange={handleSelectInputForHouse}
        />
        <InputSelect
          labelText={'Especie: '}
          optionsArray={filteredSpecies(charactersData)}
          value={speciesInput}
          onChange={handleSelectInputForSpecies}
        />
        {/* <InputChecked
          labelText={'Especie: '}
          optionsArray={filteredSpecies(charactersData)}
          checked={checkInput}
          onChange={handleChecked}

        /> */}
        <button onClick={handleResetButton}>Resest Filters</button>

      </form>

      <section className='list-cards'>
        <p>Se encontraron {renderCharactersData.length} resultados </p>
        {renderCharactersData}
      </section>



    </div>
  );
}

export default App;
