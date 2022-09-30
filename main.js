const findmystate =  () => {
  const status = document.querySelector('.status');

  const success = (position) => {
    console.log(position.coors)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude+ " " +longitude)
    const geoApiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en'

    fetch(geoApiUrl)
    .then(res => res.json())
    .then(data =>{
      status.textContent = data.localityInfo.administrative[2].name +" "+ data.localityInfo.administrative[2].description
      console.log("data: "+ data);
    })

  }

  const error = () =>{
      status.textContent = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success , error);
}

document.querySelector('.find-status').addEventListener('click' , findmystate);
