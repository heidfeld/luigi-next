import React from 'react';

import '../../styles/less/components/Dashboard/Dashboard.less';
import DashboardCategory from "./DashboardCategory";
import DashboardTile from "./DashboardTile";

const Dashboard = (props) => {

    return (
        <div className='dashboard'>
            <DashboardCategory>
                <DashboardTile/>
            </DashboardCategory>
        </div>
    );

};

export default Dashboard;
