import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
        <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
    `;
  }
}

export default Company;
