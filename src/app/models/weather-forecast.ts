export class WeatherForecast {
    datetime:string;
    temp: number;
    min_temp: number;
    max_temp: number;
    description: string;
    constructor(data: Object) {
        this.datetime = data['datetime'];
        this.temp = data['weather']['description'];
        this.min_temp = data['max_temp'];;
        this.max_temp = data['max_temp'];
        this.description = data['weather']['description'];
    }
}
