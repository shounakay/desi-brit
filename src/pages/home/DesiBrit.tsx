import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrolltoTop";

export const DesiBrit = () => {
  const [isNavClicked, setIsNavClicked] = useState(false);
  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat: 50.984929, lng: -4.203059 },
      map,
      title: "Beaconside House!",
    });
    return marker;
  };
  useScrollToTop();

  if (!isNavClicked) {
    return (
      <main className="h-full w-screen">
        <header className="flex flex-col h-[900px] w-full backdrop-brightness-200 bg-anu bg-cover bg-center shadow-xl">
          <nav className="basis-16 transition-all delay-150 duration-500 ease-linear">
            <ul className="flex flex-row px-4 text-white">
              <div className="self-center pt-5 sm:pt-0 xl:hidden cursor-pointer">
                <img
                  className="sm:w-14 w-12 sm:h-auto h-10"
                  onClick={() => setIsNavClicked(true)}
                  src="/assets/menu-burger-white.png"
                  loading="lazy"
                />
              </div>
              <div className="xl:flex xl:basis-[40%] 2xl:basis-[50%] xl:pr-16 2xl:pr-0 shrink justify-around items-center font-semibold 2xl:text-xl xl:text-base hidden">
                <li className="hover:text-orange-700">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-tango-300" : ""
                    }
                  >
                    DESI BRIT WEDDING
                  </NavLink>
                </li>
                <li className="hover:text-orange-700">
                  <NavLink to="/our-story">OUR STORY</NavLink>
                </li>
                <li className="hover:text-orange-700">
                  <NavLink to="/faqs">FAQs</NavLink>
                </li>
              </div>
              <div className="sm:flex hidden basis-[55%] 2xl:basis-[40%] h-24 xl:justify-start 2xl:justify-center sm:ml-36 md:ml-56 lg:ml-[360px] xl:ml-16 2xl:pl-0 2xl:pr-12 pl-0 ml-32 2xl:ml-20 2xl:mr-96 items-end text-white font-adlery text-center text-[40px] animate-dropDownName self-center">
                <div className="-rotate-12 text-tango-500">Nupoor</div>
                <div className="-rotate-12 text-tango-500">& Andrew</div>
              </div>
              <div className="xl:flex basis-[15%] shrink justify-end mr-8 items-center hidden">
                <li className="hover:text-amber-500">
                  <Link to="/rsvp">
                    <button className="border-2 2xl:font-semibold xl:font-medium border-stone-800 rounded-sm xl:py-2 2xl:py-3 px-8 bg-tango-500 hover:bg-tango-400 text-white">
                      R S V P
                    </button>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <section className="flex flex-col basis-11/12 justify-end md:pl-1 md:pb-10 pb-12 pl-2 sm:pl-8 items-center gap-3 text-white">
            <h6 className="sm:text-[34px] text-2xl font-semibold">
              WE ARE GETTING MARRIED!
            </h6>
            <div className="w-96 h-[100px] rounded-[60px] border-[1px] flex bg-rust-200 flex-row divide-x divide-white items-center justify-evenly bg-transparent">
              <div className="basis-1/2 text-right pl-4 pr-2 shrink text-xl text-white">
                23-24 April, 2024
              </div>
              <div className="basis-1/2 text-left pl-2 shrink text-xl text-white">
                Beaconside House, Devon
              </div>
            </div>
          </section>
        </header>
        <section className="flex flex-col gap-5 w-full h-auto py-12 px-8 bg-tango-300">
          <article className="flex flex-row w-full flex-wrap">
            <div className="flex felx-wrap basis-1/2 grow shrink-0 xl:px-16 2xl:px-20 lg:px-20">
              <h6 className="sm:text-[80px] text-[56px] font-medium font-caudex">
                IT IS HAPPENING!!
              </h6>
            </div>
            <div className="basis-1/2 grow flex justify-center 2xl:justify-end shrink-0 pr-8">
              <img
                src="/assets/desi-brit-new-transp.png"
                alt="desi-brit-logo"
                className="w-[100%] sm:w-[80%] md:w-[50%] lg:w-[45%] xl:w-[60%] h-32 md:h-40"
                loading="lazy"
              />
            </div>
          </article>
          <p className="md:text-xl text-[16px] text-left font-medium tracking-tighter xl:tracking-wide lg:pl-20 lg:pr-16">
            We are soo excited! Get ready for some fun shenanigans where the
            vibrant hues of Indian sarees meet the elegance of British suits and
            the Indian traditions meet the British charm. Your love and
            blessings mean the world to us and we cannot wait to share this
            experience with you.
          </p>
        </section>
        <section className="flex flex-row flex-wrap h-auto w-full">
          <article className="flex flex-col pt-14 rounded-sm basis-1/2 items-center shrink-0 grow bg-nero-100">
            <div className="flex flex-col gap-6 w-full p-12 rounded-lg">
              <img
                src="/assets/beaconside.jpeg"
                alt="beaconside-house"
                loading="lazy"
                className="md:w-[500px] self-center lg:self-end w-[330px] sm:w-[450px] h-64 sm:h-96"
              />
            </div>
            <h6 className="text-xl text-center lg:self-end lg:pr-20 w-[320px] sm:w-[450px] lg:w-[500px] px-5 sm:px-12 lg:px-0 font-medium ">
              The wedding celebration will take place at{" "}
              <span className="text-tango-700">Beaconside House, Devon</span>.
            </h6>
            <div className="flex flex-col gap-6 p-12 pb-4 w-full h-full rounded-lg bg-nero-100">
              <div className="sm:w-[500px] w-[320px] self-center lg:self-end lg:w-[500px] h-[300px] sm:h-[350px]">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAfXgDvJ6dht9yqcQOkvIko5oP1goAL44s",
                  }}
                  defaultCenter={{ lat: 50.9849295, lng: -4.203059 }}
                  defaultZoom={9}
                  options={{ mapId: "c1bbbe9fe037090d" }}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={({ map, maps }) =>
                    renderMarkers(map, maps)
                  }
                ></GoogleMapReact>
              </div>
            </div>
          </article>
          <article className="flex flex-col basis-1/2 gap-10 bg-nero-50 rounded-sm items-center lg:items-start py-12 shrink-0 grow">
            <div className="flex flex-col gap-5">
              <h6 className="text-3xl pr-24 font-semibold text-center">
                Two-Day Itinerary
              </h6>
              <img
                src="/assets/timelin-fn.png"
                alt="timeline-full"
                className="self-start"
                loading="lazy"
              />
            </div>
          </article>
        </section>
        <section className="p-8 bg-rust-400 text-white flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-1">
            <div className="text-center text-lg font-semibold">
              Curious about the details ?
            </div>
            <p className="text-center">
              Check out our{" "}
              <Link to="/faqs" className="underline font-semibold">
                FAQ page!
              </Link>{" "}
              Discover all the wedding details and seek your answers.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-center text-lg">
              Want to know how we met ?
            </p>
            <p className="text-center ">
              From strangers to soulmates. Explore our journey from the first
              meeting to 'I do' in{" "}
              <Link to="/our-story" className="underline font-semibold">
                Our Story
              </Link>
            </p>
          </div>
          <Link to="/rsvp" className="self-center">
            <button className="w-56 bg-white hover:bg-stone-200 text-stone-900 rounded-sm border  px-12 py-4">
              I'LL BE THERE!
            </button>
          </Link>
        </section>
        <footer className="flex justify-between items-center text-sm md:text-base pl-2 pr-8 lg:px-0 xl:pl-2 xl:pr-10 bg-neutral-800 h-auto w-full py-6 text-stone-300">
          <div className="justify-start basis-1/2 pl-0 md:pl-8 xl:pl-2 grow flex">
            <img
              src="/assets/logo-balck-transp.png"
              alt="dark-log"
              className="md:w-80 w-40"
              loading="lazy"
            />
          </div>
          <div className="hidden lg:flex justify-start lg:justify-end xl:justify-center grow">
            <div className="flex flex-col gap-2 py-4">
              <h5>Email us at:</h5>
              <div className="text-neutral-300 underline">
                thedesibritwedding@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-7 lg:gap-6">
            <div className="flex justify-end grow">
              <div className="flex flex-col gap-2 underline text-neutral-300">
                <Link to="/">Desi Brit Wedding</Link>
                <Link to="/our-story">Our Story</Link>
              </div>
            </div>
            <div className="flex justify-start sm:justify-center grow">
              <div className="flex flex-col gap-2 underline text-neutral-300">
                <Link to="/faqs">FAQs</Link>
                <Link to="/rsvp" preventScrollReset={false}>
                  RSVP
                </Link>
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
            className="h-8"
            src="/assets/cross.png"
            alt="cross"
            loading="lazy"
          />
        </div>
        <div className="flex mt-11 flex-col gap-10 text-3xl justify-center items-center">
          <img
            src="/assets/desi-brit-logo.jpeg"
            className="w-2/3"
            loading="lazy"
          />
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
