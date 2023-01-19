import React, { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Feeds = (props) => {
  let mainDiv = useRef(null);
  const [open, setOpen] = useState(true);

  const threadBtn = () => {
    setOpen(!open);
    if (open) {
      mainDiv.current.style.display = "block";
    } else {
      mainDiv.current.style.display = "none";
    }
  };

  return (
    <>
      <div className="w-full flex flex-col bg-gray-200 rounded-lg p-2 px-3 gap-2">
        <header className="w-full flex justify-between items-center">
          <div className="w-full flex gap-2 items-center">
            <div className="w-8 h-8 border-gray-400 border-2 rounded-full">
              <img
                src={props.img}
                alt={props.img}
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col text-sm">
              <h1 className="font-bold">{props.headerName}</h1>
              <p className="font-light">{props.timestamp}</p>
            </div>
          </div>
          <h1
            className="flex gap-2 justify-end items-center font-bold text-sm whitespace-nowrap cursor-pointer"
            onClick={threadBtn}
          >
            {open === true ? <BsChevronDown /> : <BsChevronUp />} See Thread
          </h1>
        </header>
        <main className="w-full p-2 rounded-lg text-sm bg-white hidden" ref={mainDiv}>
          <h1 className="font-bold text-sm mb-2">{props.threadBy}</h1>
          <p className="text-xs">{props.message}</p>
        </main>
        <footer className="flex flex-col w-full font-semibold px-2 g gap-2">
          <h1 className="text-sm font-semibold">{props.status}</h1>
          <p className="text-sm font-light text-end">{props.type}</p>
        </footer>
      </div>
    </>
  );
};

export default Feeds;
