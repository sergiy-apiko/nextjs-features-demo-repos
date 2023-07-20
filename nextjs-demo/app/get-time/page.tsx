import React from 'react'

const getTime=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(new Date().toLocaleTimeString()),2000)
    })
}
const page = () => {
  return (
    <div>page</div>
  )
}

export default page