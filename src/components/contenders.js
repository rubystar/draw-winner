import React from 'react';

class Contenders extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contenders: [
        {name: 'DHH', winner: false},
        {name: 'Tenderlove', winner: false},
        {name: 'Jose', winner: false}
      ],
      lastWinner: '',
      newEntry: ''
    }
  }

  drawWinner (e) {
    let pool = this.state.contenders.filter(contender => !contender.winner)

    if (pool.length > 0) {
      let contender = pool[Math.floor(Math.random()*pool.length)];

      let newList = this.state.contenders.map( (cont) => {
        cont.name === contender.name ? cont.winner = true : cont.winner = cont.winner
        return cont;
      })
      this.setState({contenders: newList, lastWinner: contender})
    }
  }

  onSubmit (e) {
    e.preventDefault();
    let val = this.state.newEntry;
    if (val.trim() === "") return ;
    let newList = this.state.contenders.concat({name: val, winner: false});
    this.setState({contenders: newList, newEntry: ''});
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
          {this.state.contenders.map((cont, index) => 
            <li key={index}> {cont.name}
              <span 
                style={{display: cont.winner ? 'block' : 'none'}}
                className={cont.name === this.state.lastWinner.name ? 'winner highlight' : 'winner'}>WINNER</span> 
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Contenders;