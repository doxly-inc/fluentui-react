import * as React from 'react';
import { ResponsiveMode } from '../decorators/withResponsiveMode';
/**
 * Hook to get the current responsive mode (window size category).
 * @param elementRef - Use this element's parent window when determining the responsive mode.
 */
export declare const useResponsiveMode: (elementRef: React.RefObject<HTMLElement | null>) => ResponsiveMode;
