import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import TravelForm from "./components/modals/TravelForm";
import Catalog from "./components/modals/Catalog";
import RealVirt from "./components/modals/RealVirt";

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
      
      <div className="pb-20 pt-28">
            <TravelForm />
          </div>
          <div className="pb-20 pt-28">
          <Catalog/>

          </div>
          <div className="pb-20 pt-28">
        Realidad Virtual 
        <p>Descubre el mundo desde la comodidad de tu hogar con nuestra exclusiva suscripción premium. Cada experiencia ha sido meticulosamente seleccionada para despertar tus sentidos y transportarte a destinos exóticos y emocionantes. Sumérgete en narrativas inmersivas y envolventes, creadas por expertos en cada campo, que te harán sentir como si estuvieras realmente allí.</p>

            <RealVirt />

            Hospedajes Y Servicios   
          </div>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          
          
          
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
        
      </Container>
    </ClientOnly>
  )
}

export default Home;

