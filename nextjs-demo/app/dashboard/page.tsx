import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="p-4 bg-slate-400">
      <h1>Dashboard </h1>
      <div className="flex gap-8">
        <Link href={'/dashboard/users'}>GO to Users</Link>
        <Link href={'/dashboard/analytics'}>GO to Analytics</Link>
      </div>
    </div>
  )
}

export default page
