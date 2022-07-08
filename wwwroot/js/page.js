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
let inputField = document.querySelector('input');
let btn = document.querySelector('#button');
let errorOne = document.querySelector('#message');
let errorContainer = document.querySelector('.message-container');


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
                    console.log(response);
                    console.log('città non trovata', 'errore 200');

                } else {

                    //if call works but city doesn't exist - user has typed a wrong city
                    if (data.status == 'error') {
                        errorOne.style.visibility = 'visible';
                        errorOne.style.color = "#000000";
                        errorOne.textContent = 'City name is invalid or not in the database';
                    }
                    //if call works and city exists
                    else if (data.status == 'ok') {
                        errorOne.style.visibility = 'hidden';
                        console.log('corretto:', data);
                    }

                    

                }

            })


        //In case of errors, shows 
        .catch(error =>
            console.log(error.message));




};






// search bar opens up or closes on click
let openSearchBar = document.querySelector('.open_close_search');

openSearchBar.addEventListener('click', function () {

    
    if (document.querySelector('.input-container').style.visibility == 'hidden') {
        document.querySelector('.input-container').style.visibility = 'visible'
    } else {
       document.querySelector('.input-container').style.visibility = 'hidden'
    }
})



//inputField.addEventListener('keydown', function (e) {

  //  if (e.keyCode === 13 && inputField.value == '') {
  //      errorOne.style.color = "#000000";
  //      errorOne.textContent = 'City name is missing!';
  //  } else if (e.keyCode === 13 && !inputField.value == '') {
  //      btn.onclick();
  //  }
//});
