
const initialState = {list: [{id: 1, name: 'DHH', winner: false}], lastWinner: undefined};

export const entries = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_ENTRIES_SUCCESS':
      return {...state, list: action.entries};
    case 'ADD_ENTRY':
      return {...state, list: state.list.concat(action.entry)};
    case 'UPDATE_ENTRY':
      const lst = state.list.map((ent) => {
        if (ent.id === action.entry.id) {
          return {...ent, winner: true}
        }
        return ent;
      });
      return {...state, list: lst, lastWinner: action.entry.id}
    default:
      return state;
  }
}
