import React, { Component } from 'react'
import Hello from './Hello'

interface Loading{
    loading:boolean
}

function Hoc<P>(WrappedComponent:React.ComponentType<P>){
    return class extends Component<P & Loading>{
        render(){
            const {loading,...props} = this.props
            return loading ? <div>loading...</div>:<WrappedComponent {...props as P}/>
        }
    }
}

export default Hoc(Hello) 