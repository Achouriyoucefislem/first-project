import React, { useEffect, useState } from 'react'

export default () => {

  useEffect( 
    () => {console.log(window.innerWidth)} , [window.innerWidth]
   )

  return <React.Fragment>
    <button>click me</button>
  </React.Fragment>

}