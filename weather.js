const x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

    let latitudelongitude = position.coords.latitude + "," + position.coords.longitude;

    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    "+latitudelongitude+" & zoom = 14 & size = 400 x300 & sensor = false & key = YOUR_KEY ";

    document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
}

function showPosition(position) {

}