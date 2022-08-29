import gryffindorLogo from '../images/gryffindor.png';
import hufflepuffLogo from '../images/hufflepuff.png';
import ravenclawLogo from '../images/ravenclaw.png';
import slytherinLogo from '../images/slytherin.png'
import hogwartsLogo from '../images/hogwarts.png'
import placeholder from '../images/black-marble-textures-plain.png'

const gryffindor = gryffindorLogo;
const slytherin = slytherinLogo;
const hufflepuff = hufflepuffLogo;
const ravenclaw = ravenclawLogo;
const hogwarts = hogwartsLogo;


const getHouseEmblem = (characterHouse) => {

  if (characterHouse === 'Gryffindor')
    return gryffindor;

  if (characterHouse === 'Slytherin')
    return slytherin;

  if (characterHouse === 'Hufflepuff')
    return hufflepuff;

  if (characterHouse === 'Ravenclaw')
    return ravenclaw;

  if (characterHouse === '')
    return hogwarts;
}

const removeSpace = (string) => string.split(' ').join('');

const placeholderImage = placeholder;
/* const placeholderImage = "https://via.placeholder.com/210x295/ba7065/666666/?text=No+Image";
 */
const callToApi = () => {
  // Llamamos a la API

  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((item, i) => (
        {
          name: item.name,
          id: removeSpace(item.name)+i,
          alias: item.alternate_names === "" ? null : item.alternate_names,
          species: item.species,
          house: item.house === "" ? "No es un estudiante" : item.house,
          houseEmblem: getHouseEmblem(item.house),
          patronus: item.patronus === "" ? "Sin Info" : item.patronus,
          alive: item.alive,
          image: item.image === "" ? placeholderImage : item.image,
          imageAlt: item.image === "" ? `No hay foto de ${item.name}` : `Foto de ${item.name}`,
        }
      )
      )

      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default callToApi;
