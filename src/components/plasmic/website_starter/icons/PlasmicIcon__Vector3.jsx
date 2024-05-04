// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.8 20h8.4c3.2 0 5.8-2.6 5.8-5.8V5.8A5.8 5.8 0 0014.2 0H5.8C2.6 0 0 2.6 0 5.8v8.4A5.8 5.8 0 005.8 20zm-.2-2A3.6 3.6 0 012 14.4V5.6C2 3.61 3.61 2 5.6 2h8.8A3.6 3.6 0 0118 5.6v8.8c0 1.99-1.61 3.6-3.6 3.6H5.6zm9.65-1.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM10 15a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
