import { Component, h } from '@stencil/core';
import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  
  async componentDidLoad() {
    let coodinates = await Geolocation.getCurrentPosition();
    console.log(coodinates)
  }
  
  render() {
    
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Weather</ion-title>
          <ion-buttons slot="end">
            <ion-button href="/settings" routerDirection="forward">
                <ion-icon slot="icon-only" name="settings" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <div class="weather-display">
          
          <h1>23.4</h1>
          <p>Sunny</p>

          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Adelaide</ion-card-subtitle>
              <ion-card-title>Overview</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <ion-row>
                  <ion-col size="6">Min</ion-col>
                  <ion-col size="6">12</ion-col>
                </ion-row>
                <ion-row>
                  <ion-col size="6">Max</ion-col>
                  <ion-col size="6">26</ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

        </div>
      </ion-content>
    ];
  }

}
