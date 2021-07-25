// Portfolio Component that changes the components that are rendered depending what the user clicks on

import React, { useState } from 'react';
import Navigation from './navigation';
import Tech from './pages/resume';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Tech />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}