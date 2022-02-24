import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-settings',
  styleUrl: 'app-settings.css',
  shadow: true,
})
export class AppSettings {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
