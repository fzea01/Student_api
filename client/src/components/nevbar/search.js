import React from 'react';
import Icon from '../icon';
import './menu.scss'
// import './Search.css';

const search = props => {
    return (
        <div className='search-container'>
            <Icon type='search' size="16" color='#999' style={{ marginRight: 6 }} />
            <div className='v-divider' />
            <input type='text' placeholder='ค้นหา'/>
        </div>
    )
}

export default search;