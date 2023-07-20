import React from 'react'

export const AsyncComponent = async ({
  wait,
  label = 'I have waited:',
}: {
  wait: number
  label: string
}) => {
  const someFakeData: number = await new Promise((resolve) =>
    setTimeout(() => resolve(wait), wait)
  )
  return (
    <div>
      {' '}
      {label} {someFakeData} ms
    </div>
  )
}
