import React from "react";
import Btn from "./Btn";

const ImageText = ({
  title,
  heading,
  description,
  customClasses1,
  customClasses2,
  customClasses3,
  btnText1,
  btnText2,
  src,
}) => {
  return (
    <div className={`w-full h-[430px] flex flex-row  justify-center items-center relative bg-gray-900 ${customClasses1}`}>
      <div className="w-6/12 ">
        <img src={src} alt="images" style={{ objectFit: "contain" }} />
      </div>

      <div className="w-6/12 px-12">
        <p className="text-xl  text-gray-4 uppercase">{title}</p>
        <h3 className="text-3xl tracking-wide font-bold  uppercase my-2">
          {heading}
        </h3>
        <p className="text-gray-4 my-4">{description}</p>
        <div className="w-1/3 gap-y-4 flex flex-col mt-4">
          <Btn
            customClasses={`${customClasses2} text-white border-yellow-50  `}
            text={btnText1}
            outline={true}
          />
          <Btn customClasses={`${customClasses3}  bg-yellow-500 `} text={btnText2} />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
