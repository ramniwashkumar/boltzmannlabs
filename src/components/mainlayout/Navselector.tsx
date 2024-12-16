'use client';

import { usePathname } from 'next/navigation';
import NavbarBoltchem from '../navbarBoltchem/NavbarBoltchem';
import Navbar from '../navbar/Navbar';
import NavbarClinbolt from '../navbarClinbolt/NavbarClinbolt';
import NavbarBoltbio from '../navbarBoltbio/NavbarBoltbio';

const NavSelector: React.FC = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/products/boltchem')) {
    return <NavbarBoltchem />;
  }else if(pathname?.startsWith('/products/clinbolt')){
    return <NavbarClinbolt/>
  }else if(pathname?.startsWith('/products/boltbio')){
    return<NavbarBoltbio/>
  }

  return <Navbar />;
};

export default NavSelector;
