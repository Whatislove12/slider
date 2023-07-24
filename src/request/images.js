export const getImages = async () => {

    const limitImages = 20;
  return  fetch(`https://naruto-api.fly.dev/api/v1/characters?limit=${limitImages}`)
    .then((response) => response.json()) // Convert response to blob
    .then(json => json)
    .catch(error => {
      console.error(error);
    });
};
