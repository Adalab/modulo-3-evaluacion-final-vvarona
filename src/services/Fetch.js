const callToApi = () => {
  // Llamamos a la API
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((item) => (
        {
          name: item.name,
          species: item.species,
          house: item.house,
          patronus: item.patronus,
          alive: item.alive,
          image: item.image,
          alias: item.alternate_names,
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
