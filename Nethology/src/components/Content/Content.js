import React from 'react';
import {ContentItem} from "./ContentItem";
import './Content.scss'
import {Icon} from "./Icon";

export const Content = ({data}) => {
    return (
        <div className='Content'>
            <div className='ContentWrapper'>
                <span className='ContentTitle'>Изучайте <span className='ContentTitleSelected'>актуальные темы</span></span>
                {data.data.map(item => <ContentItem key={item.direction.id} title={item.direction.title}
                                                    bgColor={item.direction.badge.bgColor}/>)}
                <div className='ContentMessage'>
                    <Icon icon='message'/>
                </div>
            </div>
        </div>
    );
};

