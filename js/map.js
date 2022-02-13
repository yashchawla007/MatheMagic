function initMap() {
    const tutionCenter = {lat: 28.865941, lng: 76.625697};
    const map = new google.maps.Map(document.getElementById("mapContainer"), {
      zoom: 18,
      gestureHandling: "cooperative",
      center: tutionCenter,
      mapTypeId: 'satellite'
    });
    const marker = new google.maps.Marker({
      position: tutionCenter,
      icon: '/matheMagic/images/marker_1.png',
      map: map,
    });
  }
