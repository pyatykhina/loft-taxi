import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GoToMapModal.scss';

class GoToMapModal extends Component {
    render() {
        return (
            <form className='form gotomap'>
                <h3 className='gotomap__title'>Платежные данные заполнены</h3>
                <h4 className='gotomap__subtitle'>Теперь вы можете заказывать такси.</h4>
                    <Link to='/map' className='gotomap__button-link'>
                        <button className='gotomap__button'>
                            Перейти к карте
                        </button>
                    </Link>
            </form>
        );
    }
}

export default GoToMapModal;
