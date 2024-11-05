import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-700 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">My Website</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">{children}</main>

      <footer className="bg-blue-700 text-white p-4 mt-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
