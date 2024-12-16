import { usePathname } from 'next/navigation';
import Navbar from '../navbar/Navbar';
import NavbarBoltchem from '../navbarBoltchem/NavbarBoltchem';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isProductsPage = pathname.startsWith('/products/boltchem');
    const NavbarComponent = isProductsPage ? NavbarBoltchem : Navbar;

    return (
        <div>
            <NavbarComponent />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
