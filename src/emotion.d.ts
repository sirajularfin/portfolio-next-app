// src/@types/emotion.d.ts
import type { BREAKPOINTS, COLORS, FONT_FAMILY } from '@/config/theme';
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof COLORS;
    fonts: typeof FONT_FAMILY;
    breakpoints: typeof BREAKPOINTS;
  }
}
