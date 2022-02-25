interface WeatherCoords {
    lon: number;
    lat: number;
}

interface WeatherMain {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

interface WeatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;    
}

interface WeatherWind {
    speed: number;
    deg: number;
}

export interface WeatherResponse {
    base: string;
    clouds: Object;
    cod: number;
    coord: WeatherCoords;
    dt: number;
    id: number;
    main: WeatherMain;
    name: string;
    sys: Object;
    visibility: number;
    weather: WeatherDescription[];
    wind: WeatherWind;
}