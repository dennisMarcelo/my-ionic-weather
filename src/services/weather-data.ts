import { WeatherResponse } from "../interfaces/weather";
import { SettingsData } from "./settings-data";
import { convertFromKelvin } from "../helpers/utils";

const URL_WEATHER: string = "https://api.openweathermap.org/data/2.5/weather?"

class WeatherDataController {
    public data: WeatherResponse;
    private apiKey: string = "7a71463d7211c793060d53e97c383d84";

    constructor() {}

    async load() {
        return this.data ? this.data : (await this.refreshWeather());
    }

    async refreshWeather() {
        let [location, unit] = await Promise.all([
            SettingsData.getLocation(),
            SettingsData.getTemperatureUnit()
        ]);

        let response;

        try {
            response = await fetch(`${URL_WEATHER}lat=${
                location.lat}&lon=${location.lng}&APPID=${this.apiKey}`);

            if (!response.ok) {
                throw new Error(response.statusText);
            }else{
                response = await fetch(
                    `${URL_WEATHER}q=${location.name}&APPID=${this.apiKey}`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            }

        }catch (err) {
            return Promise.reject(err);
        }

        let weatherData = await response.json();
       
        return this.processData(weatherData, unit);
    }

    processData(data: WeatherResponse, unit: string) {
        data.main.temp = parseFloat(
            convertFromKelvin(data.main.temp, unit).toFixed(1));
        
        data.main.temp_min = parseFloat(
            convertFromKelvin(data.main.temp_min, unit).toFixed(1));
        
        data.main.temp_max = parseFloat(
            convertFromKelvin(data.main.temp_max, unit).toFixed(1));

        return (this.data = data);
    }

    async getCurrentWeather() {
        const data = await this.load();
        return data;
    }
}

export const WeatherData = new WeatherDataController();