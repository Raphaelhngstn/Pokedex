import axios from 'axios';
export async function getOnePokemon(pokemon) {
    try {
        const response = await axios.get(pokemon);
        return response.data;
    } catch (err) {
        return err.response;
    }
}
