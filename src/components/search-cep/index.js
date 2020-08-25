import React, { memo } from 'react'
import SearchCep from './search-cep'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAddress } from '../../redux-flow/reducers/address/actions-creators'

const SearchCepContainer = memo(() => {
  const cepData = useSelector(state => state.address)
  const dispatch = useDispatch()

  const searchCep = e => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }

  return (
    <SearchCep 
      {...cepData}
      handleSubmit={searchCep}
    /> 
  )
})

export default SearchCepContainer
