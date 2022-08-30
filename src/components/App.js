import '../styles/App.scss';
import '../styles/Filter.scss';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import callToApi from '../services/Fetch';
//import ls from '../services/LocalStorage'
import InputSelect from './InputSelect';
import InputChecked from './InputChecked';
import InputText from './InputText';
import RenderCharactersData from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { matchPath, useLocation } from "react-router";

function App() {

  const [charactersData, setCharactersData] = useState([]) // useState(ls.get('HarryPotterData', []));
  const [nameInput, setNameInput] = useState('');
  const [houseInput, setHouseInput] = useState('Gryffindor');
  const [checkInput, setCheckInput] = useState([]);





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
    setCheckInput([])
  }


  const handleNameInput = (ev) => {
    ev.preventDefault();
    setNameInput(ev.target.value)
  }

  const handleSelectInputForHouse = (ev) => {
    ev.preventDefault()
    setHouseInput(ev.target.value);
  }

  const handleClickCheck = (value) => {

    if (checkInput.includes(value)) {
      const newList = checkInput.filter(item => item !== value)
      setCheckInput(newList)
    } else {
      setCheckInput([...checkInput, value])
    }

  }


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
      if (checkInput.length !== 0) {
        return checkInput.includes(character.species)
      } return true
    },

    ).filter((character) => character.name.toLowerCase().includes(nameInput.toLowerCase()))

  const { pathname } = useLocation();

  const dataPath = matchPath("user/:characterId", pathname)

  const characterId = dataPath !== null ? dataPath.params.characterId : null;

  const characterFound = charactersData.find(character => { return character.id === characterId })
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  return (

    <div className='app'>

      <header>
        <h1 className='header-title'>Harry Potter Characters</h1>
      </header>

      <Routes>
        <Route
          path={"/"}
          element={<>

            <form className='form'>

              <InputText
                labelText={'Nombre: '}
                inputId={'name'}
                placeholder={'Escribe un nombre '}
                inputValue={nameInput}
                onChange={handleNameInput}
                classNameInput={'form-text-input'}
                classNameLabel={'form-text-label'}
              />

              <InputSelect
                labelText={'Casas: '}
                optionsArray={filteredHouse(charactersData)}
                value={houseInput}
                onChange={handleSelectInputForHouse}
              />
        
              <InputChecked
                optionsArray={filteredSpecies(charactersData)}
                checkedValues={checkInput}
                handleChecked={handleClickCheck}
              />

              <button className='form-button' onClick={handleResetButton}>Resest Filters</button>

            </form>

            <RenderCharactersData
              filterCards={filterCards}
              texInputValue={nameInput}
            />

            <i className="fa-solid fa-arrow-up fa-xl footer-arrow" title="Ir arriba" onClick={scrollUp}></i>
          </>}
        />

        <Route
          path='user/:characterId'
          element={<CharacterDetail item={characterFound} />}
        />

      </Routes>





      <footer className='footer'>



      </footer>

    </div>
  );
}

export default App;
