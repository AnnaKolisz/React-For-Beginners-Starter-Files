import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";
import base from "../base";


class App extends React.Component{
    state ={
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish =>{
       const fishes = { ...this.state.fishes};
       fishes[`fishes${Date.now()}`]=fish;
       this.setState({
           fishes: fishes
       })
    }

    updateFish = (key, updateFish) => {
        const fishes = { ...this.state.fishes};
        fishes[key]= updateFish;
        this.setState({fishes});
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({ fishes});

    }

    addToOrder = key => {
        const order = { ...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    removeFromOrder = (key) => {
        const order = { ...this.state.order};
       if(order[key]  > 1){
           order[key] = order[key] - 1;
       } else {
           delete order[key];
       }
        this.setState({ order });
    }
    
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }
    render() {
        return (
            <div className="catch-of-the-day">
               <div className="menu">
                   <Header tagline="Fresh Seafood market" />
                   <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => 
                    <Fish 
                    key={key} 
                    index={key}
                    addToOrder={this.addToOrder}
                    details={this.state.fishes[key]}/>)}
                   </ul>
               </div>
               <Order 
                fishes={this.state.fishes} 
                order={this.state.order}
                removeFromOrder={this.removeFromOrder}
                />
               <Inventory 
                addFish={this.addFish}
                updateFish = {this.updateFish }
                deleteFish = {this.deleteFish }
                loadSampleFishes={this.loadSampleFishes}
                fishes={this.state.fishes}
                />
                
            </div>
        );

    }
}

export default App;