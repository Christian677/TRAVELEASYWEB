$('#button').on('click', getData);
let input = $('input');


function getData() {
    const api_key="";
    let city = $('input').val();


    var e = $.Event( "keypress", { keyCode: 13 } );
    $('#city').trigger(e);

    //If input field is empty, emssage shows up
    
    if( $('input').val() == ''){

        $('p').html('Please type a city name');
        

//if input field is NOT empty, api call goes on
    }else{
        $('p').css('visibility','hidden');

    $.ajax({
        type: 'GET',
        url: `https://api.waqi.info/feed/${city}/?token=${api_key}`,
        datatype: 'JSON'
    })
        
    .done(function(data){

        if(data.status == 'ok'){
            $('p').css('visibility','hidden');
            console.log('corretto', data);


        }else if(data.status == 'error'){
            $('p').css('visibility','visible');
            $('p').html('Please insert a valid city name');
        }
    })


    .fail(function(data){
        console.log('fail', data);
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

