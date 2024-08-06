import MobileNavigations from "../components/mobileNavigations";
import MainLayout from "../Layouts/MainLayouts";

function Home() {
  return (
    <MainLayout>
      <div className="p-3">
        <h5 className="text-xl">Hai, Selamat Datang</h5>
        <h3>Nama Pengguna</h3>
      </div>
      <MobileNavigations />
    </MainLayout>
  );
}

export default Home;
