export class WeatherModel {
    constructor(
        public air_pressure: number,
        public applicable_date: string,
        public created: string,
        public humidity: number,
        public id: number,
        public max_temp: number,
        public min_temp: number,
        public predictability: number,
        public the_temp: number,
        public visibility: number,
        public weather_state_abbr: string,
        public weather_state_name: string,
        public wind_direction: string,
        public wind_direction_compass: string,
        public wind_speed: number
    ) {}
}
