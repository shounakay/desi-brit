import { useEffect, useState } from "react";
import parse from "html-react-parser";

export const Accordion = ({ question, answer, tabIndex }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    setIsExpanded(false);
  }, [tabIndex]);
  return (
    <section className="flex flex-col bg-tango-100 grow h-full first:pt-4 pt-4 justify-center md:items-center px-4">
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`flex justify-between border-b-2 border-rust-400 items-center w-7/8 md:w-4/5 hover:cursor-pointer py-2`}
      >
        <div className="text-neutral-500 font-medium">{question}</div>
        <div className="">
          {isExpanded ? (
            <img
              src="src/assets/angle-small-up-rust.png"
              alt="bottom-arrow"
              className="text-rust-800"
            />
          ) : (
            <img
              src="src/assets/angle-small-down-rust.png"
              alt="top-arrow"
              className="text-rust-800"
            />
          )}
        </div>
      </div>
      {isExpanded ? (
        <div className="h-auto py-4 flex flex-col w-7/8 md:w-4/5 gap-8 text-neutral-500">
          <div className="flex flex-col gap-2 font-medium">
            {answer.map((ans: any) => parse(ans))}
          </div>
        </div>
      ) : null}
    </section>
  );
};
