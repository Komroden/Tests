import React from 'react';

export const ContentItem = ({title,bgColor}) => {
    return (
        <div className='ContentItem'>
            <div className='ContentItemText'>
                <span className='ContentItemTextTitle'>{title}</span>
                <span className='ContentItemTextDescription'>{'XX курсов'}</span>
            </div>
            <div style={{backgroundColor:bgColor}} className='ContentItemBudge'>

            </div>

        </div>
    );
};

