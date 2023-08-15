import React from 'react';
import "../Components/comp.css";


const Footer = () => {
  return (
    <div>
      {/* Your main content */}
      
      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your WATCHON. All rights reserved.</p>
          <h3 className=' font  '>HIMANSHU SHUKLA</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
