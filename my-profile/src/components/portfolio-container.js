import React, { useState } from 'react';
import Navigation from './navigation';
import Tech from './pages/resume';
import About from './pages/about';
import Project from './pages/project';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Tech />;
    }
    if (currentPage === 'Work') {
      return <Project />;
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