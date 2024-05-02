import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Link from "next/link";


interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <div className="text-2xl font-bold">
        <Link href="/">
          SmartJourney
        </Link>
      </div>
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/hospedaje">
            Hospedaje
          </Link>
        </li>
        <li>
          <Link href="/servicios">
            Servicios
          </Link>
        </li>
        <li>
          <a href="./images/RealidadVirtual.html" target="_blank" rel="noopener noreferrer">Realidad Aumentada</a>
        </li>
        <li>       
        <a href="./images/AcercaDe.html" target="_blank" rel="noopener noreferrer">Acerca de</a>
          
        </li>
        <li>
          <Link  href="/pagos">
            Pagos
          </Link>
        </li>
      </ul>
      
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>
    <Categories />
  </div>
  );
}


export default Navbar;