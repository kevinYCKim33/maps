import faker from "faker";

export const CompanyOLOO = {
    // doesn't work!
    companyName: string;
    catchPhrase: string;
    location: {
      lat: number;
      lng: number;
    };
  init() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  },
};
