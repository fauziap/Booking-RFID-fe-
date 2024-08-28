import { useLocation, useNavigate } from 'react-router-dom';

const MobileNavigations = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (pathname: string) => location.pathname === pathname;

    return (
        <div className="fixed w-screen bottom-0 bg-gray-300 p-3">
            <div className="grid grid-cols-4 gap-5">
                <button  className={`col-span-1 flex justify-center ${isActive('/') ? 'text-blue-500 font-semibold' : ''}`}
                    onClick={() => navigate('/')}>
                    <i className={`bx bx-home-alt text-2xl ${isActive('/') ? 'text-blue-500' : 'text-black-400'} font-semibold`} />
                    <span className={`ml-2 mt-1 ${isActive('/') ? 'text-blue-500 font-semibold' : 'hidden'}`}>
                        Home
                    </span>
                </button>
                <button className={`col-span-1 flex justify-center ${isActive('/detail') ? 'text-blue-500 font-semibold' : ''}`}
                    onClick={() => navigate('/detail')}
                >
                    <i className={`bx bx-calendar text-2xl ${isActive('/detail') ? 'text-blue-500' : ''}`} />
                </button>
                <button  className={`col-span-1 flex justify-center ${isActive('/ttes-profile ') ? 'text-blue-500 font-semibold' : ''}`}
                    onClick={() => navigate('/ttes-profile ')}>
                    <i className={`bx bx-heart text-2xl ${isActive('/ttes-profile') ? 'text-blue-500' : ''}`} />
                </button>
                <button className={`col-span-1 flex justify-center ${isActive('/profile') ? 'text-blue-500 font-semibold' : ''}`}
                    onClick={() => navigate('/profile')}>
                    <i className={`bx bx-user text-2xl ${isActive('/profile') ? 'text-blue-500' : ''}`} />
                    <span className={`ml-2 mt-1 ${isActive('/profile') ? 'text-blue-500 font-semibold' : 'hidden'}`}>
                        Profile
                    </span>
                </button>
            </div>
        </div>
    )
}

export default MobileNavigations;
