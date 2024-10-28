import { r as registerInstance, h } from './index-34a78c7f.js';

const myBannerCss = ".banner{width:100%;padding:1rem;background:linear-gradient(90deg, #2563eb, #3b82f6);color:white;text-align:center;font-family:system-ui, -apple-system, sans-serif}.banner-content{font-size:1.25rem;font-weight:600;animation:fadeIn 0.5s ease-in-out}@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}";

const MyBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.slideTime = 3000;
        this.messages = ['Welcome!', 'Special Offer!', 'New Products!'];
        this.currentIndex = 0;
    }
    connectedCallback() {
        this.startSlideShow();
    }
    disconnectedCallback() {
        this.stopSlideShow();
    }
    startSlideShow() {
        this.timer = window.setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.messages.length;
        }, this.slideTime);
    }
    stopSlideShow() {
        if (this.timer) {
            window.clearInterval(this.timer);
        }
    }
    render() {
        return (h("div", { key: 'b158a8dd30e3f01b155dc83235d08099331910e2', class: "banner" }, h("div", { key: 'e1da171126a064860052c9c0b4bdf7d3ea22cb12', class: "banner-content" }, this.messages[this.currentIndex])));
    }
};
MyBanner.style = myBannerCss;

export { MyBanner as my_banner };

//# sourceMappingURL=my-banner.entry.js.map