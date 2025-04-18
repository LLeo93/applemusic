const initialState = {
  loading: false,
  newReleases: [],
  error: null,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEW_RELEASES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_NEW_RELEASES_SUCCESS':
      return { ...state, loading: false, newReleases: action.payload };
    case 'FETCH_NEW_RELEASES_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default musicReducer;
