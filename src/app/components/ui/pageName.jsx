import React from "react";

const PageName = ({ small, title }) => {
  return (
    <div className="felx flex-col md:px-0 px-2">
      {small && <p className="-mb-1">{small}</p>}
      <h1 className="text-[1.1rem] font-semibold">{title}</h1>
    </div>
  );
};

export default PageName;
