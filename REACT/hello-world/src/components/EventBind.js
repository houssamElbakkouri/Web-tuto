import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }
    /*
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }
    */

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*Different solution to bind an event*/}

                {/*1st: bind methode*/}
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}

                {/*2nd: errow fucntions*/}
                {/*<button onClick={() => this.clickHandler()}>Click</button>*/}

                {/*3rd: bind in constructor*/}
                {/*4th: turn clickHandler into an errow fonction*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
