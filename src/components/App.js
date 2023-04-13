import '../styles/App.scss';
import '../styles/Filter.scss';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import callToApi from '../services/Fetch';
//import ls from '../services/LocalStorage'
import InputSelect from './InputSelect';
import InputChecked from './InputChecked';
import InputText from './InputText';
import InputRadio from './InputRadio';
import RenderCharactersData from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { matchPath, useLocation } from "react-router";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

function App() {

  const [charactersData, setCharactersData] = useState([]) // useState(ls.get('HarryPotterData', []));
  const [nameInput, setNameInput] = useState('');
  const [houseInput, setHouseInput] = useState('Gryffindor');
  const [checkInput, setCheckInput] = useState([]);
  const [radioInput, setRadioInput] = useState('alive')

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
    setCheckInput([]);
    setRadioInput('alive')
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

  const handleRadio = (value) => {
    console.log(value);
    setRadioInput(value)
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

    ).filter((character) => character.name.toLowerCase().includes(nameInput.toLowerCase())

    ).filter((character) => character.alive === radioInput)


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

      <Link to={'/'}><header className='header'>
        <img
          src={logo}
          alt="Harry Potter Logo"
          className='header-logo'
        />
      </header>
      </Link>

      <Routes>
        <Route
          path={"/"}
          element={<>

            <form className='form'>

              <InputText
                labelText={'Name: '}
                inputId={'name'}
                placeholder={'Search by name'}
                inputValue={nameInput}
                onChange={handleNameInput}
                classNameInput={'form-text-input'}
                classNameLabel={'form-text-label'}
              />

              <InputSelect
                labelText={'House: '}
                optionsArray={filteredHouse(charactersData)}
                value={houseInput}
                onChange={handleSelectInputForHouse}
              />

              <InputChecked
                optionsArray={filteredSpecies(charactersData)}
                checkedValues={checkInput}
                handleChecked={handleClickCheck}
              />

              <InputRadio
                handleRadio={handleRadio}
                value={radioInput}
                radioInput={radioInput}
              />

              <button className='form-button' onClick={handleResetButton}>Resest Filters</button>

            </form>

            <RenderCharactersData
              filterCards={filterCards}
              texInputValue={nameInput}
            />

            <i className="fa-solid fa-arrow-up fa-xl footer-arrow" title="Go to top" onClick={scrollUp}></i>
          </>}
        />

        <Route
          path='user/:characterId'
          element={<CharacterDetail item={characterFound} />}
        />

      </Routes>





      <footer className='footer'>
        <p>Made with love by Victoria Varona in 2022</p>
        <a className='footer-link' href='https://github.com/vvarona' title='Go to my Github'>See more of my work...</a>
      </footer>

    </div>
  );
}

export default App;
