import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export const NitroIcon = (props?: SVGProps<any>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor" // Use currentColor here
    width="1.2em"
    height="1.2em"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor" // Use currentColor here
        fillRule="evenodd"
        d="M35.217 7.02C28.047-1.383 15.424-2.384 7.02 4.785c-8.404 7.169-9.404 19.792-2.236 28.196 7.17 8.403 19.793 9.404 28.196 2.235 8.404-7.169 9.404-19.793 2.236-28.196Zm-9.964 10.497c.77 0 1.262.836.876 1.502l-.112.192L18.47 31.63a.773.773 0 0 1-.661.372h-.72a.755.755 0 0 1-.732-.944l2.048-7.919a1 1 0 0 0-.968-1.25h-3.146a1 1 0 0 1-.968-1.25l3.09-11.955a.923.923 0 0 1 .895-.68c.05 0 .097 0 .135.002h3.168a1 1 0 0 1 .991 1.134l-.02.143-1.207 7.067a1 1 0 0 0 .985 1.168h3.893Z"
        clipRule="evenodd"
      />
      <mask
        id="d"
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <circle cx={20} cy={20.001} r={20} fill="currentColor" />
      </mask>
      <g filter="url(#e)" mask="url(#d)">
        <path
          fill="currentColor" // Use currentColor here
          d="M1.111 13.427a20 20 0 1 0 37.957.541l-5.815 1.84a13.901 13.901 0 1 1-26.381-.376l-5.76-2.005Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h146v40.001H0z" />
      </clipPath>
      <filter
        id="e"
        x={-10}
        y={3.427}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_115_108"
          stdDeviation={5}
        />
      </filter>
    </defs>
  </svg>
);
