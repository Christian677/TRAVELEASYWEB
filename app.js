let getDataButton = document.querySelector('#button');


getDataButton.onclick = async function() {


    const api_key = '2243bb736af6dfdad57ae3b1d912e4f69ec396c6';

    let city = document.querySelector('#city').value;

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

            //collecting data from API
            }})
                

                //In case of errors, shows 
                .catch (error =>
                    alert(error));
                
                    

            };