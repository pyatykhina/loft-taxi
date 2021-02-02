import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { checkin } from '../../actions'; 

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';

export const CheckinForm = ({ useDispatchHook = useDispatch }) => {
    const dispatch = useDispatchHook();
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur'
    });

    const onSubmit = (data) => {
        const { email, firstName, lastName, password } = data;
        dispatch(checkin(email, firstName, lastName, password));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='checkin'>
            <FormLabel className='checkin__label'>
                Адрес электронной почты
                <Input 
                    inputRef={register({ 
                        required: {
                            value: true, 
                            message: 'Имя пользователя должно быть заполнено'
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Неверный формат email'
                        } 
                    })} 
                    className='checkin__input'
                    type='text'
                    name='email'
                />
                {errors.email && <p className='form-error'>{errors.email.message}</p>}
            </FormLabel>
            <div className='inlineInputs'>
                <FormLabel className='checkin__label' style={{ width:'48%' }}>
                Имя
                <Input 
                    inputRef={register({ required: true })} 
                    className='checkin__input'
                    type='text'
                    name='firstName'
                />
                {errors.firstName && <p className='form-error'>Имя должно быть заполнено</p>}
                </FormLabel>
                <FormLabel className='checkin__label' style={{ width:'48%' }}>
                Фамилия
                <Input 
                    inputRef={register({ required: true })} 
                    className='checkin__input'
                    type='text'
                    name='lastName'
                /> 
                {errors.lastName && <p className='form-error'>Фамилия должна быть заполнена</p>}
                </FormLabel>
            </div>
            <FormLabel className='checkin__label'>
                Пароль
                <Input 
                    inputRef={register({ required: true })} 
                    className='checkin__input'
                    type='password'
                    name='password'
                />
                {errors.password && <p className='form-error'>Пароль должен быть заполнен</p>}
            </FormLabel>
            <button type='submit' className='checkin__button'>Зарегистрироваться</button>
        </form>
    )
}
