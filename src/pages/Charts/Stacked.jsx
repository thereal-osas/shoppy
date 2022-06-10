import React from 'react'

import { ChartsHeader, Stacked as StackedChart } from '../../components'

const Stacked = () => (
  <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <ChartsHeader category='Chart' title='Stacked' />
    <p className='text-center text-xl dark:text-gray-200 mb-10'>
      Revenue Breakdown
    </p>
    <div className='w-full'>
      <StackedChart />
    </div>
  </div>
)

export default Stacked
