async function getCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return await response.json()
  } catch (e) {
    throw new Error('Falha ao consultar CEP!');
  }
}

export default getCep