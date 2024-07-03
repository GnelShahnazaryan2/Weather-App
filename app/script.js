const getData = async () => {
    try {

        let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=4829eeadc81d4fcca73164026240307&q=London&days=3&aqi=no&alerts=no')
        if (!response.ok) {
            console.log("somthing went wrong");
            return
        }
        let objResponse = await response.json()

        setCityValue(objResponse.location.name)
        setTimeValue(objResponse.location.localtime)
        console.log(objResponse);
    } catch(error) {
        console.log(error);
        console.log("somthing went wrong");

    }
}

getData()

const setCityValue = (value) =>{
    let city = document.getElementById('city')
    city.innerText = value
}


const setTimeValue = (value) => {
    let time = document.getElementById('time')
    const arr = value.split(' ')
    time.innerText = arr[1]

}