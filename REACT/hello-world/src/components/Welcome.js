import React, {Component} from 'react'

//A class compnent must extend from component (a react class) and have to implement a render methode
//render return null or html
class Welcome extends Component {
    render() { 
        return (
        <h1>
            Welcome {this.props.name} a.k.a {this.props.heroName} 
        </h1>
        )
    }
}

export default Welcome