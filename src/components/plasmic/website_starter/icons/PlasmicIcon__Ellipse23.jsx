// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1414 1414"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#wqC4013hh6Ija)"}>
        <circle
          cx={"707"}
          cy={"707"}
          r={"107"}
          fill={"currentColor"}
          fillOpacity={".8"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"wqC4013hh6Ija"}
          x={"0"}
          y={"0"}
          width={"1414"}
          height={"1414"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"300"}
            result={"effect1_foregroundBlur_15_355"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse23Icon;
/* prettier-ignore-end */
