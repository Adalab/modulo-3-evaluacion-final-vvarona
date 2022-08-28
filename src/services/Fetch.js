
const placeholderImage = "https://via.placeholder.com/210x295/ba7065/666666/?text=No+Image";


const callToApi = () => {
  // Llamamos a la API

  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((item) => (
        {
          name: item.name,
          alias: item.alternate_names === "" ? null : item.alternate_names ,
          species: item.species,
          house: item.house === "" ? "No es un estudiante" : item.house,
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
