export class CityDetails {
    cityName: string;
    timeZone: string;
    state: string;
    constructor(cityName: string, timeZone: string, state: string) {
        this.cityName = cityName;
        this.timeZone =timeZone;
        this.state = state;
    }
}
