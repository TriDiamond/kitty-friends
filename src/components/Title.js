import { memo } from 'react'

const Title = memo(({ context }) => {
  return (
    <h1 className="main-title text-5xl text-gray-100 mb-8 mt-6">{context}</h1>
  )
})

export default Title
