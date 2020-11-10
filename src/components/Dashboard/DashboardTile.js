import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/less/components/Dashboard/Dashboard.less';

const DashboardTile = (props) => {

    const {title} = props;

    return (
        <div className='dashboard__tile'>
            {title}
        </div>
    );

};

DashboardTile.propTypes = {
    title: PropTypes.string
};

export default DashboardTile;
