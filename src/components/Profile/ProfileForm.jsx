import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCard } from '../../actions'; 

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import { MCIcon } from 'loft-taxi-mui-theme';

const normalizeCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/[^\d]/g, '').match(/.{1,4}/g)?.join(' ').substr(0,19) || '';
}

const normalizeExpiryDate = (value) => {
    return value.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/\//g, '').match(/.{1,2}/g)?.join('\/').substr(0,5) || '';
}

const normalizeCardName = (value) => {
    return value.replace(/[^ a-zA-Z]/g, '').replace(/[a-z]/g, u => u.toUpperCase()) || '';
}

const normalizeCvc = (value) => {
    return value.replace(/\s/g, '').replace(/[^\d]/g, '').substr(0,3) || '';
}

export const ProfileForm = ({ cardNumber, expiryDate, cardName, cvc, token, updateCardData, useDispatchHook = useDispatch }) => {
    const dispatch = useDispatchHook();
    const { register, handleSubmit, errors, reset } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        defaultValues: {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardName: cardName,
            cvc: cvc
        }
    });

    useEffect(() => {
        reset({
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardName: cardName,
            cvc: cvc
        });
    }, [reset, cardNumber, expiryDate, cardName, cvc]);
    
    const onSubmit = (data) => {
        const { cardNumber, expiryDate, cardName, cvc } = data;
        dispatch(setCard(cardNumber, expiryDate, cardName, cvc, token));
        updateCardData(true);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='profile'>
            <div className='profile__subforms'>
                <div className='profile__subforms-item'>
                    <MCIcon className='mastercard-icon'/>
                    <FormLabel className='profile__label'>
                        Номер карты:
                        <Input 
                            inputRef={register({ 
                                required: {
                                    value: true, 
                                    message: 'Обязательное поле'
                                },
                                minLength: {
                                    value: 19,
                                    message: 'Номер карты должен состоять из 16 цифр'
                                }
                            })} 
                            onChange = {(event) => {
                                const {value} = event.target;
                                event.target.value = normalizeCardNumber(value);
                            }}
                            className='profile__input'
                            placeholder='0000 0000 0000 0000'
                            type='text'
                            name='cardNumber'
                        />
                        {errors.cardNumber && <p className='form-error'>{errors.cardNumber.message}</p>}
                    </FormLabel>
                    <FormLabel className='profile__label' style={{width:'40%'}}>
                        Срок действия:
                        <Input 
                            inputRef={register({ 
                                required: {
                                    value: true, 
                                    message: 'Обязательное поле'
                                }
                            })} 
                            onChange = {(event) => {
                                const {value} = event.target;
                                event.target.value = normalizeExpiryDate(value);
                            }}
                            className='profile__input'
                            placeholder='12/20'
                            type='text'
                            name='expiryDate'
                        />
                        {errors.expiryDate && <p className='form-error'>{errors.expiryDate.message}</p>}
                    </FormLabel>
                </div>
                <div className='profile__subforms-item'>
                    <FormLabel className='profile__label'>
                        Имя владельца:
                        <Input 
                            inputRef={register({ 
                                required: {
                                    value: true, 
                                    message: 'Обязательное поле'
                                }
                            })} 
                            onChange = {(event) => {
                                const {value} = event.target;
                                event.target.value = normalizeCardName(value);
                            }}
                            className='profile__input'
                            placeholder='USER NAME'
                            type='text'
                            name='cardName'
                        />
                        {errors.cardName && <p className='form-error'>{errors.cardName.message}</p>}
                    </FormLabel>
                    <FormLabel className='profile__label' style={{width:'40%'}}>
                        CVC:
                        <Input 
                            inputRef={register({ 
                                required: {
                                    value: true, 
                                    message: 'Обязательное поле'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'CVC должен состоять из трех цифр'
                                }
                            })} 
                            onChange = {(event) => {
                                const {value} = event.target;
                                event.target.value = normalizeCvc(value);
                            }}
                            className='profile__input'
                            placeholder='***'
                            type='text'
                            name='cvc'
                        />
                        {errors.cvc && <p className='form-error'>{errors.cvc.message}</p>}
                    </FormLabel>
                </div>
            </div>
            <button type='submit' className='profile__button'>Сохранить</button>
        </form>
    )
}
