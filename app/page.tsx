import { Hero, SearchBar, SliderComponent, CustomFilter, CarCard } from "@/components";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchCars} from '@/utilis/index'
import Link from "next/link"

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !allCars || !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <SliderComponent /> */}
      
      <div className="padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars Hub</h1>
          <p className="item-centre">Explore as per your Needs</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="year" />
            <CustomFilter title="Device Type" />
          </div>
          {
            !isDataEmpty ? (
              <section>
                <div className="home__cars-wrapper">
                  {allCars?.map((car) => (
                    car && <CarCard car={car} />
                  ))}
                </div>
              </section>
            ) : (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                <p>Sorry, no cars found.</p>
              </div>
            )
          }
        </div>
      </div>
    </main>
  );
}



