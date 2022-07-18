const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

export const getAllPokemons = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error('Error fetching pokemons');
  }
};
