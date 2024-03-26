import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <>
    <InfinitySpin
  visible={true}
  width="200"
  color="#0d6efd"
  ariaLabel="infinity-spin-loading"
  />
    </>
  )
}

export default Loader