import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Aidomus. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
