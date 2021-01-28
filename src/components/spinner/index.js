import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className="contianer-spinner">
      <Loader
        type="TailSpin"
        color="#bb0e0a"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </div>
  )
}

export default Spinner
