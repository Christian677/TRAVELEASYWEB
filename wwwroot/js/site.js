
﻿document.querySelector('#button').addEventListener('click', getData);
let input = document.querySelector('input');


function getData() {
    const api_key = "";
    let city = document.querySelector('input').value;


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
            url: https://api.waqi.info/feed/${city}/?token=${api_key},
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
