import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";
import SignUpHeader from "components/SignUpHeader";
import SignUpTopheader from "components/SignUpTopheader";

const SignUpPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <SignUpTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader className="flex md:flex-col flex-row font-inter md:gap-10 gap-[210px] items-center justify-between max-w-[1170px] mt-[38px] mx-auto md:px-5 w-full" />
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[129px] items-center justify-between max-w-[1305px] mt-[60px] mx-auto md:px-5 w-full">
          <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-center justify-end pt-[75px] rounded-br rounded-tr w-[62%] md:w-full">
            <Img
              className="h-[706px] md:h-auto object-cover rounded-tr w-full"
              src="images/img_dlbeatsnoop1.png"
              alt="dlbeatsnoopOne"
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-12 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                size="txtInterMedium36"
              >
                Create an account
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtPoppinsRegular16"
              >
                Enter your details below
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    Name
                  </Text>
                  <Img
                    className="h-px w-[370px]"
                    src="images/img_underline.svg"
                    alt="underline_One"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    Email or Phone Number
                  </Text>
                  <Img
                    className="h-px w-[370px]"
                    src="images/img_underline.svg"
                    alt="underline_Two"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    Password
                  </Text>
                  <Img
                    className="h-px w-[370px]"
                    src="images/img_underline.svg"
                    alt="underline_Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Button className="cursor-pointer font-medium min-w-[371px] sm:min-w-full text-base text-center">
                  Create Account
                </Button>
                <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[371px] sm:min-w-full"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        className="h-6 mb-0.5 mr-4"
                        src="images/img_icongoogle.svg"
                        alt="Icon-Google"
                      />
                    }
                    color="black_900_66"
                    variant="outline"
                  >
                    <div className="text-base text-left">
                      Sign up with Google
                    </div>
                  </Button>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900_99 w-auto"
                      size="txtPoppinsRegular16Black90099"
                    >
                      Already have account?
                    </Text>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-black-900_99 w-auto"
                      >
                        <Text size="txtPoppinsMedium16">Log in</Text>
                      </a>
                      <Img
                        className="h-px w-[47px]"
                        src="images/img_underline.svg"
                        alt="underline_Four"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[140px] w-full">
          <footer className="bg-black-900 flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[23px] mt-[77px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[87px] items-start justify-center w-auto md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col font-inter items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px]"
                          size="txtInterBold24"
                        >
                          STARTUP IDEA
                        </Text>
                      </div>
                      <Text
                        className="text-gray-50 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Subscribe
                      </Text>
                    </div>
                    <Text
                      className="text-base text-gray-50 w-auto"
                      size="txtPoppinsRegular16Gray50"
                    >
                      Get 10% off your first order
                    </Text>
                  </div>
                  <Input
                    name="sendmail"
                    placeholder="Enter your email"
                    className="p-0 placeholder:text-gray-50_7e text-base text-left w-full"
                    wrapClassName="flex w-[217px]"
                    type="email"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-6 ml-8"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <a href="javascript:" className="text-gray-50 text-xl w-auto">
                    <Text size="txtPoppinsMedium20">Support</Text>
                  </a>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[24.00px] max-w-[175px] md:max-w-full text-base text-gray-50"
                      size="txtPoppinsRegular16Gray50"
                    >
                      111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </Text>
                    <Text
                      className="text-base text-gray-50 w-auto"
                      size="txtPoppinsRegular16Gray50"
                    >
                      exclusive@gmail.com
                    </Text>
                    <Text
                      className="text-base text-gray-50 w-auto"
                      size="txtPoppinsRegular16Gray50"
                    >
                      +88015-88888-9999
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-50 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Account
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">My Account</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">
                          Login / Register
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Cart</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Wishlist</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Shop</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-50 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Quick Link
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">
                          Terms Of Use
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">FAQ</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Contact</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Text
                      className="text-gray-50 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Download App
                    </Text>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-gray-50_99 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        Save $3 with App New User Only
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-black-900 flex flex-col h-20 items-center justify-start p-0.5 w-20">
                          <Img
                            className="h-[76px] md:h-auto object-cover w-[76px]"
                            src="images/img_qrcode1.png"
                            alt="qrcodeOne"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <div className="bg-black-900_01 h-10 md:h-[30px] p-[3px] relative w-full">
                            <div className="h-[30px] m-auto w-[95%]">
                              <div className="h-[30px] m-auto w-full">
                                <Img
                                  className="h-[30px] m-auto object-cover rounded w-full"
                                  src="images/img_pngtransparent.png"
                                  alt="pngtransparent"
                                />
                                <Img
                                  className="absolute bottom-[37%] h-px right-[7%] w-px"
                                  src="images/img_vector1.svg"
                                  alt="vectorOne"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[30%] h-[3px] right-[7%]"
                                src="images/img_vector2.svg"
                                alt="vectorTwo"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[43%] h-px right-[13%] w-px"
                              src="images/img_vector3.svg"
                              alt="vectorThree"
                            />
                            <Img
                              className="absolute bottom-[38%] h-0.5 right-[9%] w-px"
                              src="images/img_vector4.svg"
                              alt="vectorFour"
                            />
                          </div>
                          <div className="bg-black-900 flex flex-col items-center justify-start p-[3px] w-full">
                            <Img
                              className="h-[34px] md:h-auto object-cover rounded w-full"
                              src="images/img_downloadappstore.png"
                              alt="downloadappstor"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconfacebook.svg"
                      alt="iconfacebook"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconinstagram.svg"
                      alt="iconinstagram"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="text-base text-gray-50"
                size="txtPoppinsRegular16Gray50"
              >
                Become a Seller{" "}
              </Text>
              <div className="flex flex-col gap-4 items-center justify-start mt-[35px] w-auto md:w-full">
                <Img
                  className="h-px w-[1440px]"
                  src="images/img_underline_white_a700.svg"
                  alt="underline_Five"
                />
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconcopyright.svg"
                      alt="iconcopyright"
                    />
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      Copyright Rimel 2022. All right reserved
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
