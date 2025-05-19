import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="w-full mt-12 border-t py-4 text-sm text-gray-600 text-center bg-purple-200 ">
      <p>&copy; {new Date().getFullYear()} SUKA Charitable Trust Admin Panel. All rights reserved.</p>
    </footer>
  );
};

export default AdminFooter;
