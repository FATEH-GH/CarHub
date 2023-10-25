"use client";

import { fetchCars } from "@/utils";
import { SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import Hero from "@/components/Hero";
import { isContext } from "vm";
import { fuels, yearsOfProduction } from "@/constants";
import { useState, useEffect } from "react";
import Image from "next/image";
import { RiLoaderFill } from "react-icons/ri";

export default function Home() {
  const [allCars, setallCars] = useState([]);
  const [loading, setloading] = useState(false);

  const [manufacturer, setmanufacturer] = useState("");
  const [model, setModel] = useState("");

  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setloading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setallCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 padding-x padding-y max-width
      "
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setmanufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter setFilter={setFuel} title="fuel" options={fuels} />
            <CustomFilter
              setFilter={setYear}
              title="year"
              options={yearsOfProduction}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <RiLoaderFill
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold "> NO CARS!!!!!!!!</h2>
          </div>
        )}
      </div>
    </main>
  );
}
