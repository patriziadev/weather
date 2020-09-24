export class WeatherModel {
    constructor(
        public airPressure: number,
        public applicableDate: string,
        public humidity: number,
        public maxTemp: number,
        public minTemp: number,
        public theTemp: number,
        public visibility: number,
        public weatherStateAbbr: string,
        public weatherStateName: string,
        public windDirectionCompass: string,
        public windSpeed: number
    ) {}
}
