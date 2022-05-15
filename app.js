$('#button').on('click', getData);
let input = $('input');




function getData() {
    const api_key="cef1524dc71fe4159e2a378ada47a50edacf5ccd";
    let city = $('input').val();


    var e = $.Event( "keypress", { keyCode: 13 } );
    $('#city').trigger(e);

    //If input field is empty, emssage shows up
    
    if( $('input').val() ==""){

        $('p').html('Please insert a valid city name');

//if input field is NOT empty, api call goes on
    }else{
        $('p').css('visibility','hidden');

    $.ajax({
        type: 'GET',
        url: `https://api.waqi.info/feed/${city}/?token=${api_key}`,
        datatype: 'JSON',
        success: function (data){
            $('p').css('visibility','hidden');
            console.log('success', data);
        },
        error: function(data){
            $('p').html(data);
        }
    })
}
}

//if users presses enter in the input field

$('input').on('keypress',function(e) {
    if(e.which == 13 && input.val()== "") {
        alert('stringa vuota');
    }else if(e.which == 13 && input.val()!= ""){
getData();
    }
});


// search bar opens up on click

  $('.open_close_search').click(function(){
    if ( $('.input-container').css('visibility') == 'hidden' )
      $('.input-container').css('visibility','visible');
    else
      $('.input-container').css('visibility','hidden');
  });

