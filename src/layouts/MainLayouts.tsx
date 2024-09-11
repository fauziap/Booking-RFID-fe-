import ComponentManagement from "components/ComponentManagement";
import useDocumentTitle from "hooks/useDocumentTitle";

interface MainLayoutInterface {
    children: React.ReactNode,
    documentTitle?: string;
    headerTitle?: string;
    headerLink?: string;
}
const MainLayout = (prop: MainLayoutInterface) => {
    const { children,
        documentTitle = 'Booking App',
        headerTitle = '',
        headerLink = '/' 
    } = prop;

    useDocumentTitle(documentTitle);

    return (
        <main className="mb-[10rem] dark:bg-black bg-white">
            {headerTitle && <ComponentManagement.Header link={headerLink} title={headerTitle} />}
            {children}
            <ComponentManagement.MobileNavigations />
        </main>
    );
};

export default MainLayout;
