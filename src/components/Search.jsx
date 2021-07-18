import React from 'react'

export default function Search({handleSearch,searchInput,search}) {
    return (
        
        <div className="container__search">
            <span className="container__search--icon"></span><input type="text" onChange={handleSearch} ref={searchInput} value={search}></input>

        </div>
    )
}
