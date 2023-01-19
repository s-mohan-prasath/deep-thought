import React, { useRef, useEffect, useState } from "react";
// import Feed from "../components/feed";
import Feeds from "../components/feeds";

const Home = () => {
  const dataSet = [
    {
      headerName: "Shagun",
      threadedBy: "Tushar Agarwal",
      timestamp: "1 day ago",
      message:
        "Long text goes here sdfj;lllllkd;ssssssssssssssssssssssss;sdjfkfjsd;flklsd;jfksdjfkjsdfkl;jsdafkjsdafksdjf;jkdsaf;kljdsfklasd;jfkljsdfa;j ksdlaojnif vojdf vsljkdksjv nlkfidsfj",
      status: "I really like this response",
      type: "Purpose",
      img: "https://cdn.imgbin.com/3/3/21/imgbin-square-shape-area-white-square-s-zVpkYxphd7E661L4m0fdQ749C.jpg",
    },
    {
      headerName: "Shagun",
      threadedBy: "Tushar Agarwal",
      timestamp: "1 day ago",
      message:
        "Long text goes here sdfj;lllllkd;ssssssssssssssssssssssss;sdjfkfjsd;flklsd;jfksdjfkjsdfkl;jsdafkjsdafksdjf;jkdsaf;kljdsfklasd;jfkljsdfa;j ksdlaojnif vojdf vsljkdksjv nlkfidsfj",
      status: "I really like this response",
      type: "Purpose",
      img: "https://cdn.imgbin.com/3/3/21/imgbin-square-shape-area-white-square-s-zVpkYxphd7E661L4m0fdQ749C.jpg",
    },
    {
      headerName: "Shagun",
      threadedBy: "Tushar Agarwal",
      timestamp: "1 day ago",
      message:
        "Long text goes here sdfj;lllllkd;ssssssssssssssssssssssss;sdjfkfjsd;flklsd;jfksdjfkjsdfkl;jsdafkjsdafksdjf;jkdsaf;kljdsfklasd;jfkljsdfa;j ksdlaojnif vojdf vsljkdksjv nlkfidsfj",
      status: "I really like this response",
      type: "Purpose",
      img: "https://cdn.imgbin.com/3/3/21/imgbin-square-shape-area-white-square-s-zVpkYxphd7E661L4m0fdQ749C.jpg",
    },
    {
      headerName: "Shagun",
      threadedBy: "Tushar Agarwal",
      timestamp: "1 day ago",
      message:
        "Long text goes here sdfj;lllllkd;ssssssssssssssssssssssss;sdjfkfjsd;flklsd;jfksdjfkjsdfkl;jsdafkjsdafksdjf;jkdsaf;kljdsfklasd;jfkljsdfa;j ksdlaojnif vojdf vsljkdksjv nlkfidsfj",
      status: "I really like this response",
      type: "Purpose",
      img: "https://cdn.imgbin.com/3/3/21/imgbin-square-shape-area-white-square-s-zVpkYxphd7E661L4m0fdQ749C.jpg",
    },
    {
      headerName: "Shagun",
      threadedBy: "Tushar Agarwal",
      timestamp: "1 day ago",
      message:
        "Long text goes here sdfj;lllllkd;ssssssssssssssssssssssss;sdjfkfjsd;flklsd;jfksdjfkjsdfkl;jsdafkjsdafksdjf;jkdsaf;kljdsfklasd;jfkljsdfa;j ksdlaojnif vojdf vsljkdksjv nlkfidsfj",
      status: "I really like this response",
      type: "Purpose",
      img: "https://cdn.imgbin.com/3/3/21/imgbin-square-shape-area-white-square-s-zVpkYxphd7E661L4m0fdQ749C.jpg",
    },
    {
      headerName: "Shagun",
      threadedBy: "Tushar Agarwal",
      timestamp: "1 day ago",
      message:
        "Long text goes here sdfj;lllllkd;ssssssssssssssssssssssss;sdjfkfjsd;flklsd;jfksdjfkjsdfkl;jsdafkjsdafksdjf;jkdsaf;kljdsfklasd;jfkljsdfa;j ksdlaojnif vojdf vsljkdksjv nlkfidsfj",
      status: "I really like this response",
      type: "Purpose",
      img: "https://cdn.imgbin.com/3/3/21/imgbin-square-shape-area-white-square-s-zVpkYxphd7E661L4m0fdQ749C.jpg",
    },
    {
      headerName: "Shagun",
      threadedBy: "Tushar Agarwal",
      timestamp: "1 day ago",
      message:
        "Long text goes here sdfj;lllllkd;ssssssssssssssssssssssss;sdjfkfjsd;flklsd;jfksdjfkjsdfkl;jsdafkjsdafksdjf;jkdsaf;kljdsfklasd;jfkljsdfa;j ksdlaojnif vojdf vsljkdksjv nlkfidsfj",
      status: "I really like this response",
      type: "Purpose",
      img: "https://cdn.imgbin.com/3/3/21/imgbin-square-shape-area-white-square-s-zVpkYxphd7E661L4m0fdQ749C.jpg",
    },
  ];
  const valueList = [
    "Category",
    "Humility",
    "Altruism",
    "Rigor",
    "Purpose",
    "Leadership",
    "Compassion",
    "Perseverance",
    "Accountability",
    "Integrity",
    "Loyalty",
  ];
  const emotionList = [
    "Sub-category",
    "CExcites",
    "Gratefull",
    "Inspired",
    "Anxious",
    "Sad",
    "Hopeful",
    "Confused",
    "Motivated",
    "Disillusioned",
    "Celebration",
  ];
  const wisdomList = [
    "Sub-category",
    "Inter-disciplinary",
    "Cross-functional",
    "insight",
    "Heuristic",
  ];

  // const categoryShow = () => {
  //   {
  //     category.current.value === "Value" &&
  //       valueList.map((data) => <option key={data}>{data}</option>);
  //   }
  //   {
  //     category.current.value === "Emotion" &&
  //       emotionList.map((data) => <option key={data}>{data}</option>);
  //   }
  //   {
  //     category.current.value === "Wisdom" &&
  //       wisdomList.map((data) => <option key={data}>{data}</option>);
  //   }
  //   {
  //     category.current.value === "Category" && <option>Sub-category</option>;
  //   }
  //   console.log('clicked');
  // };

  let category = useRef(null);
  let subCategory = useRef(null);

  // let catSelect = category.current.value;
  // let subCatSelect = subCategory.current.value;

  return (
    <>
      <h1 className="text-3xl font-bold m-5">Feed</h1>

      <div className="w-full px-4 flex flex-col gap-3">
      <div className="w-full flex justify-between gap-2">
        <select id="Category" ref={category} className="outline-none inline-block w-full border-none drop-shadow-md rounded-md p-2">
          <option>Category</option>
          <option>Value</option>
          <option>Emotion</option>
          <option>Wisdom</option>
        </select>
        <select
          ref={subCategory}
          className="outline-none inline-block w-full  border-none drop-shadow-md rounded-md p-2"
        >
          <option>Sub-Category</option>
        </select>
      </div>
        {dataSet.map((data) => (
          <Feeds
            headerName={data.headerName}
            threadBy={data.threadedBy}
            timestamp={data.timestamp}
            message={data.message}
            status={data.status}
            type={data.type}
            img={data.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
