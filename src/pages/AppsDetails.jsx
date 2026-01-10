import React from 'react';
import useApps from '../hooks/useApps';
import DetailGameCard from '../components/DetailGameCard';

const AppsDetails = () => {
            const {appsData}=useApps();
            console.log(appsData);
    return (
        
        <div>
            <h1 className="text-2xl font-bold mb-6 my-4 ml-[45%]">All Games Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                appsData.map(app=><DetailGameCard app={app} key={app.id}></DetailGameCard>)
            }
            </div>
        </div>
    );
};

export default AppsDetails;