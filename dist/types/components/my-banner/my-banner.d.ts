export declare class MyBanner {
    slideTime: number;
    messages: string[];
    currentIndex: number;
    private timer;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private startSlideShow;
    private stopSlideShow;
    render(): any;
}
