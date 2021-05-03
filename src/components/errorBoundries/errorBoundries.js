import React, { Component } from 'react'
import ErrorIndicator from '../errorIndicator'

export default class ErrorBoundries extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(err, errInfo) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return (
                <ErrorIndicator />
            )
        }

        return this.props.children
    }
}

