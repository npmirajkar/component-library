import type { Components, JSX } from "../types/components";

interface MyBanner extends Components.MyBanner, HTMLElement {}
export const MyBanner: {
    prototype: MyBanner;
    new (): MyBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
