import React from 'react'

export default function Search({handleSearch,searchInput,search}) {
    return (
        
        <div className="container__search">
            <input type="text" onChange={handleSearch} ref={searchInput} value={search}></input>

        </div>
    )
}
