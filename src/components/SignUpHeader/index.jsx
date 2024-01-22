import React from "react";

import { Img, Text } from "components";

const SignUpHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[232px] items-start justify-between w-auto md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
              size="txtInterBold24Black900"
            >
              {props?.exclusive}
            </Text>
          </div>
          <div className="flex flex-row gap-12 items-start justify-start w-auto">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                {props?.home}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                {props?.contact}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                {props?.about}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtPoppinsRegular16"
              >
                {props?.signup}
              </Text>
              <Img
                className="h-px w-[61px]"
                src="images/img_underline.svg"
                alt="underline"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <div className="bg-gray-100 flex flex-col items-center justify-center pl-5 pr-3 py-[7px] rounded w-auto">
            <div className="flex flex-row gap-[34px] items-center justify-center w-auto">
              <Text
                className="text-black-900_87 text-xs w-auto"
                size="txtPoppinsRegular12"
              >
                {props?.search}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_search.svg"
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpHeader.defaultProps = {
  exclusive: "STARTUP IDEA",
  home: "Home",
  contact: "Services",
  about: "About",
  signup: "Sign Up",
  search: "What are you looking for?",
};

export default SignUpHeader;
