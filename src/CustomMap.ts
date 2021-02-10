// import { User } from "./User";
// import { Company } from "./Company";
// Classes can be used to create instances, and also serve as types

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

// wrapper for google maps because we don't want to expose just ANY google Maps methods for developers to go to town on
export class CustomMap {
  // googleMap is only accessible from class instantiations
  // we only want to expose marker method in index.ts
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // possible with npm install @types/googlemaps
    // hold command, click, click on Definitions
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Best Version: add an interface
  // Now anything that has a location : {lat: number, lng: number} can be marked
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    // https://developers.google.com/maps/documentation/javascript/infowindows
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // Better but Bad Version #2: less duplicate, but doesn't scale;
  // Too much tight coupling between Map and any other Classes that we want displayed onto it
  // i.e. what if I want to add Customer markers down the line?
  // I have to keep adding onto this Pipe Operator
  // take in a user and add marker to app
  // Or | operator TS will look at both types and see which key-vals they share in common

  //   addMarker(mappable: User | Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: mappable.location.lat,
  //         lng: mappable.location.lng,
  //       },
  //     });
  //   }

  // Bad Version #1: so much duplicate

  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       },
  //     });
  //   }

  //   adduserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //     });
  //   }
}
