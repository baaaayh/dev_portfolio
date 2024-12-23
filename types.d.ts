declare module "locomotive-scroll" {
    export interface ILenisScrollToOptions {
        behavior?: "auto" | "smooth";
        top?: number;
        left?: number;
    }

    export interface ILocomotiveScrollOptions {
        el: HTMLElement; // 필수 속성으로 el 추가
        smooth?: boolean;
        multiplier?: number;
        class?: string;
    }

    export default class LocomotiveScroll {
        constructor(options: ILocomotiveScrollOptions);
        start(): void;
        stop(): void;
        scrollTo(target: HTMLElement, options?: ILenisScrollToOptions): void;
        update(): void;
        destroy(): void;
    }
}
