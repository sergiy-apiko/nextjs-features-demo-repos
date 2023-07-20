import React from 'react'

const layout = ({ children, users, analytics }) => {
  return (
    <div className="flex min-h-screen flex-col p-24">
      {children}
      <div className="grid grid-cols-2">
        {users}
        {analytics}
      </div>
    </div>
  )
}

export default layout
