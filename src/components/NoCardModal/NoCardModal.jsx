import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoCardModal.scss';

class NoCardModal extends Component {
    render() {
        return (
            <form className='form nocard'>
                <h3 className='nocard__title'>Заполните платежные данные</h3>
                <h4 className='nocard__subtitle'>Укажите информацию о банковской карте, чтобы сделать заказ.</h4>
                    <Link to='/profile' className='nocard__button-link'>
                        <button className='nocard__button'>
                            Перейти в профиль
                        </button>
                    </Link>
            </form>
        );
    }
}

export default NoCardModal;
