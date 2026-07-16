import {CorsOptions} from 'cors'

import dotenv from 'dotenv'
dotenv.config()

//we acept request o we deneget
export const corsConfig:CorsOptions={

    origin:function(origin,callback){
        console.log(origin);
        
        //whiteListe with the url of our fontend
        const wthiteList=[process.env.FRONTEND_URL]
        //to use thunder client and front in react 
        //the origin the thunder client or pastman is undefined
        if(process.argv[2] === '--api'){

            wthiteList.push(undefined)
        }
        //if the request that comes is on our whitelist, we accept the request
        if(wthiteList.includes(origin)){
            console.log(origin);
            

            callback(null,true)
        }else{
            callback(new Error('Error of CORS'))
        }
    }
}