import React, { Fragment } from 'react';
import { formatPrice } from '../helpers';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();

        console.log(this.myInput.current.defaultValue);
        this.props.history.push(`/store/${this.myInput.current.defaultValue}`);
    };

    render() {
        return (
            <Fragment>
                <form className="store-selector" onSubmit={ this.goToStore }>
                    <h2>Please Enter a Store</h2>
                    <input type="text" required 
                     ref= { this.myInput }
                    placeholder="Store Name" 
                    defaultValue= { getFunName() } 
                   />

                    <button type="submit">Visit Store &#10145;</button>
                </form>
            </Fragment>
        );

     
    }
}

export default StorePicker;

