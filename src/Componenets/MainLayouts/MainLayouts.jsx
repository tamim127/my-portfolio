import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import BackToTop from '../BackToTop';

const MainLayouts = () => {
    return (
      
        <div className="flex flex-col min-h-screen ">
          <Header />
          <div className="max-w-screen-xl w-full px-4 md:px-8 lg:px-12 mx-auto flex-1">
            <Outlet />
          </div>
            <Footer />
            <BackToTop/>
        </div>
    );
};

export default MainLayouts;