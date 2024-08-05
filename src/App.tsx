import './App.css'
import MainLayout from './layouts/mainLayouts'
import MobileNavigations from './layouts/mobileNavigations'

function App() {

  return (
    <MainLayout>
      <div className="p-3">
        <h5 className="text-xl">
          Hai, Selamat Datang
        </h5>
        <h3>
          Nama Pengguna
        </h3>
      </div>

      <MobileNavigations />
    </MainLayout>
  )
}

export default App
