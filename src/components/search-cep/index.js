import React, { useState, memo } from 'react'
import SearchCep from './search-cep'

const SearchCepContainer = memo(() => {
  const [cepData, setCepData] = useState({
    bairro: '',
    cep: '',
    complemento: '',
    gia: '',
    ibge: '',
    localidade: '',
    logradouro: '',
    uf: '',
    unidade: '',
    error: '',
  })

  const getCep = async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return await response.json()
    }
  }

  const searchCep = e => {
    e.preventDefault()
    getCep(e.target.cep.value)
      .then((data) => setCepData(data))
      .catch(e => {
        console.log(e)
        setCepData({...cepData, error: 'CEP não encontrado!'})
      })
  }

  return (
    <SearchCep 
      {...cepData}
      handleSubmit={searchCep}
    /> 
  )
})

export default SearchCepContainer
