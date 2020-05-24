import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';



class App extends React.Component{
    state ={
        fishes: {},
        order: {}
    };
    addFish = fish =>{
       const fishes = { ...this.state.fishes};
       fishes[`fishes${Date.now()}`]=fish;
       this.setState({
           fishes: fishes
       })
    }
    render() {
        return (
            <div className="catch-of-the-day">
               <div className="menu">
                   <Header tagline="Fresh Seafood market" />
               </div>
               <Order />
               <Inventory addFish={this.addFish}/>
            

            </div>
        );

    }
}

export default App;