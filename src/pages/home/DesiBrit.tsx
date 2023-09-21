import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

  if (!isNavClicked) {
    return (
      <main>
        <header className="flex flex-col h-[900px] backdrop-brightness-200 bg-anu bg-cover bg-center scale-100 shadow-xl">
          <nav className="basis-16 transition-all delay-150 duration-500 ease-linear">
            <ul className="flex flex-row px-4 text-white">
              <div className="self-center lg:hidden cursor-pointer">
                <img
                  className="w-14 h-auto"
                  onClick={() => setIsNavClicked(true)}
                  src="src/assets/menu-burger-white.png"
                />
              </div>
              <div className="lg:flex basis-[25%] lg:basis-[30%] shrink justify-around items-center font-semibold text-xl hidden">
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
              <div className="basis-[55%] lg:basis-[20%] h-24 flex justify-center md:pl-0 lg:pr-12 pl-0 ml-20 md:ml-60 md:mr-96 items-end text-white font-adlery text-center text-[40px] animate-dropDownName self-center">
                <div className="-rotate-12 text-tango-600">Nupoor</div>
                <div className="-rotate-12 text-tango-600">& Andrew</div>
              </div>
              <div className="lg:flex basis-[15%] shrink justify-end mr-8 items-center font-3xl hidden">
                <li className="hover:text-amber-500">
                  <Link to="/rsvp">
                    <button className="border-2 font-semibold border-stone-800 rounded-sm py-3 px-8 bg-tango-500 hover:bg-tango-400 text-white">
                      R S V P
                    </button>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <section className="flex flex-col basis-11/12 justify-end md:pl-1 md:pb-10 pb-12 pl-8 items-center gap-3 text-white">
            <h6 className="text-[34px] font-semibold">
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
            <h6 className="text-[80px]  font-bold basis-1/2 grow shrink-0 lg:px-20 font-caudex">
              IT IS HAPPENING!!
            </h6>
            <div className="basis-1/2 grow flex justify-center lg:justify-end shrink-0 pr-8">
              <img
                src="src/assets/desi-brit-new.png"
                alt="desi-brit-logo"
                className="w-[80%] lg:w-[56%] h-48"
              />
            </div>
          </article>
          <p className="text-xl font-medium tracking-widest lg:pl-20 lg:pr-16">
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
                src="src/assets/beaconside.jpeg"
                alt="beaconside-house"
                className="md:w-[500px] self-center lg:self-end w-[500px] h-96"
              />
            </div>
            <h6 className="text-xl text-center lg:self-end lg:pr-20 lg:w-[500px] px-12 lg:px-0 font-medium ">
              The wedding celebration will take place at{" "}
              <span className="text-tango-700">Beaconside House, Devon</span>.
            </h6>
            <div className="flex flex-col gap-6 p-12 pb-4 w-full h-full rounded-lg bg-nero-100">
              <div className="w-[500px] self-center lg:self-end lg:w-[500px] h-[350px]">
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
                src="src/assets/timelin-fn.png"
                alt="timeline-full"
                className="self-start"
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
        <footer className="flex justify-between items-center px-4 lg:px-0 bg-neutral-800 h-auto w-full py-6 text-stone-300">
          <div className="justify-start basis-1/2 pl-8 grow hidden lg:block">
            <img
              src="./assets/logo-black.png"
              alt="dark-log"
              className="w-80"
            />
          </div>
          <div className="flex justify-start lg:justify-end grow">
            <div className="flex flex-col gap-2 py-4">
              <h5>Email us at:</h5>
              <div className="text-neutral-300 underline">
                thedesibritwedding@gmail.com
              </div>
            </div>
          </div>
          <div className="flex justify-end grow">
            <div className="flex flex-col gap-2 underline text-neutral-300">
              <Link to="/">Desi Brit Wedding</Link>
              <Link to="/our-story">Our Story</Link>
            </div>
          </div>
          <div className="flex justify-center grow">
            <div className="flex flex-col gap-2 underline text-neutral-300">
              <Link to="/faqs">FAQs</Link>
              <Link to="/rsvp">RSVP</Link>
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
            src="src/assets/cross.png"
            alt="cross"
          />
        </div>
        <div className="flex mt-11 flex-col gap-10 text-3xl justify-center items-center">
          <img src="src/assets/desi-brit-logo.jpeg" className="w-2/3" />
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
