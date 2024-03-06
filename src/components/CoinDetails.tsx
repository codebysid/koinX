import React, { FC } from 'react'

type TCoinDetails = {
  low24h: number,
  high24h: number,
  change24h: number
}

const CoinDetails: FC<TCoinDetails> = ({ low24h, high24h, change24h }) => {
  return (
    <div>
      <h1>Performance</h1>
      <div>

      </div>
    </div>
  )
}

export default CoinDetails
