import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../actions'; 

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';

export const LoginForm = ({ useDispatchHook = useDispatch }) => {
    const dispatch = useDispatchHook();
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur'
    });

    const onSubmit = (data) => {
        const { email, password } = data;
        dispatch(authenticate(email, password));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='login'>
          <FormLabel className='login__label'>
            Имя пользователя
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
                className='login__input'
                type='text'
                name='email'
            />
            {errors.email && <p className='form-error'>{errors.email.message}</p>}
          </FormLabel>
          <FormLabel className='login__label'>
            Пароль
            <Input 
                inputRef={register({ required: true })} 
                className='login__input'
                type='password'
                name='password'
            />
            {errors.password && <p className='form-error'>Пароль должен быть заполнен</p>}
          </FormLabel>
          <button type='submit' className='login__button'>Войти</button>
        </form>
    )
}
