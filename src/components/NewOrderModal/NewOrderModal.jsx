import React, { Component } from 'react';
import './NewOrderModal.scss';

class NewOrderModal extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.makeOrder(false);
    }

    render() {
        return (
            <form className='form nocard'>
                <h3 className='nocard__title'>Заказ оформлен</h3>
                    <button className='nocard__button' onClick={this.handleClick}>
                        Новый заказ
                    </button>
            </form>
        );
    }
}

export default NewOrderModal;
