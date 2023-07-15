import React from 'react'
import style from "./search.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
const Search = () => {

  const [search,setSearch]=useState("");
  return (
    <div className={`${style.searchBody} `}>
      {/* <div className='col-12 mt-4'>
        <div className='form-group'>
          <div className='d-flex justify-content-between '> <input type="text" className='form-control border border-2 border-dark' placeholder='Search' onChange={(e) => setSearch(e.currentTarget.value)} onKeyUp={(e) => onEnter(e)} />  <button className='btn btn-primary bg-dark ms-2'>Search</button></div>
        </div>
      </div> */}
      <div className=''>
        <div className={`${search ? style.searchBoxClick : style.searchBox}`}>
          <input onChange={(e)=>setSearch(e.currentTarget.value)} name='search' value={search} type="text" placeholder="Search..." />
          {/* <button type="submit">Search</button> */}
          <SearchIcon className='me-2' fontSize='medium' />

        </div>
        {search ? <div className={`${style.categoryList} `}>
          <div className='ps-2' > Fan</div>
          <div className='ps-2' > Cooler</div>
          <div className='ps-2' > Mixer</div>
          <div className='ps-2' > Search Results</div>
        </div>
          : ""
        }
      </div>
    </div>
  )
}

export default Search;