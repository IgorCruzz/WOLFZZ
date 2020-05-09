export const PriceFormat = value => {
  const Currency = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return Currency
}

export const Truncate = (value, size) => {
  const truncateValue = value.substr(0, size)

  if (truncateValue.length !== size) {
    return truncateValue
  }

  return `${truncateValue}...`
}
