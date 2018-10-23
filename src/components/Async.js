import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Async extends Component {
    componentDidMount = () => {
        this.cancelUpdate = false
        this.load(this.props.load)
    }
    
    componentWillUnmount = () => {
        this.cancelUpdate = true
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props.load !== nextProps.load) {
            this.load(nextProps.load)
        }
    }
    
    load = (load) => {
        load.then(mod => {
            this.Mod = mod
            if (!this.cancelUpdate) {
                this.forceUpdate()
            }
        })
    }

    render = () => {
        const { load, ...componentProps } = this.props
        return this.Mod
            ? this.Mod.default
                ? <this.Mod.default {...componentProps} />
                : <this.Mod {...componentProps} />
            : null
    }

    static propTypes = {
        load: PropTypes.instanceOf(Promise).isRequired
    }
}
