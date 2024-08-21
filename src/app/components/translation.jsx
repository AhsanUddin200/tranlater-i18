import React from "react";
import { BsTranslate } from "react-icons/bs";

const Translation = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex items-center space-x-2">
        <BsTranslate className="text-gray-600" />
        <select className="text-gray-600 text-[14px] w-[90px]" name="Language">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default Translation;
