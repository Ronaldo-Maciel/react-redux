import React from 'react'

const SearchCep = ({ cep, logradouro, bairro, localidade, uf, handleSubmit, error }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="cep" />
        <button type="submit"> Buscar Endereço  </button>
      </form>
      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>Endereço</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {cep}
            </td>
            <td>
              {logradouro}
            </td>
            <td>
              {bairro}
            </td>
            <td>
              {localidade}
            </td>
            <td>
              {uf}
            </td>
          </tr>
        </tbody>
      </table>
      {error && (
        <p>{error}</p>
      )}
    </>
  )
}

export default SearchCep
