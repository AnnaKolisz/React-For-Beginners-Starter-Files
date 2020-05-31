import React from 'react';


class EditFishForm extends React.Component {
    
    handleChange = event => {
        const updateFish = {
            ...this.props.fish,
        [event.currentTarget.name]: event.currentTarget.value 
    };
        this.props.updateFish(this.props.index, updateFish);
    };
    render() {
        return (
           
            <form className="fish-edit" >
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} placeholder="Name" />
            <input type="text" name="price"  onChange={this.handleChange}value={this.props.fish.price} placeholder="Price" />
            <select type="text" name="status"  onChange={this.handleChange} value={this.props.fish.status} placeholder="Status">
                <option value="available">Fresh!</option> 
                <option value="unavailable">Sold out!</option>
   
            </select>
            <textarea type="text" name="desc"  onChange={this.handleChange} value={this.props.fish.desc} placeholder="Desc"></textarea>
            <input type="text" name="image" onChange={this.handleChange}  value={this.props.fish.image} placeholder="Image"/>
            {/* <button type="submit">+ Add Fish</butthis.props.nameton> */}
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </form>
         
        );
    }
}

export default EditFishForm;