import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function IconWindow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 17h-9v-11h9z" />
      <path d="M14 8h4l3 4v5h-2" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
      <path d="M9.3 17.5h5.4" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6l-3.2 3.2-2.8-2.8z" />
    </svg>
  );
}

export function IconDoor(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
      <line x1="3" y1="21" x2="21" y2="21" />
      <circle cx="14.5" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6z" />
      <line x1="9" y1="8" x2="9" y2="14" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="15" y1="8" x2="15" y2="14" />
    </svg>
  );
}

export function IconGate(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 21V8" />
      <path d="M20 21V8" />
      <path d="M4 10c2.5-2.5 5-4 8-4s5.5 1.5 8 4" />
      <path d="M8 21v-9.2" />
      <path d="M12 21V6" />
      <path d="M16 21v-9.2" />
      <line x1="3" y1="21" x2="21" y2="21" />
    </svg>
  );
}

export function IconRuler(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="9" width="19" height="6" rx="1" transform="rotate(-45 12 12)" />
      <path d="M8.5 12.5l1.5 1.5" />
      <path d="M11 10l1.5 1.5" />
      <path d="M13.5 7.5L15 9" />
    </svg>
  );
}

export function IconDocument(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21z" />
      <path d="M14 2.5v4h4" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 3h4l1.5 4.5L8 9.5a12 12 0 0 0 6.5 6.5l2-2.5L21 15v4a1.5 1.5 0 0 1-1.6 1.5C10.6 19.9 4.1 13.4 3.5 4.6A1.5 1.5 0 0 1 5 3z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <path d="M14 6l6 6-6 6" />
    </svg>
  );
}
