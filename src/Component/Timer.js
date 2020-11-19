import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.seconds===59)
            {
                this.setState({seconds:-1,minutes:this.state.minutes+1})

            }
            this.setState({seconds:this.state.seconds+1})
            
             
        }, 1000)
    }

    

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
               { minutes } :: { seconds}
            </div>
        )
    }
}