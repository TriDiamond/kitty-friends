import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import Title from '../components/Title'

import { setSearchField, fetchKitties } from '../store/actions'

// Set state mapper to map out the state into the props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchKitties.searchField,
    kitties: state.fetchKitties.kitties,
    isPending: state.fetchKitties.isPending,
    error: state.fetchKitties.error
  }
}

// Set dispatch actions to change state
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onFetchKitties: () => dispatch(fetchKitties)
  }
}

const App = (props) => {
  const { searchField, onSearchChange, kitties, isPending, onFetchKitties } =
    props

  // Mounted life cycle
  useEffect(() => {
    onFetchKitties()
  }, [onFetchKitties])

  const filteredKitties = kitties.filter((kitty) => {
    return kitty.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <>
      <div className="max-w-4xl lg:max-w-6xl mx-auto pb-12">
        <div className="flex flex-col justify-center items-center my-6">
          {isPending ? (
            <Title context="Loading..." />
          ) : (
            <>
              <Title context="Kitty Friends" />
              <SearchBox searchChange={onSearchChange} />
            </>
          )}
        </div>
        <Scroll>
          <ErrorBoundry>
            <CardList data={filteredKitties} />
          </ErrorBoundry>
        </Scroll>
        <div className="flex flex-col items-center mt-10 text-gray-400 text-lg">
          <p>
            Made with 💎 by
            <a href="https://github.com/TriDiamond"> Tridiamond</a>
          </p>
          <p>Build with React + Redux</p>
        </div>
      </div>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
