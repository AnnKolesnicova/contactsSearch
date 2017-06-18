import React, {Component} from 'react';
import Contact from './Contact';
import './styles/App.css';

const CONTACTS = [
    {
        id: 1,
        name: 'Bender Bending Rodriguez',
        phone: '+375 29 123 45 68',
        photo: 'images/Bender.jpeg.png'
    }, {
        id: 2,
        name: 'Turanga Leela',
        phone: '+375 29 856 45 68',
        photo: 'images/Leela.jpg.png'
    }, {
        id: 3,
        name: 'Philip J. Fry',
        phone: '+375 29 638 45 48',
        photo: 'images/Fry.png'
    }, {
        id: 4,
        name: 'Nibbler',
        phone: '+375 29 358 38 11',
        photo: 'images/Nibbler.jpg.png'
    }
];


export default class ContactList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayedContacts: CONTACTS,
        };
        this.search = this.search.bind(this);
    }

    search (event) {
        let searchQuery = event.target.value.toLowerCase();

        let displayedContacts = CONTACTS.filter(function(el) {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        if (displayedContacts) {
            this.setState({ displayedContacts: displayedContacts });
        }
    }


    render() {
        return (
            <div className="container">
                <input type="text" placeholder="Search..." className="search" onChange={this.search}/>
                <ul>
                    {
                        this.state.displayedContacts.map(function (el) {
                            return <Contact key={el.id}
                                            name={el.name}
                                            phone={el.phone}
                                            photo={el.photo}
                            />
                        })
                    }
                </ul>
            </div>
        );
    }
};


