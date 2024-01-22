import React from "react";

const sizeClasses = {
  txtPoppinsRegular16Black90099: "font-normal font-poppins",
  txtPoppinsRegular16Gray50: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterMedium36: "font-inter font-medium",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterBold24: "font-bold font-inter",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtInterBold24Black900: "font-bold font-inter",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular16Black9007e: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
