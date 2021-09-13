import React,{PureComponent} from 'react'
import Restaurants from "./restaurant";



export default class App extends  PureComponent {
    componentDidMount() {
        console.log('i mounted')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('I updated')
    }






    render() {
       return (
           <div>
               <Restaurants restaurants = {this.props.restaurants} />
                <h1>hello from app!</h1>

               <button> + </button>
           </div>
       )
    }
}