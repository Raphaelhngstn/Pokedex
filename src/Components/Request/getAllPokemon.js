import axios from 'axios';
export async function getAllPokemon(loadMore) {
    try {
        const response = await axios.get(loadMore);
        return response.data;
    } catch (err) {
        return err.response;
    }
}
