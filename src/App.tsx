import './App.css'
import AssetManagement from './asset/AssetManagement'
import ComponentManagement from './components/ComponentManagement'
import MainLayout from './layouts/MainLayouts'
import MobileNavigations from './layouts/mobileNavigations'

function App() {

  return (
    <MainLayout>
      <div className="grid grid-cols-2 gap-5 ml-5 mt-5 mr-5">
        <div className="col-span-1">
          <h5 className="text-xl">
            Hai
          </h5>
          <h3 className='text-2xl'>
            Adhi Nugroho
          </h3>
        </div>
        <div className="col-span-1">
          <div className="flex justify-end mt-4">
            <i className='bx bx-bell text-[2rem]'></i>
          </div>
        </div>
      </div>

      <main className='p-4 overflow-hidden mt-5'>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3">
            <div className="">
              <ComponentManagement.MainMenuCard title='Cabang Terdekat' icons='home-alt' active />
            </div>
            <div className="">
              <ComponentManagement.MainMenuCard title='Cabang Populer' icons='home-alt' />
            </div>
          </div>
        </div>


        <div className="mt-7">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h5 className='text-xl font-bold mb-3'>
                Cabang Terdekat
              </h5>
            </div>
            <div className="col-span-1">
              <div className="flex justify-end">
                <p className='text-lg text-blue-600'>
                  Lihat semua
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3">
            <div className="">
              <ComponentManagement.DisplayCard
                nameRuangan='Ruangan A'
                image={AssetManagement.hotel}
                star={4.5}
                harga={100000}
                type="hari"
                desc='Lorem ipsum heheh' />
            </div>
            <div className="">
              <ComponentManagement.DisplayCard
                nameRuangan='Ruangan b'
                image={AssetManagement.hotel}
                star={4.5}
                harga={100000}
                type="hari"
                desc='Lorem ipsum heheh' />
            </div>

          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h5 className='text-xl font-bold mb-3'>
                Populer Cabang
              </h5>
            </div>
            <div className="col-span-1">
              <div className="flex justify-end">
                <p className='text-lg text-blue-600'>
                  Lihat semua
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1   w-full">
          <div className="col-span-1 mb-5">
            <ComponentManagement.PopulerBranch type='Jam' fee={100000} title='Rungan 1' image={AssetManagement.hotel} locations='Banjarnegara,Indonesia'/>
          </div>
          <div className="col-span-1 mb-5">
            <ComponentManagement.PopulerBranch type='Jam' fee={100000} title='Rungan 1' image={AssetManagement.hotel} locations='Banjarnegara,Indonesia'/>
          </div>
          <div className="col-span-1">
            <ComponentManagement.PopulerBranch type='Jam' fee={100000} title='Rungan 1' image={AssetManagement.hotel} locations='Banjarnegara,Indonesia'/>
          </div>
        </div>
      </main>

      <MobileNavigations />
    </MainLayout>
  )
}

export default App
