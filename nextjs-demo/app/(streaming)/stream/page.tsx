import Image from 'next/image'
import { Suspense } from 'react'
import { AsyncComponent } from './components/AsyncComponent'

export default function Page() {
  return (
    <main className="flex min-h-screen flex items-center justify-evenly p-24">
      <Suspense fallback={<div> "Loading Comp 1"</div>}>
        <AsyncComponent wait={3000}></AsyncComponent>
      </Suspense>
      <Suspense fallback={<div> "Loading Comp 2"</div>}>
        <AsyncComponent wait={1000}></AsyncComponent>
      </Suspense>
    </main>
  )
}
