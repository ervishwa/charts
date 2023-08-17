import React from 'react'
import { LineChart } from './components/chartfirst/LineChart'
import { BarGraph } from './components/chartsecond/BarGraph'

export function App() {
  return (
    <>
    <LineChart/>
    <BarGraph heading="AMBIENT"/>
    <BarGraph heading="UNHEALTHY"/>
    </>
  )
}

