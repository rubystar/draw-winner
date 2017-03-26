import React from 'react';
import axios from 'axios'; 

class Entries extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: [],
      lastWinner: '',
      newEntry: ''
    }
  }

  componentDidMount () {
    let self = this;
    axios.get('http://localhost:4000/entries')
      .then(function (response) {
        self.setState({entries: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  drawWinner (e) {
    let pool = this.state.entries.filter(entry => !entry.winner)

    if (pool.length > 0) {
      let entry = pool[Math.floor(Math.random()*pool.length)];
      let newList = this.state.entries.map( (ent) => {
        ent.name === entry.name ? ent.winner = true : ent.winner = ent.winner
        return ent;
      })
      this.setState({entries: newList, lastWinner: entry})

      axios.put('http://localhost:4000/entries/' + entry.id, {
        winner: true
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  onSubmit (e) {
    var self = this;
    e.preventDefault();
    let val = this.state.newEntry;
    if (val.trim() === "") return ;

    axios.post('http://localhost:4000/entries', {
      name: val,
      winner: false
    })
    .then(function (response) {
      let newList = self.state.entries.concat(response.data);
      self.setState({entries: newList, newEntry: ''});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onNewEntry (e) {
    this.setState({newEntry: e.target.value})
  }

  render () {
    return (
      <div className='container'>
        <button onClick={this.drawWinner.bind(this)}>Draw winner</button>

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' value={this.state.newEntry} onChange={this.onNewEntry.bind(this)}/>
          <input type="submit" value="Add" />
        </form>

        <ul>
          {this.state.entries.map((entry) => 
            <li key={entry.id}> {entry.name}
              <span 
                style={{display: entry.winner ? 'block' : 'none'}}
                className={entry.name === this.state.lastWinner.name ? 'winner highlight' : 'winner'}>WINNER</span> 
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Entries;