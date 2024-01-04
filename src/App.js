import React, { useEffect, useState } from 'react'

export default () => {

  useEffect( () => {
    fetch( 'https://raw.githubusercontent.com/Achouriyoucefislem/first-project/main/src/data.js' )
    .then( result => result.json() )
    .then( result => console.log(result) ) }
    )

  return <React.Fragment>
    <button>click me</button>
  </React.Fragment>

}