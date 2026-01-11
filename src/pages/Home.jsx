import React from 'react';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import useApps from '../hooks/useApps';
import GameCard from '../components/GameCard';

const Home = () => {
    const {appsData}=useApps();
    const sortappsData=appsData.sort((a,b)=>b.ratings - a.ratings);
    // console.log(sortappsData);
    return (
        <div className=''>
       <Banner></Banner>
               <p className="text-2xl  font-bold mx-4 text-black mb-4 my-3">Popular Games</p>

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 my-5'>
       {
        sortappsData.slice(0,4).map(app=> <GameCard key={app.id} app={app}></GameCard>) 
       }
       </div>
       <Newsletter ></Newsletter>

        </div>
    );
};

export default Home;