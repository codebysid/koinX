import { usdToInr } from '@/utils/currency'
import React, { FC } from 'react'

type TInrPrice = {
  current_price: number
}

const InrPrice: FC<TInrPrice> = ({ current_price }) => {
  return (
    <span className='text-xl'>{usdToInr(current_price)}</span>
  )
}

export default InrPrice
