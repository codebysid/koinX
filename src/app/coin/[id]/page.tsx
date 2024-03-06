import CoinHeader from '@/components/CoinHeader'
import { TDynamicPageProps } from '@/types/props'
import React, { FC } from 'react'

const DynamicPageId: FC<TDynamicPageProps> = async ({ params }) => {
  const coin = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params.id.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en`)
  const coinData = await coin.json()
  return (
    <div className='px-4 w-full'>
      {
        coinData.length > 0 ?
          <CoinHeader coinData={coinData[0]} /> : <h1>Coingecko limit exceeds, check back in 2 minutes</h1>
      }
    </div>
  )
}

export default DynamicPageId
