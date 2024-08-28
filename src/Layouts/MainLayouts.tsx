import MobileNavigations from "components/navigation/mobileNavigations";
import { useEffect } from "react";

type PropType = {
    children: React.ReactNode,
    title?: string
}
const MainLayout = (prop: PropType) => {

    const { children, title } = prop

    useEffect(() => {
        document.title = title ?? 'Booking App'
    });

    return <main className="mb-[10rem]">
        {children}

        <MobileNavigations />
    </main>;
};

export default MainLayout;
