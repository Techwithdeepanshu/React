import React,{Component} from 'react'
class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:"user"
        }
        console.log("Lifecycle Contructor B")
    }
    static getDerivedStateFromProps(props, state)
    {console.log("LifeCycle getDerivedStateFromProps B")
return null
}
componentDidMount()
{
    console.log("LifeCycle componentDidMount B")
}
render(){
    console.log("Lifecycle of render B")
    return(
        <div>Lifecycle B</div>
    )
}
}
export default LifecycleB