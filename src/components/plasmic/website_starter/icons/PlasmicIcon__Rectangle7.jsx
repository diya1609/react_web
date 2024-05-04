// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rectangle7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 260 246"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M35.262 26.826L259.322 0l-41.174 245.864L0 199.576l35.262-172.75z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle7Icon;
/* prettier-ignore-end */
