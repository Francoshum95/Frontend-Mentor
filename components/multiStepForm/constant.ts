export const FORMSTEP = 1 as const;
export const SELECTSTEP = 2 as const;
export const PICKSTEP = 3 as const;
export const CHECKOUTSTEP = 4 as const;
export const DONE = 5 as const;

export const BACK = 'BACK';
export const NEXT = 'NEXT';
export const REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const FIRSTSELECT = 0 as const;
export const SECONDSELECT = 1 as const;

export const SELECTORICONMAP:{[id: number]: string} = {
  1: "/asset/icon-arcade.svg",
  2: "/asset/icon-advanced.svg",
  3: "/asset/icon-pro.svg",
}

export const PHONE = "phone" as const;
export const EMAIL = "email" as const;
export const TEXT = "text" as const;
