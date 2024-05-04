// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RiarrowDownLineIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.75 12.129l4.023-4.023 1.06 1.06L9 15 3.167 9.166l1.06-1.06 4.023 4.023V3h1.5v9.129z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RiarrowDownLineIcon;
/* prettier-ignore-end */
