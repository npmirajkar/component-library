import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-banner',
  styleUrl: 'my-banner.css',
  shadow: true,
})
export class MyBanner {
  @Prop() slideTime: number = 3000;
  @Prop() messages: string[] = ['Welcome!', 'Special Offer!', 'New Products!'];
  @State() currentIndex: number = 0;

  private timer: number;

  connectedCallback() {
    this.startSlideShow();
  }

  disconnectedCallback() {
    this.stopSlideShow();
  }

  private startSlideShow() {
    this.timer = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    }, this.slideTime);
  }

  private stopSlideShow() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div class="banner">
        <div class="banner-content">
          {this.messages[this.currentIndex]}
        </div>
      </div>
    );
  }
}