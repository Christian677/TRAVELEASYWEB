/* 
let searchButton = document.querySelector('#button').addEventListener('click', getData);
let input = document.querySelector('input');


function getData() {
    const api_key = "";



    var e = $.Event("keypress", { keyCode: 13 });
    document.querySelector('#city').trigger(e);

    //If input field is empty, message shows up

    if (document.querySelector('input').value == '') {

        document.querySelector('p').html('Please type a city name');


        //if input field is NOT empty, api call goes on
    } else {
        document.querySelector('p').css('visibility', 'hidden');

        $.ajax({
            type: 'GET',
            url: '',
            datatype: 'JSON'
        })

            .done(function (data) {

                // if city exists...

                if (data.status == 'ok') {
                    document.querySelector('p').css('visibility', 'hidden');
                    console.log('corretto', data);

                    //if city doesn't exist, show message to user
                } else if (data.status == 'error') {
                    document.querySelector('p').css('visibility', 'visible');
                    document.querySelector('p').html('Please insert a valid city name');
                }
            })

            // if server doesn't respond...
            .fail(function (data) {
                console.log('fail', data);

            })

    }
}

//if users presses enter in the input field

document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.which == 13 && input.value == "") {
        alert('stringa vuota');
    } else if (e.which == 13 && input.value != "") {
        getData();
    }
});


// search bar opens up on click

document.querySelector('.open_close_search').click(function () {
    if (document.querySelector('.input-container').css('visibility') == 'hidden')
        document.querySelector('.input-container').css('visibility', 'visible');
    else
        document.querySelector('.input-container').css('visibility', 'hidden');
});
 */

console.log("ciao mondo");
let btn = document.querySelector('.open_close_search');

btn.onclick = async function getData() {

    const api_key = '2243bb736af6dfdad57ae3b1d912e4f69ec396c6';


    //API CALL  with axios                   
    axios.get(`https://api.waqi.info/feed/Milan/?token=${api_key}`)

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

