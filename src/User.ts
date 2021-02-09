// npm install -g parcel-bundler
// parcel index.html
// needs type definition files
import faker from "faker"; // weird underline meant I also had to import @types/faker

// I guess TS community doesn't really do export default
// generally a no no in TS community
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // this.location.lat = parseFloat(faker.address.latitude()) // this surprisingly doesn't work
    // because location is technically undefined?? huh???
    this.location = {
      lat: parseFloat(faker.address.latitude()), // faker library has lat, lng as str, which Grider says is oversight
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
