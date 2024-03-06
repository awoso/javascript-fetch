const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=f7c65cf2';
const options = {method: 'GET', headers: {accept: 'application/json'}};

const getMovie = async()=>{
    try{
        const response = await fetch(url, options)
        let result = await response.json()
        console.log(result);
    }catch(error){
        console.error(error.message);
    }
}
getMovie();