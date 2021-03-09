import React from 'react';
import ReactDOM from 'react-dom';import Meny from "../Meny";
import {render} from "@testing-library/react";
import {useState} from "react/cjs/react.production.min";
import FirstPage from "../FirstPage";


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {

        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p>{this.state.value}</p>
            </div>


        );
    }

}
export default Chat;