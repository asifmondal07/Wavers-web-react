import Header from './component/Header'

import { Outlet } from 'react-router-dom'


function App() {
  
  return (
    <>
      <Header/>
      <main className="bg-blue-200 shadow-md sticky top-0 z-50">
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center h-100'>
            <Outlet/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
