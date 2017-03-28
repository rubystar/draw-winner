import axios from 'axios';


// Sync actions ** add entry **
export const updateEntrySuccess = (entry) => {
  return {
    type: "UPDATE_ENTRY",
    entry
  }
}

// Async action ** add entry **
export const updateEntry = (entry) => {
  console.log('about to call api');
  return (dispatch) => {
    return axios.put('http://localhost:4000/entries/' + entry.id, {
        winner: true
      })
      .then( (response) => {
        dispatch(updateEntrySuccess(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
  } 
}

// Sync actions ** add entry **
export const addEntrySuccess = (entry) => {
  return {
    type: "ADD_ENTRY",
    entry
  }
}

// Async action ** add entry **
export const addEntry = (entry) => {
  console.log('about to call api');
  return (dispatch) => {
    return axios.post('http://localhost:4000/entries', entry)
      .then( (response) => {
        dispatch(addEntrySuccess(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
  } 
}

// Sync actions **fetch entries **
export const fetchEntriesLoad= (entries) => {
  return {
    type: "LOAD_ENTRIES",
    entries
  }
}

export const fetchEntriesSuccess= (entries) => {
  return {
    type: "FETCH_ENTRIES_SUCCESS",
    entries
  }
}

export const fetchEntriesError= (entries) => {
  return {
    type: "LOAD_ENTRIES",
    entries
  }
}

// Async action ** fetch entries **
export const fetchEntries = () => {
  return (dispatch) => {
    return axios.get('http://localhost:4000/entries')
      .then( (response) => {
        dispatch(fetchEntriesSuccess(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
  } 
}
