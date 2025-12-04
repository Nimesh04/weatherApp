export async function getWeatherData(searchInput){
    const params = new URLSearchParams();
    params.append('location', searchInput);
    params.append('unitGroup','metric');
    params.append('key','EM8A3GWWB7J9N3ADDKYG6U4JE');

    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/?';
    const data = await fetch(url + params.toString())
                    .then(function(response){ 
                        return response.json()
                    });
    return data;
}