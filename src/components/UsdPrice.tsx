import React, { FC } from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons';
import { formatCurrency } from '@/utils/currency';

type TUsdPrice = {
  current_price: number,
  price_change_percentage_24h_in_currency: number
}

const UsdPrice: FC<TUsdPrice> = ({ current_price, price_change_percentage_24h_in_currency }) => {
  return (
    <div className='flex flex-row items-center justify-between font-bold'>
      <p className='text-3xl'>{formatCurrency(current_price, "USD")}</p>
      <div className='flex flex-row items-center gap-4'>
        {
          price_change_percentage_24h_in_currency && <div className='flex flex-row items-center gap-2 text-sm'>
            <p className='bg-success text-success-dark pr-2 rounded flex flex-row items-center'><TriangleUpIcon className='h-5 w-5' />{price_change_percentage_24h_in_currency?.toFixed(2)}%</p>
            <p className='text-muted-foreground'>(24H)</p>
          </div>
        }
      </div>
    </div>

  )
}

export default UsdPrice
