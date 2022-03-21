import React from 'react';
import loader from '../../Icons/LoaderBlue.svg'
import './Loader.scss'

export const Loader = () => {
    return (
        <div className='Loader'>
            <img alt='Loader' src={loader}/>
        </div>
    );
};

