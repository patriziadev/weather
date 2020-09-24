export class WeatherModel {
    constructor(
        public airPressure: number,
        public applicableDate: string,
        public created: string,
        public humidity: number,
        public id: number,
        public maxTemp: number,
        public minTemp: number,
        public predictability: number,
        public theTemp: number,
        public visibility: number,
        public weatherStateAbbr: string,
        public weatherStateName: string,
        public windDirection: string,
        public windDirectionCompass: string,
        public windSpeed: number
    ) {}
}
