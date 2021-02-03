import produce from 'immer';

export const ADD_PLAYLIST_REQUEST = 'ADD_PLAYLIST_REQUEST';

export const addPlaylistRequest = data => ({  
  type: ADD_PLAYLIST_REQUEST,
  data,
});

const initialState = {
  
  playList: null
  
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case ADD_PLAYLIST_REQUEST:
      draft.playList = action.data.id.videoId;
      break;
    default:
      break;
    }
  })

export default reducer