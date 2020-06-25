import React, { Component } from 'react';
import './Saiyan.scss';

export default class Saiyan extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        });
    }
    render() {
        const { id, Name, img, Level, Info} = this.props.saiyan;
        const { removeSaiyans } = this.props;
        return (
            <h1>
                <article className="saiyan">
                    <div className="img-container">
                        <img src={img} alt="image of the saiyans" />
                            <span className="close-btn" onClick={() => removeSaiyans(id)}>
                            <i className="fas fa-times"></i>
                            </span>
                    </div>
                    <div class="saiyan-info">
        <h3>{ Name }</h3>
        <h4>{Level}</h4>
        <h5>
            Info{""} 
            <span onClick={this.handleInfo}>
                <i class="fas fa-caret-down fa-fw"></i>
            </span>
        </h5>
        {this.state.showInfo && <p>{Info}</p>}

                    </div>
                </article>
            </h1>
        )
    }
}
