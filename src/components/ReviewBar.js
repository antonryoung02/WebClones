import React from "react";

function ReviewBar(props) {
  const percentage = props.percentage;
  const label = props.label;

  return (
    <div className="flex flex-row gap-2">
      <p className="text-sky-700 text-sm w-12">{label}</p>
      <div className="w-3/4 h-6 rounded-md border-2 box-border">
        <div
          className={` bg-orange-400 h-full rounded-l-md`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sky-700 text-sm w-10">{percentage}%</p>
    </div>
  );
}

export default ReviewBar;
