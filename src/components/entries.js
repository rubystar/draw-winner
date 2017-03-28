import React from 'react';
import store from '../store';
import { fetchEntries } from '../actions/entries-actions';

class Entries extends React.Component {

  componentDidMount () {
    store.dispatch(fetchEntries());
  }

  render () {
    let textInput;
    return (
      <div className='container'>
        <button onClick={this.props.drawWinner}>Draw winner</button>

        <form onSubmit={(evt) => {
          evt.preventDefault();
          if (textInput.value.trim() === '') return;
          this.props.onEntrySubmit(textInput.value);
          textInput.value = ''
        }}>
          <input type='text'  ref={(input) => textInput = input }/>
          <input type="submit" value="Add" />
        </form>

        <ul>
          {this.props.entries.map((entry) => 
            <li key={entry.id}> {entry.name}
              <span 
                style={{display: entry.winner ? 'block' : 'none'}}
                className={entry.id === this.props.lastWinner ? 'winner highlight' : 'winner'}>WINNER</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Entries;