class Http {
    static instance = new Http()

    get = async (url) => {
        try{
            let req = await fetch(url)
            let data = req.json()
            
            return data;
        }catch(err){
            console.log(`Error fetching data: ${err}`);
        }

        throw Error(err);
    }

    post = async (url, body) => {
        try{
            let req = await fetch(url, {
                method: 'POST',
                body 
            });
            let data = req.json()
            return data;
        }catch(err){
            console.log(`Error posting data: ${err}`)
        }

        throw Error(err)
    }

    put = async (url, body) => {
        try{
            let req = await fetch(url, {
                method: 'PUT',
                body 
            });
            let data = req.json()
            return data;
        }catch(err){
            console.log(`Error posting data: ${err}`)
        }

        throw Error(err)
    }

    delete = async (url, body) => {
        try{
            let req = await fetch(url, {
                method: 'DELETE',
                body 
            });
            let data = req.json()
            return data;
        }catch(err){
            console.log(`Error posting data: ${err}`)
        }

        throw Error(err)
    }
}

export default Http