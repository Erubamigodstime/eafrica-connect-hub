
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              E-<span className="text-green-500">Africa</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
              Find Mentors
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
              Find Jobs
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
              Community
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
              About
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-green-500">
              Log In
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
                Find Mentors
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
                Find Jobs
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
                Community
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-700 hover:text-green-500">
                  Log In
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
