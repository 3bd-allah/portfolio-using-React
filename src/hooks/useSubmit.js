import React, { useEffect, useState } from 'react'

const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))

const useSubmit = () => {

    const[isLoading, setIsLoading]= useState(false)
    const[response, setResponse] = useState({
        type:"",
        message:""
    })
    
    // useEffect(()=>{
    //     console.log("response in useSubmit: ",response)
    // },[response])

    const submit = async(name)=>{
        
        console.log("submit func occurred")
        const random = Math.random()
        setIsLoading(true)

        if(random < .5 ){
            console.log("random: ",random)
            console.log("success happened")
            setResponse(prev => ({
                ...prev , 
                type:"success", 
                message:`Thanks for your submission ${name}, We will get back to you shortly!`
            }))
            console.log("response.type when success: ",response.type )
            console.log("response.message when success: ",response.message )
        }else{

            console.log("error happened")
            setResponse(prev =>({
                ...prev, 
                type:"error", 
                message:`Something went wrong ${name} , please try again later!`
            }))
            console.log("response.type when error: ",response.type )
            console.log("response.message when error: ",response.message )
        }

        //=====================================================================================================================================

        // try{
        //     // await wait(2000);
        //     if(random < .5){
        //         throw new Error("Something went wrong")
        //     }else{
                
        //         console.log("no error happened")
        //         setResponse({
        //             type:'success', 
        //             message:`Thank you for your submission ${name}, We will get back to you shortly!`
        //         })
        //         console.log("response.type: ",response.type )
        //         console.log("response.message: ",response.message )
        //     }
            
        // }catch{
        //     console.log("error happened")
        //     setResponse({
        //         type:'error', 
        //         message:`Something went wrong ${name}, please try again later!`
        //     })
        //     console.log("response.type: ",response.type )
        //     console.log("response.message: ",response.message )

        // }finally{
        //     setIsLoading(false)
        // }
    }

  return {isLoading , response , submit}
}

export default useSubmit