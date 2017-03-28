import { connect } from 'react-redux';
import Entries from '../components/entries';
import { addEntry, updateEntry } from '../actions/entries-actions';
import store from '../store';

const mapStateToProps = (store) => {
  return {
    entries: store.entries.list,
    lastWinner: store.entries.lastWinner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEntrySubmit: (input) => {
      dispatch(addEntry({name: input, winner: false}))
    },

    drawWinner: () => {
      let pool = store.getState().entries.list.filter(entry => !entry.winner)

      if (pool.length > 0) {
        let entry = pool[Math.floor(Math.random()*pool.length)];
        dispatch(updateEntry(entry));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries)