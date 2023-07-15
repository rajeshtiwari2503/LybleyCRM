import React from 'react'
import style from "./search.module.css"
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (
    <div className={`${style.searchBody}`}>
      {/* <div className='col-12 mt-4'>
        <div className='form-group'>
          <div className='d-flex justify-content-between '> <input type="text" className='form-control border border-2 border-dark' placeholder='Search' onChange={(e) => setSearch(e.currentTarget.value)} onKeyUp={(e) => onEnter(e)} />  <button className='btn btn-primary bg-dark ms-2'>Search</button></div>
        </div>
      </div> */}
      <div className=' mt-3'>
      <div className={`${style.searchBox}`}>
      <input type="text" placeholder="Search..." />
      {/* <button type="submit">Search</button> */}
      <SearchIcon fontSize='large' />
    </div>
      </div>
    </div>
  )
}

export default Search;