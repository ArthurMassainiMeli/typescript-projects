export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

// this approach doesnt work because you loose access to all others properties
// type ItemTwo = User | Company;

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementID) as any,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      },
    );
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

export default CustomMap;
