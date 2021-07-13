import { memo } from 'react'

const SearchBox = memo(({ searchChange }) => {
  return (
    <>
      <input
        className="inline-flex p-3 rounded-lg text-gray-300 border-2 border-gray-800 w-full md:w-2/3 lg:w-1/3 focus:outline-none focus:ring focus:border-gray-800 bg-gray-700"
        type="search"
        placeholder="Search for a kitty..."
        onChange={searchChange}
      />
    </>
  )
})

export default SearchBox
