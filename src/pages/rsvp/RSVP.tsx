import { Checkbox, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link, NavLink } from "react-router-dom";

export const RSVP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAttending, setIsAttending] = useState<boolean | undefined>();
  const [isNotAttending, setIsNotAttending] = useState<boolean | undefined>();
  const [diet, setDiet] = useState("");
  const [joinee, setJoinee] = useState("");
  const [comments, setComments] = useState("");
  const [isNavClicked, setIsNavClicked] = useState(false);

  const isBtnDisabled = useMemo(() => {
    return (
      !name ||
      !email ||
      !phone ||
      isAttending === undefined ||
      isNotAttending === undefined
    );
  }, [name, email, isAttending, isNotAttending, phone]);

  const reset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setDiet("");
    setJoinee("");
    setIsAttending(undefined);
    setIsNotAttending(undefined);
    setComments("");
  };

  const handleSubmit = async () => {
    const serviceId = "service_sz894h2";
    const templateId = "des_brit_template";
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        to_name: "Nupoor & Andrew",
        phone,
        email,
        diet,
        isAttending,
        comments,
      });
      reset();
      alert("Your RSVP has been received! Thank you!");
    } catch (error) {
      console.log(error);
    }
  };
  if (!isNavClicked) {
    return (
      <main className="h-screen">
        <header className="bg-wineBerry-200 h-[600px] bg-rsvp bg-center bg-cover md:h-[900px]">
          <nav className="lg:hidden " onClick={() => setIsNavClicked(true)}>
            <div className="cursor-pointer p-5">
              <img
                className="w-14 h-10"
                onClick={() => setIsNavClicked(true)}
                src="/assets/menu-burger-2.png"
              />
            </div>
          </nav>
          <nav className="lg:flex hidden justify-between items-center h-24 text-xl w-full text-stone-700 px-16">
            <div className="flex flex-row gap-10 font-semibold">
              <NavLink to="/">DESI BRIT WEDDING</NavLink>
              <NavLink to="/our-story">OUR STORY</NavLink>
              <NavLink to="/faqs" className="">
                FAQs
              </NavLink>
            </div>
            <NavLink
              to="/rsvp"
              className={({ isActive }) =>
                isActive ? "text-burntUmber-700 font-semibold pr-6" : ""
              }
            >
              R S V P
            </NavLink>
          </nav>
        </header>
        <section className="flex flex-col gap-5 p-8">
          <div className="flex flex-col gap-5 items-center">
            <h6 className="text-3xl font-semibold border-b-2 border-stone-500">
              R S V P
            </h6>
            <div>
              We're so excited to see you at our big day! Let us know if you can
              make it by <strong>November 30th.</strong>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-start w-9/12 h-auto px-4 md:items-center md:pl-24">
            <div className="w-44">
              <div className="w-44">Name</div>
              <TextField
                id="outlined-basic"
                size="small"
                margin="dense"
                label=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                className="inputt"
              />
            </div>
            <div className="w-44">
              <div>Email Address</div>
              <TextField
                id="outlined-basic"
                size="small"
                margin="dense"
                label=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                className="inputt"
              />
            </div>
            <div className="w-44">
              <div>Phone</div>
              <TextField
                id="outlined-basic"
                className="inputt"
                size="small"
                margin="dense"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                label=""
                variant="outlined"
              />
            </div>
            <div className="w-96 md:pl-[100px]">
              <div>Who will be joining you ?</div>
              <div className="text-neutral-400 text-xs">
                If your invite has multiple names
              </div>
              <TextField
                id="outlined-basic"
                className="inputt"
                size="small"
                margin="dense"
                multiline
                rows={2}
                value={joinee}
                onChange={(e) => setJoinee(e.target.value)}
                label=""
                variant="outlined"
              />
            </div>
            <div className="lg:w-[620px] w-[200px] md:pl-[220px]">
              <div>Do you have any dietary restrictions or allergies ?</div>
              <TextField
                id="outlined-basic"
                size="small"
                margin="dense"
                label=""
                multiline
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                minRows={3}
                rows={3}
                variant="outlined"
                className="inputt"
              />
            </div>
            <div className="w-56  md:pl-[24px]">
              <div>Will you be attending ?</div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isAttending ?? false}
                    onChange={(e) => {
                      setIsAttending(e.target.checked);
                      setIsNotAttending(!e.target.checked);
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isNotAttending ?? false}
                    onChange={(e) => {
                      setIsNotAttending(e.target.checked);
                      setIsAttending(!e.target.checked);
                    }}
                  />
                }
                label="No"
              />
            </div>
            <div className="w-80 md:pl-[70px] pl-1">
              <div>Any questions ?</div>
              <TextField
                id="outlined-basic"
                size="small"
                margin="dense"
                multiline
                minRows={3}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={3}
                variant="outlined"
                className="inputt"
              />
            </div>
          </div>
          <div className="self-center flex flex-col md:items-center md:w-full md:pr-[350px]">
            <button
              onClick={() => (isBtnDisabled ? null : handleSubmit())}
              className={`border-2 border-stone-800 rounded-sm p-2 w-44 hover:bg-slate-400 ${
                isBtnDisabled ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Submit
            </button>
          </div>
        </section>
        <footer className="flex justify-between items-center text-sm md:text-base px-4 lg:px-0 xl:px-10 bg-neutral-800 h-auto w-full py-6 text-stone-300">
          <div className="justify-start basis-1/2 pl-2 md:pl-8 grow flex">
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
