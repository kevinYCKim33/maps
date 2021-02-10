import faker from "faker";
import { Mappable } from "./CustomMap";

// implements is optional, but it helps you pinpoint to errors
// kind of like double knotting for better error checking?
// implements: Hey TS help us find out the error
// implements: totally not required
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h2>Catchphrase: ${this.catchPhrase}</h2>
    </div>
      `;
  }
}
