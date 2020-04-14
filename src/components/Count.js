import React from 'react'

class Count extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        count: 0
    }}
    increase = () => {
        this.setState({count: this.state.count + 1})
    }
    decrease = () => {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div>
                <button onClick={this.increase}>    
                    +1               
                </button>
                <button onClick={this.decrease}>   
                    -1
                </button>
                {this.state.count}
            </div>
        )}
}


export default Count