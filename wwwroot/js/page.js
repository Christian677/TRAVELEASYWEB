let btn = document.querySelector('#button');

btn.onclick = async function getData() {
    let city = document.querySelector('#city').value;

    const api_key = '';


    //API CALL  with axios                   
    axios.get(`https://api.waqi.info/feed/${city}/?token=${api_key}`)

        .then(

            async response => {

                let data = await response.data

                //if the request can't be processed (city is not found)

                if (response.status !== 200) {

                    throw new Error(response.status);

                } else {


                    //if the call works and the request is being 
                    console.log(data);
                }
            })


        //In case of errors, shows 
        .catch(error =>
            alert('Please type a valid city name'));



};

// search bar opens up or closes on click
let openbar = document.querySelector('.open_close_search');


openbar.addEventListener('click', function () {

    
    if (document.querySelector('.input-container').style.visibility == 'hidden') {
        document.querySelector('.input-container').style.visibility = 'visible'
    } else {
       document.querySelector('.input-container').style.visibility = 'hidden'
    }
})


//if users presses enter in the input field
inputField.addEventListener('keydown', function (e) {

    if (e.keyCode === 13 && inputField.value == '') {
        alert('key was pressed');
    } else if (e.keyCode === 13 && !inputField.value == '') {
        btn.onclick();
    }
});
