// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function _1StbannerMiddlecircleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 576 576"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"288"}
        cy={"288"}
        r={"288"}
        fill={"currentColor"}
        fillOpacity={".12"}
      ></circle>
    </svg>
  );
}

export default _1StbannerMiddlecircleIcon;
/* prettier-ignore-end */
