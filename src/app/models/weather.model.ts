export class WeatherModel {
    constructor(
        public airPressure: number,
        public applicableDate: string,
        public created: string,
        public humidity: number,
        public id: number,
        public max_temp: number,
        public min_temp: number,
        public predictability: number,
        public the_temp: number,
        public visibility: number,
        public weatherStateAbbr: string,
        public weather_state_name: string,
        public windDirection: string,
        public windDirectionCompass: string,
        public windSpeed: number
    ) {}
}
