import '../styles/App.css';
import callToApi from '../services/Fetch';
import { useState, useEffect } from 'react';
import InputText from './InputText';


function App() {

  const [charactersData, setCharactersData] = useState([]);
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    callToApi()
      .then((result) => {
        setCharactersData(result)
      })
  }, [])

  const filterByName = (characterList) => {
    return (
      characterList.filter((item)=>item.name.toLowerCase().includes(nameInput.toLowerCase())))
}

const handleNameInput = (ev) => {
  setNameInput(ev.target.value)
}

//const filteredByText = filterByName(charactersData)

  const renderCharactersData = filterByName(charactersData).map((item, index) => {
    
      return (
        <li key={index}>
          <div>ver mas</div>
          <img
            src={item.image}
            alt={`Foto de ${item.name}`}
            title={`Foto de ${item.name}`}
          />
          <h3>{item.name}</h3>
          <p>{item.species}</p>
          <div><p>{item.house}</p></div>
        </li>
      )
    })
  

  return (
    <div>
      <header>
        <h1>Harry Potter Characters</h1>
      </header>
      <InputText
         labelText={'Filtro: '}
         inputId={'name'}
         inputValue={nameInput}
         onChange={handleNameInput}
      />
      <section>
        {renderCharactersData}
      </section>



    </div>
  );
}

export default App;
