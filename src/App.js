import React, {Component} from 'react'


class App extends Component {

state = {
  count: 0
}

countUp = () => {
  this.setState(
    {count: this.state.count +1}
  )
}

countDown = () => {
  this.setState(
    {count: this.state.count -1}

  )
}

render () {
  return(
    <div className='App'>
      <h1>Come Count with <br/> The Count !<br/> 'hahahahaha'</h1>
      
      
      <button className='buttonup both'onClick={this.countUp}>Count up </button>
      <br/>
      <br/>

      <button className='buttondown both'onClick={this.countDown}>Count down</button>
      <p>The Current Count:</p>
      <h4>{this.state.count}</h4>
    </div>

  )
}

}

export default App
