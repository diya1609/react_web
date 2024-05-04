// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.457 2.776a3.22 3.22 0 00-.835-1.414 3.263 3.263 0 00-1.43-.825C21.164 0 13.012 0 13.012 0S4.876-.013 2.827.537c-.54.15-1.03.434-1.427.826a3.21 3.21 0 00-.833 1.413A33.172 33.172 0 000 9.012c-.003 2.082.186 4.16.567 6.207a3.22 3.22 0 00.834 1.415 3.28 3.28 0 001.426.829C4.855 18 13.012 18 13.012 18s8.132 0 10.18-.537a3.276 3.276 0 001.43-.828 3.24 3.24 0 00.835-1.416c.373-2.046.555-4.127.542-6.207a33.424 33.424 0 00-.542-6.236zm-15.049 10.09V5.142l6.786 3.871-6.786 3.855z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
