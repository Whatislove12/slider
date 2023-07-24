export const getImages = async () => {

    const limitImages = 30;
  return  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitImages}`)
    .then((response) => response.json()) // Convert response to blob
    .then(json => json.results)
    .catch(error => {
      console.error(error);
    });
};
