"use client";

import { useState, useEffect } from "react";
import { Car } from "@/app/lib/finn-cars";

export default function AdminCarsPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshResult, setRefreshResult] = useState<{
    success: boolean;
    message: string;
    count?: number;
  } | null>(null);
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch cars on component mount
  useEffect(() => {
    async function fetchCars() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error(`Failed to fetch cars: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Det oppstod en feil ved henting av biler.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCars();
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setRefreshResult(null);

    try {
      const response = await fetch("/api/cars/refresh");

      if (!response.ok) {
        throw new Error(`Failed to refresh: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setRefreshResult({
          success: true,
          message: `Oppdatering vellykket! Hentet ${data.count} biler.`,
          count: data.count,
        });

        // Refresh the car list
        const carsResponse = await fetch("/api/cars");
        if (carsResponse.ok) {
          const carsData = await carsResponse.json();
          setCars(carsData);
        }
      } else {
        setRefreshResult({
          success: false,
          message: data.message || "Oppdatering feilet av ukjent årsak.",
        });
      }
    } catch (error) {
      console.error("Error refreshing cars:", error);
      setRefreshResult({
        success: false,
        message: "Det oppstod en feil under oppdatering av bildata.",
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Administrer biler</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Oppdater bildata</h2>
        <p className="mb-4 text-gray-600">
          Bildata hentes automatisk fra Finn.no når brukere besøker bilsiden. Du
          kan også manuelt oppdatere dataene ved å klikke på knappen nedenfor.
        </p>

        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={`px-4 py-2 rounded-md ${
            isRefreshing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isRefreshing ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Oppdaterer...
            </span>
          ) : (
            "Oppdater nå"
          )}
        </button>

        {refreshResult && (
          <div
            className={`mt-4 p-4 rounded-md ${
              refreshResult.success
                ? "bg-green-100 border border-green-400 text-green-700"
                : "bg-red-100 border border-red-400 text-red-700"
            }`}
          >
            <p>{refreshResult.message}</p>
            {refreshResult.success && refreshResult.count === 0 && (
              <p className="mt-2">
                Ingen biler ble funnet. Sjekk at Finn.no-annonsen er aktiv.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Gjeldende bildata</h2>

        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && !isLoading && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            <strong className="font-bold">Feil! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!isLoading && !error && cars.length === 0 && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-6">
            <strong className="font-bold">Ingen biler funnet! </strong>
            <span className="block sm:inline">
              Det er ingen biler i systemet for øyeblikket. Klikk på "Oppdater
              nå" for å hente biler fra Finn.no.
            </span>
          </div>
        )}

        {!isLoading && cars.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Tittel</th>
                  <th className="py-3 px-6 text-left">Pris</th>
                  <th className="py-3 px-6 text-left">År</th>
                  <th className="py-3 px-6 text-left">Drivstoff</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {cars.map((car) => (
                  <tr
                    key={car.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {car.id.substring(0, 8)}...
                    </td>
                    <td className="py-3 px-6 text-left">
                      <a
                        href={car.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {car.title}
                      </a>
                    </td>
                    <td className="py-3 px-6 text-left">{car.price}</td>
                    <td className="py-3 px-6 text-left">{car.year}</td>
                    <td className="py-3 px-6 text-left">{car.fuel}</td>
                    <td className="py-3 px-6 text-left">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          car.status === "sold"
                            ? "bg-red-200 text-red-800"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        {car.status === "sold" ? "Solgt" : "Tilgjengelig"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
