$('#button').on('click', getData);



function getData() {
    const api_key="";
    let city = $('input').val();
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


$(".open_close_search").click(function(){
    $(".input-container").toggle();
  });





