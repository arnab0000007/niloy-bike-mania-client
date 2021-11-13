import React from 'react';
import notfound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} className="img-responsive" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;