$('#button').on('click', getData);
let input = $('input');




function getData() {
    const api_key="";
    let city = $('input').val();

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
            console.log('success', data);
        },
        error: function(data){
            console.log('error', data);
        }
    })
}
}


// search bar opens up on click

  $('.open_close_search').click(function(){
    if ( $('.input-container').css('visibility') == 'hidden' )
      $('.input-container').css('visibility','visible');
    else
      $('.input-container').css('visibility','hidden');
  });





