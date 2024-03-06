import React, { FC } from 'react'
import Logo from './Logo'
import UsdPrice from './UsdPrice';
import InrPrice from './InrPrice';
import { Separator } from './ui/separator';
import CoinGraph from './CoinGraph';
import Navbar2 from './Navbar2';
import CoinDetails from './CoinDetails';

type TCoin = {
  current_price: number,
  name: string,
  symbol: string,
  image: string,
  price_change_percentage_24h_in_currency: number,
  market_cap_rank: number,
}
type TCoinHeader = {
  coinData: TCoin
}

const CoinHeader: FC<TCoinHeader> = ({ coinData }) => {
  console.log(coinData)
  return (
    <div className='flex flex-col gap-2 w-full'>
      <div className='w-full flex flex-row items-center gap-4 font-bold'>
        <Logo url={coinData?.image} />
        <h1 className='text-2xl'>{coinData?.name}</h1>
        <span className='text-lg text-muted-foreground'>{coinData?.symbol?.toUpperCase()}</span>
        {
          coinData.market_cap_rank &&
          <span className='bg-muted-foreground p-2 rounded-xl text-secondary ml-4'>RANK #{coinData?.market_cap_rank}</span>
        }
      </div>
      <div className='flex flex-col gap-2 bg-milkyWhite rounded border border-borderGray p-4 w-full'>
        <UsdPrice current_price={coinData.current_price} price_change_percentage_24h_in_currency={coinData.price_change_percentage_24h_in_currency} />
        <InrPrice current_price={coinData.current_price} />
        <CoinGraph />
      </div>
      <Navbar2 />
      <div>
        <CoinDetails />
      </div>
    </div>
  )
}

export default CoinHeader
