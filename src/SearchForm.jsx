import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
    const {setSearchTerm,searchTerm}=useGlobalContext();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const searchValue=e.target.elements.search.value;

        if(!searchValue)   return 
     
        setSearchTerm(searchValue)   

  
    }
  return (
    <section >

        <h1 className="title">unsplash images</h1>

        <form className='search-form' onSubmit={handleSubmit}>

            <input type="text"  className='form-input search-input' name='search' placeholder={searchTerm} />
            <button type='submit' className='btn'>Search</button>
        </form>
    </section>
  )
}

export default SearchForm
