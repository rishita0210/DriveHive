"use client";
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
  const [manufacturer ,setManufacturer]=useState('');
    const handelSearch=()=>{

    }
  return (
    <form className='searchbar' onSubmit={handelSearch}>
        <div className="serachbar__item">
            <SearchManufacturer/>

        </div>

    </form>
  )
}

export default SearchBar
