import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/less/components/Dashboard/Dashboard.less';
import DashboardCategory from "./DashboardCategory";
import DashboardTile from "./DashboardTile";

const Dashboard = (props) => {

    const renderTile = (config) => {
        const {title} = config;
        return (
            <DashboardTile title={title}/>
        );
    };

    return (
        <div className='dashboard'>
            <DashboardCategory>
                {renderTile({title: 'Hello'})}
                {renderTile({title: '.'})}
                {renderTile({title: 'World'})}
            </DashboardCategory>
        </div>
    );

};

Dashboard.propTypes = {

};

export default Dashboard;
