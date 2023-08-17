import React from 'react'
import { LineChart } from './components/chartfirst/LineChart'
import { BarGraph } from './components/chartsecond/BarGraph'
import { Pie } from 'react-chartjs-2'
import { PieChart } from './components/chartthird/PieChart'

export function App() {
  return (
    <>
    <LineChart/>
    <BarGraph heading="AMBIENT" color="black"/>
    <BarGraph heading="UNHEALTHY" color="green"/>
    <PieChart/>
    </>
  )
}

