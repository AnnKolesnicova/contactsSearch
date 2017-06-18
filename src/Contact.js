import React, { Component } from 'react';
import './styles/App.css';


export default class Contact extends React.Component {

   render(){
       return  <li className="contact">
                   <img src={this.props.photo}  width="70px" height="70px" />
                    <div>
                   <h4>{this.props.name}</h4>
                   <p>{this.props.phone}</p>
                    </div>
                </li>
   }
};

