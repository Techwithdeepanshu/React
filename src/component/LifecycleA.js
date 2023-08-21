import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
      this.state = {
          name: "Admin"
        }
        console.log("LifeCycle Contructor A")
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log("LifeCycle getDerivedStateFromProps A ")
        return null 
    }
    componentDidMount()
    {
        console.log(" LifeCycle componentDidMount A"  )
    }
    render() {
      console.log("Lifecycle of render A")
    return (
        <div>
            <LifecycleB/>

        </div>
    )
  }
}
export default LifecycleA