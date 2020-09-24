export class LocationModel {
    constructor(
        public latitude: number,
        public longitude: number,
        public title: string,
        public locationType: string,
        public woeid: number
    ) {}
}
