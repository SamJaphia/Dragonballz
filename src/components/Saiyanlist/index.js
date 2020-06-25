import React, { Component } from 'react';
import Saiyan from '../Saiyan/Saiyan';
import './saiyanlist.scss';
import {saiyanData} from '../../SaiyanData';

export default class Saiyanlist extends Component {
    state = {
        saiyans: saiyanData
    };
    removeSaiyans = id => {
        const {saiyans} = this.state;
        const sortSaiyans = saiyans.filter(saiyan => saiyan.id !==id);
        this.setState ({
            saiyans:sortSaiyans
        })
    }
    render() {
        // console.log(this.state.saiyans);
        // You can see the array with console.log
        const { saiyans } = this.state;

        return (
            <section className="saiyanlist">
               {
                   saiyans.map(saiyan => (<Saiyan key={saiyan.id} saiyan={saiyan} removeSaiyans = {this.removeSaiyans}></Saiyan> ))
               }
            </section>
        )
    }
}
