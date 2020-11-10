import React from 'react';

import '../../styles/less/components/Dashboard/Dashboard.less';

const DashboardCategory = (props) => {

    const {children} = props;

    return (
        <div className='dashboard'>
            {children}
        </div>
    );

};

DashboardCategory.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default DashboardCategory;
