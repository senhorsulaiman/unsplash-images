import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from './context'
const url=`https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}`


const Gallery = () => {
    const {searchTerm}=useGlobalContext();
    const response=useQuery({

        queryKey:['images',searchTerm],
        queryFn:async()=>{
            const result=await axios.get(`${url}&query=${searchTerm}`);
            return result.data;
        }
    })

 if(response.isLoading){
        return(
    <section className='image-container'>

        <div className="loading"></div>
    </section>)
}
if(response.isError){
    return(
    <section className='image-container'>

        <h4>there was an error</h4>
    </section>)
}


if(response.data.results.length<1){
     return(
    <section className='image-container'>

        <h4>there was an error</h4>
    </section>
   )
 }
 const results=response.data.results;
  return (

    <section className="image-container">

        {results.map((item)=>{
                const url=item?.urls?.regular;
        return(
          
                 <img src={url} alt=""  key={item.id}/>
                
             
           
         )
        })}
    </section>
   
  )
}

export default Gallery
