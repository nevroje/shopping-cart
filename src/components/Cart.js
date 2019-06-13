import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Cart extends Component{
    render(){
        let addedItems = this.props.items.length ?(
            this.props.items.map(item=> {
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img} className=""/>
                        </div>
                    </li>
                )
            })
        )
    }
}