import * as React from 'react';
import { ISliderProps } from './Slider.types';
import { ILabelProps } from '../Label/index';
export declare const ONKEYDOWN_TIMEOUT_DURATION = 1000;
export declare const useSlider: (props: ISliderProps, ref: React.Ref<HTMLDivElement>) => {
    root: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;
    label: ILabelProps;
    sliderBox: React.HTMLAttributes<HTMLElement>;
    container: React.HTMLAttributes<HTMLElement>;
    valueLabel: ILabelProps | undefined;
    lowerValueLabel: ILabelProps | undefined;
    thumb: React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>;
    lowerValueThumb: (React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>) | undefined;
    zeroTick: React.HTMLAttributes<HTMLElement> | undefined;
    activeTrack: React.HTMLAttributes<HTMLElement>;
    topInactiveTrack: React.HTMLAttributes<HTMLElement>;
    bottomInactiveTrack: React.HTMLAttributes<HTMLElement>;
    sliderLine: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;
};
