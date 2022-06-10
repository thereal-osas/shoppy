import React from 'react'

import { pieChartData } from '../../data/dummy'
import { ChartsHeader, Pie as PieChart } from '../../components'

const Pie = () => (
  <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <ChartsHeader category='Chart' title='Pie' />
    <p className='text-center text-xl dark:text-gray-200 mb-10'>
      Project Cost Breakdown
    </p>
    <div className='w-full'>
      <PieChart
        id='chart-pie'
        data={pieChartData}
        legendVisiblity
        height='full'
      />
    </div>
  </div>
)

export default Pie
