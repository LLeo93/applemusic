console.log('Caricato musicAction ✅');
import axios from 'axios';

export const fetchNewReleases = (searchTerm) => async (dispatch) => {
  dispatch({ type: 'FETCH_NEW_RELEASES_REQUEST' });

  try {
    const response = await axios.get(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`
    );
    dispatch({
      type: 'FETCH_NEW_RELEASES_SUCCESS',
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_NEW_RELEASES_FAIL',
      payload: error.message,
    });
  }
};
