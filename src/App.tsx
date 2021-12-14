import React from 'react'
import { RecoilRoot, } from 'recoil'
import { MainView } from './components/mainView'

export const App = () => {
  return (
    <RecoilRoot>
      <MainView />
    </RecoilRoot>
  )
}

export default App
