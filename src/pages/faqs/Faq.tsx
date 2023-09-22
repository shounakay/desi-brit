import { useMemo, useState } from "react";
import { Accordion } from "./Accordion";
import { qna } from "./qna";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Faq = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const [isNavClicked, setIsNavClicked] = useState(false);
  const { qa } = useMemo(() => qna[tabIndex], [tabIndex]);

  if (!isNavClicked) {
    return (
      <main className="flex flex-col">
        <header>
          <nav
            className="lg:hidden bg-tango-100"
            onClick={() => setIsNavClicked(true)}
          >
            <div className="cursor-pointer p-5">
              <img
                className="w-14 h-auto"
                onClick={() => setIsNavClicked(true)}
                src="assets/menu-burger-2.png"
              />
            </div>
          </nav>
          <nav className="lg:flex hidden bg-tango-700 justify-between items-center h-20 w-full text-white px-16">
            <div className="flex flex-row gap-16 text-xl font-semibold">
              <NavLink to="/">DESI BRIT WEDDING</NavLink>
              <NavLink to="/our-story">OUR STORY</NavLink>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? "text-tango-300" : "mr-auto ml-auto md:ml-[200px]"
                }
              >
                FAQs
              </NavLink>
            </div>
            <div>
              <button
                onClick={() => navigate("/rsvp")}
                className=" border-2 hover:border-stone-700 rounded-sm py-3 px-8 bg-rust-200 hover:bg-tango-400 hover:text-white text-stone-800"
              >
                R S V P
              </button>
            </div>
          </nav>
        </header>
        <section className=" flex flex-col gap-14 min-h-[1000px] bg-tango-100 py-16 justify-start">
          <div className="self-center text-neutral-600 text-3xl font-extrabold underline-offset-4">
            <h4>THE ROOM OF REQUIREMENT</h4>
            <div className="flex flex-row gap-2 text-center justify-center">
              <h4>FAQs EDITION</h4>
            </div>
          </div>
          <div className="flex justify-center text-xl gap-8 lg:gap-32 flex-wrap text-md font-medium">
            <div
              onClick={() => setTabIndex(0)}
              className={`px-1 hover:cursor-pointer hover:-translate-y-1 transition-transform duration-150 ease-out ${
                tabIndex === 0
                  ? "border-b-2 text-rust-600 border-rust-600"
                  : " text-neutral-500"
              }`}
            >
              GETTING THERE
            </div>
            <div
              onClick={() => setTabIndex(1)}
              className={`px-1 hover:cursor-pointer hover:-translate-y-1 transition-transform duration-150 ease-out ${
                tabIndex === 1
                  ? "border-b-2 text-rust-600 border-rust-600"
                  : " text-neutral-500"
              }`}
            >
              WEDDING
            </div>
            <div
              onClick={() => setTabIndex(2)}
              className={`px-1 hover:cursor-pointer hover:-translate-y-1 transition-transform duration-150 ease-out ${
                tabIndex === 2
                  ? " border-b-2 text-rust-600 border-rust-600"
                  : " text-neutral-500"
              }`}
            >
              DRESS CODE
            </div>
            <div
              onClick={() => setTabIndex(3)}
              className={`px-1 hover:cursor-pointer hover:-translate-y-1 transition-transform duration-150 ease-out ${
                tabIndex === 3
                  ? "border-b-2 text-rust-600 border-rust-600"
                  : "border-neutral-500 text-neutral-500"
              }`}
            >
              ACCOMODATION
            </div>
            <div
              onClick={() => setTabIndex(5)}
              className={`px-1 hover:cursor-pointer hover:-translate-y-1 transition-transform duration-150 ease-out ${
                tabIndex === 5
                  ? " border-b-2 text-rust-600 border-rust-600"
                  : " text-neutral-500"
              }`}
            >
              FOOD
            </div>
            <div
              onClick={() => setTabIndex(4)}
              className={`px-1 hover:cursor-pointer hover:-translate-y-1 transition-transform duration-150 ease-out ${
                tabIndex === 4
                  ? "border-b-2 text-rust-600 border-rust-600"
                  : " text-neutral-500"
              }`}
            >
              RSVP
            </div>
          </div>
          <div className="flex flex-col">
            {qa?.map((item) => (
              <Accordion
                key={item.q}
                question={item.q}
                answer={item.a}
                tabIndex={tabIndex}
              />
            ))}
          </div>
        </section>
        <footer className="flex justify-between items-center text-sm md:text-base px-4 lg:px-0 xl:px-10 bg-neutral-800 h-auto w-full py-6 text-stone-300">
          <div className="justify-start basis-1/2 pl-8 grow hidden lg:block">
            <img
              src="assets/logo-black.png"
              alt="dark-log"
              className="w-80"
              loading="lazy"
            />
          </div>
          <div className="flex justify-start lg:justify-end xl:justify-center grow">
            <div className="flex flex-col gap-2 py-4">
              <h5>Email us at:</h5>
              <div className="text-neutral-300 underline">
                thedesibritwedding@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-6">
            <div className="flex justify-end grow">
              <div className="flex flex-col gap-2 underline text-neutral-300">
                <Link to="/">Desi Brit Wedding</Link>
                <Link to="/our-story">Our Story</Link>
              </div>
            </div>
            <div className="flex justify-start sm:justify-center grow">
              <div className="flex flex-col gap-2 underline text-neutral-300">
                <Link to="/faqs">FAQs</Link>
                <Link to="/rsvp">RSVP</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    );
  } else {
    return (
      <div className="z-50 p-8 h-screen w-full bg-albescent-white-100">
        <div className="cursor-pointer">
          <img
            onClick={() => setIsNavClicked(false)}
            className="h-12"
            src="assets/cross.png"
            alt="cross"
          />
        </div>
        <div className="flex mt-11 flex-col gap-10 text-3xl justify-center items-center">
          <img src="assets/desi-brit-logo.jpeg" className="w-2/3" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-rust-500 underline" : "underline text-stone-700"
            }
          >
            DESI BRIT WEDDING
          </NavLink>
          <NavLink
            to="/our-story"
            className={({ isActive }) =>
              isActive ? "text-rust-500 underline" : "underline text-stone-700"
            }
          >
            OUR STORY
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              isActive ? "text-rust-500 underline" : "underline text-stone-700"
            }
          >
            FAQs
          </NavLink>
          <NavLink
            to="/rsvp"
            className={({ isActive }) =>
              isActive ? "text-rust-500 underline" : "underline text-stone-700"
            }
          >
            R S V P
          </NavLink>
        </div>
      </div>
    );
  }
};
