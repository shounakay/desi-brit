import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export const OurStory = () => {
  const [isNavClicked, setIsNavClicked] = useState(false);
  if (!isNavClicked) {
    return (
      <main className="h-screen">
        <header className="h-[600px] md:h-[900px] bg-ourStory bg-cover bg-center">
          <nav className="lg:hidden " onClick={() => setIsNavClicked(true)}>
            <div className="cursor-pointer p-5">
              <img
                className="w-14 h-10"
                onClick={() => setIsNavClicked(true)}
                src="/assets/menu-burger-white.png"
                loading="lazy"
              />
            </div>
          </nav>
          <nav className="lg:flex hidden justify-between  items-center h-24 w-full text-white px-16">
            <div className="flex flex-row gap-16 2xl:text-xl xl:text-base font-semibold">
              <NavLink to="/">DESI BRIT WEDDING</NavLink>
              <NavLink
                to="/our-story"
                className={({ isActive }) => (isActive ? "text-jade-500" : "")}
              >
                OUR STORY
              </NavLink>
              <NavLink to="/faqs">FAQs</NavLink>
            </div>
            <div>
              <Link to="/rsvp">
                <button className="border-2 font-semibold hover:border-stone-100 rounded-sm py-4 px-12 bg-paradiso-400 hover:bg-paradiso-200 hover:text-white text-white">
                  R S V P
                </button>
              </Link>
            </div>
          </nav>
        </header>
        <section className="flex flex-col gap-10 text-black justify-start items-center bg-paradiso-100 py-11">
          <div className="flex flex-col gap-2">
            <h6 className="text-3xl border-stone-900 font-caudex">
              After all this time ?
            </h6>
            <h6 className="text-3xl text-center pb-4 border-stone-900 font-caudex">
              Always.
            </h6>
          </div>
          <video
            controls
            className="w-[500px] rounded-3xl border-spacing-20 border-jade-600 lg:w-[900px]"
          >
            <source src="assets/Final.mp4" type="video/mp4" />
          </video>
        </section>
        <section className="flex flex-col justify-start px-8 items-center bg-paradiso-100 py-11">
          <h6 className="text-3xl border-b pb-4 mb-4 border-stone-500 font-caudex">
            Our Pensieve Of Memories
          </h6>
          <img src="assets/collage-green.png" alt="collage" />
          <img
            src="/assets/collage-green-2.png"
            className="pt-[-11px]"
            alt="collage"
            loading="lazy"
          />
        </section>
        <footer className="flex justify-between items-center text-sm md:text-base px-4 lg:px-0 xl:px-10 bg-neutral-800 h-auto w-full py-6 text-stone-300">
          <div className="justify-start basis-1/2 pl-8 grow hidden lg:block">
            <img
              src="/assets/logo-black.png"
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
            src="/assets/cross.png"
            alt="cross"
          />
        </div>
        <div className="flex mt-11 flex-col gap-10 text-3xl justify-center items-center">
          <img src="/assets/desi-brit-logo.jpeg" className="w-2/3" />
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
