import React from 'react'
import { Outlet } from 'react-router-dom';

const Collection = () => {
  return (
    <div>
      <h1>
        THIS IS THE COLLECTION PAGE
      </h1>
        <Outlet/>
    </div>
  )
}

export default Collection;
