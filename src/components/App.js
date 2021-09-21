import React,{PureComponent} from 'react'
import Restaurants from "./restaurants";



export default class App extends  PureComponent {
    componentDidMount() {
        console.log('i mounted')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('I updated')
    }

    render() {
       return (
           <div className={'container'}>
               <Restaurants  />
           </div>
       )
    }
}