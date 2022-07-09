let inputField = document.querySelector('input');
let btn = document.querySelector('#button');
let errorOne = document.querySelector('#message');
let errorContainer = document.querySelector('.message-container');


btn.onclick = async function getData() {


            //if input is empty, throws an error

    if (inputField.value == '') {

        errorOne.style.visibility = 'visible';
        errorOne.textContent = 'Please type a city name';

    } else

    //if input is not empty, api call follows
    {

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
                    console.log(response, 'status different from 200');

                } else {

                    //if call works but city doesn't exist - user has typed a wrong city

                    if (data.status == 'error') {
                        errorOne.style.visibility = 'visible';
                        errorOne.textContent = 'City not found or not in the database';

                        //city is found, data gets collected

                    } else if (data.status == 'ok') {
                        errorOne.style.visibility = 'hidden';
                        console.log(data);
                    }
                }

            })


        //In case of errors, shows 
        .catch(error =>
            console.log(error)



        );




};

    }




// search bar opens up or closes on click
let openSearchBar = document.querySelector('.open_close_search');

openSearchBar.addEventListener('click', function () {

    
    if (document.querySelector('.input-container').style.visibility == 'hidden') {
        document.querySelector('.input-container').style.visibility = 'visible'
    } else {
       document.querySelector('.input-container').style.visibility = 'hidden'
    }
})