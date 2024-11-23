import React from 'react'
import { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(() => {
        console.log("call useEffect")
    },[])
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect