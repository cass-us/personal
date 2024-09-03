import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import logo from '../../assets/cropped-futurescore-logo-2689916277-e1679163584791.jpg';
import BoltIcon from '@mui/icons-material/Bolt';
import back2 from "../../assets/back2.jpg";
import back3 from "../../assets/back3.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        src: back2,
        caption: 'Developing a credible institutional mechanism for labour market and skills planning',
      },
      {
        src: back2,
        caption: 'Increasing access and success in programmes leading to intermediate and high level learning, and',
      },
      {
        src: back3,
        caption: 'Increasing access to and efficiency of high-level occupationally directed programmes in needed areas.',
      },
    ];

    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);

      return () => clearInterval(slideInterval);
    }, [slides.length]);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    return (
      <div className="relative w-full h-[calc(100vh-20rem)] bg-black">
        {/* Full-width images with number and caption text */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h2 className="text-2xl text-white bg-black bg-opacity-60 p-4 rounded-md text-center">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}

        {/* Next and previous buttons */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={nextSlide}>
          &#10095;
        </button>

        {/* The dots/circles */}
        <div className="absolute bottom-8 right-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 rounded-full mx-1 cursor-pointer ${
                index === currentSlide ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>

        {/* Additional Caption Below the Slideshow */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center">
          <button className='bg-red-500 rounded-md p-2 m-2  text-white '><a href="https://docs.google.com/forms/d/e/1FAIpQLSePQG76G4cTfSnZmFifj-XgJTpWA4xHdN_NW_sLD67_8OmaQA/viewform?pli=1">Join Membership</a></button>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-black flex items-center justify-between p-4 fixed top-0 w-full z-10">
        <div className="flex items-center">
          <img src={logo} className="hidden bg-red-600 rounded-md w-8 h-8" alt="FutureScore Logo" />
          <h2 className="font-bold tracking-wide text-red-500">
            <a href="/">
              FUTURE<span className="text-white">SCORE</span>
              <BoltIcon className='text-red-500' />
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
              <ul className="absolute mt-2 w-48 bg-black shadow-md rounded-md py-2 z-20 opacity-80">
                <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Reports</a></li>
                <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Market Watch</a></li>
                <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Research & Development</a></li>
                <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Algorithms</a></li>
                <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">1-on-1 meetings</a></li>
                <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Team meetings</a></li>
              </ul>
            )}
          </li>
          <li><a href="" className="text-white">Contact</a></li>
        </ul>

        {menuOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
            <div className="fixed top-0 right-2 max-w-full rounded-md bg-black opacity-90 shadow-lg p-4 flex flex-col z-30">
              <button onClick={toggleMenu} className="self-end text-red-500">
                <CloseIcon style={{ fontSize: '2rem' }} />
              </button>
              <ul className="flex flex-col bg-black opacity-90 items-start gap-4 mt-4">
                <li><a href="" className="text-white">About</a></li>
                <li><a href="" className="text-white">Career</a></li>
                <li className="relative">
                  <button onClick={toggleDropdown} className="flex items-center text-white">
                    FS-Direct
                    {dropdownOpen ? (
                      <ArrowDropUpIcon className="ml-8" />
                    ) : (
                      <ArrowDropDownIcon className="ml-1" />
                    )}
                  </button>
                  {dropdownOpen && (
                    <ul className="mt-2 w-48 bg-neutral-500 shadow-md rounded-md py-2 z-20">
                      <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Reports</a></li>
                      <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Market Watch</a></li>
                      <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Research & Development</a></li>
                      <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Algorithms</a></li>
                      <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">1-on-1 meetings</a></li>
                      <li><a href="" className="block px-4 py-2 text-white hover:bg-gray-700">Team meetings</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="" className="text-white">Contact</a></li>
              </ul>
            </div>
          </>
        )}
      </nav>
      <Slideshow />
    </>
  );
};

export default NavBar;
