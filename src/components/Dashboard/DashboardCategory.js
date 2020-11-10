import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/less/components/Dashboard/Dashboard.less';

const DashboardCategory = (props) => {

    const {children} = props;

    return (
        <div className='dashboard__category'>
            {children}
        </div>
    );

};

DashboardCategory.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default DashboardCategory;
