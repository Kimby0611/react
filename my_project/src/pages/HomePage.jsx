import React from "react";
import HeadUi from "../ui/HeadUi";
import data from "../tem.json";
import SectionUi from "../ui/SectionUi";

const HomePage = () => {
  return (
    <div>
      <HeadUi tem={data} />
      <SectionUi />
    </div>
  );
};

export default HomePage;
