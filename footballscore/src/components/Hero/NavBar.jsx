import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Import the Arrow icon
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'; // Import the Arrow icon for up direction
import logo from '../../assets/cropped-futurescore-logo-2689916277-e1679163584791.jpg';
import heroBackground from '../../assets/hero-background.jpg';
import BoltIcon from '@mui/icons-material/Bolt';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="bg-black flex items-center justify-between p-2 relative">
        <div className="flex items-center">
          <img src={logo} className="hidden bg-red-600 rounded-md w-8 h-8" alt="FutureScore Logo" />

          <h2 className="font-bold  tracking-wide text-red-500">
        <a href="/">
        FUTURE<span className="text-white">SCORE</span>
        < BoltIcon className='text-red-500'/>
        </a>
        
          </h2>

        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon className="text-white" style={{ fontSize: '2rem' }} />
          ) : (
            <MenuIcon className="text-red-600" style={{ fontSize: '2rem' }} />
          )}
        </div>

        <ul className="hidden md:flex items-center gap-4 list-none ml-4">
          <li><a href="" className="text-white">About</a></li>
          <li><a href="" className="text-white">Career</a></li>
          {/* Dropdown menu for FS-Direct */}
          <li className="relative">
            <button onClick={toggleDropdown} className="flex items-center text-white">
              FS-Direct
              {dropdownOpen ? (
                <ArrowDropUpIcon className="ml-1" />
              ) : (
                <ArrowDropDownIcon className="ml-1" />
              )}
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-20">
                <li><a href="" className="block px-4 py-2 text-black hover:bg-gray-100">Submenu Item 1</a></li>
                <li><a href="" className="block px-4 py-2 text-black hover:bg-gray-100">Submenu Item 2</a></li>
                <li><a href="" className="block px-4 py-2 text-black hover:bg-gray-100">Submenu Item 3</a></li>
              </ul>
            )}
          </li>
          <li><a href="" className="text-white">Contact</a></li>
        </ul>

        {menuOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
            <div className="fixed top-0 right-2 max-w-full rounded-md h-1/3 bg-black opacity-90 shadow-lg p-4 flex flex-col z-30">
              <button onClick={toggleMenu} className="self-end text-red-500">
                <CloseIcon style={{ fontSize: '2rem' }} />
              </button>
              <ul className="flex flex-col items-start gap-4 mt-4">
                <li><a href="" className="text-white">About</a></li>
                <li><a href="" className="text-white">Career</a></li>
                {/* Dropdown for mobile view */}
                <li className="relative">
                  <button onClick={toggleDropdown} className="flex items-center text-white">
                    FS-Direct
                    {dropdownOpen ? (
                      <ArrowDropUpIcon className="ml-1" />
                    ) : (
                      <ArrowDropDownIcon className="ml-1" />
                    )}
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute right-0  mt-2 w-48 bg-black shadow-md rounded-md py-2 z-20 opacity-80">
                      <li><a href="" className="block px-4 py-2 text-white">Reports</a></li>
                      <li><a href="" className="block px-4 py-2 text-white">Market Watch</a></li>
                      <li><a href="" className="block px-4 py-2 text-white ">Research & Development</a></li>
                      <li><a href="" className="block px-4 py-2 text-white ">Algorithms</a></li>
                      <li><a href="" className="block px-4 py-2 text-white ">1-on-1 meetings</a></li>
                      <li><a href="" className="block px-4 py-2 text-white ">Team meetings</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="" className="text-white">Contact</a></li>
              </ul>
            </div>
          </>
        )}
      </nav>

      <section className="relative h-[300px]">
        {/* Hero Background */}
        <div
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className='text-center font-bold p-8 text-white bg-black opacity-60'>
            Regular learning resources and opportunities.
          </h1>
        </div>
      </section>
    </>
  );
};

export default NavBar;
