// npm install -g parcel-bundler
// parcel index.html
// needs type definition files
import faker from "faker"; // weird underline meant I also had to import @types/faker
import { Mappable } from "./CustomMap";
// I guess TS community doesn't really do export default
// generally a no no in TS community

// implements is optional, but it helps you pinpoint to errors
// kind of like double knotting for better error checking?
// implements: Hey TS help us find out the error
// implements: totally not required
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    // this.location.lat = parseFloat(faker.address.latitude()) // this surprisingly doesn't work
    // because location is technically undefined?? huh???
    this.location = {
      lat: parseFloat(faker.address.latitude()), // faker library has lat, lng as str, which Grider says is oversight
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
