import React, { memo } from "react";
import { IoMdClose } from "react-icons/io";

const LocalImages = ({ files, setFiles }) => {
  const handleRemoveImg = (inx) => {
    console.log(inx);
    setFiles((prev) => [...prev].filter((_, index) => index !== inx));
  };
  return (
    <div className="local__images">
      {Object.values(files)?.map((image, inx) => (
        <div className="local__image" key={inx}>
          <img src={URL.createObjectURL(image)} width={80} alt="" />
          <IoMdClose onClick={() => handleRemoveImg(inx)} />
        </div>
      ))}
    </div>
  );
};

export default memo(LocalImages);
