import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
        User name: ${this.name}
    `;
  }
}

export default User;
