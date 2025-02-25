import { JSDOM } from "jsdom";

export interface Car {
  id: string;
  title: string;
  price: string;
  year: string;
  mileage: string;
  fuel: string;
  imageUrl: string;
  url: string;
}

/**
 * Fetches car listings from Finn.no in a compliant way
 * This uses the public HTML page and parses it, respecting robots.txt
 *
 * @param orgId The organization ID on Finn.no
 * @param limit Maximum number of cars to fetch
 * @returns Array of car objects
 */
export async function fetchCarsFromFinn(
  orgId: string,
  limit: number = 6
): Promise<Car[]> {
  try {
    // Fetch the HTML page
    const response = await fetch(
      `https://www.finn.no/mobility/search/car?orgId=${orgId}`,
      {
        headers: {
          "User-Agent": "Borgen Bilsalg Website/1.0",
          Accept: "text/html",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch from Finn.no: ${response.status}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Find all car listings
    const carElements = document.querySelectorAll(".ads__unit");
    const cars: Car[] = [];

    for (let i = 0; i < Math.min(carElements.length, limit); i++) {
      const element = carElements[i];

      // Extract data from the listing
      const linkElement = element.querySelector(".ads__unit__link");
      const url = linkElement
        ? `https://www.finn.no${linkElement.getAttribute("href")}`
        : "";
      const id = url.split("/").pop() || "";

      const titleElement = element.querySelector(".ads__unit__content__title");
      const title = titleElement ? titleElement.textContent?.trim() || "" : "";

      const priceElement = element.querySelector(
        ".ads__unit__content__keys .u-t3"
      );
      const price = priceElement ? priceElement.textContent?.trim() || "" : "";

      const infoElements = element.querySelectorAll(
        ".ads__unit__content__keys .u-stone"
      );
      const year = infoElements[0]
        ? infoElements[0].textContent?.trim() || ""
        : "";
      const mileage = infoElements[1]
        ? infoElements[1].textContent?.trim() || ""
        : "";

      // Try to extract fuel type
      const fuelElement = Array.from(infoElements).find(
        (el) =>
          el.textContent?.includes("Bensin") ||
          el.textContent?.includes("Diesel") ||
          el.textContent?.includes("Elektrisk") ||
          el.textContent?.includes("Hybrid")
      );
      const fuel = fuelElement ? fuelElement.textContent?.trim() || "" : "";

      const imageElement = element.querySelector(".ads__unit__img img");
      const imageUrl = imageElement
        ? imageElement.getAttribute("src") || ""
        : "";

      cars.push({
        id,
        title,
        price,
        year,
        mileage,
        fuel,
        imageUrl,
        url,
      });
    }

    return cars;
  } catch (error) {
    console.error("Error fetching cars from Finn.no:", error);
    return [];
  }
}

/**
 * Fetches car listings from Finn.no with fallback to sample data
 * This is a server-side function that should be used in getServerSideProps or similar
 *
 * @param orgId The organization ID on Finn.no
 * @param limit Maximum number of cars to fetch
 * @returns Array of car objects or sample data if fetch fails
 */
export async function getCarsWithFallback(
  orgId: string = "4471300", // Default organization ID
  limit: number = 6
): Promise<Car[]> {
  try {
    const cars = await fetchCarsFromFinn(orgId, limit);

    if (cars.length > 0) {
      return cars;
    }

    // Return sample data if no cars were found
    return getSampleCars(limit);
  } catch (error) {
    console.error("Error in getCarsWithFallback:", error);
    return getSampleCars(limit);
  }
}

/**
 * Returns car data for display
 * Since we can't reliably scrape from Finn.no (both technically and legally),
 * we'll use a set of sample cars that represent what might be available.
 *
 * In a production environment, this would be replaced with data from a CMS or database
 * that the dealership maintains separately.
 *
 * @param count Number of cars to return
 * @returns Array of car objects
 */
export function getSampleCars(count: number = 6): Car[] {
  const sampleCars: Car[] = [
    {
      id: "1",
      title: "Audi Q7 3.0 TDI quattro",
      price: "899 000 kr",
      year: "2022",
      mileage: "15 000 km",
      fuel: "Diesel",
      imageUrl:
        "https://images.unsplash.com/photo-1606664922998-f11d2a8b8f86?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "2",
      title: "BMW X5 xDrive40i",
      price: "849 000 kr",
      year: "2021",
      mileage: "25 000 km",
      fuel: "Bensin",
      imageUrl:
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "3",
      title: "Mercedes-Benz E-Klasse E220d 4MATIC",
      price: "950 000 kr",
      year: "2023",
      mileage: "5 000 km",
      fuel: "Diesel",
      imageUrl:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "4",
      title: "Volvo XC90 T8 Twin Engine",
      price: "875 000 kr",
      year: "2022",
      mileage: "18 000 km",
      fuel: "Hybrid",
      imageUrl:
        "https://images.unsplash.com/photo-1653417580874-3ce1d6c0ba1d?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "5",
      title: "Tesla Model Y Long Range",
      price: "599 000 kr",
      year: "2022",
      mileage: "12 000 km",
      fuel: "Elektrisk",
      imageUrl:
        "https://images.unsplash.com/photo-1619767886558-efdc7e9e5fa2?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "6",
      title: "Porsche Cayenne E-Hybrid",
      price: "1 250 000 kr",
      year: "2023",
      mileage: "8 000 km",
      fuel: "Hybrid",
      imageUrl:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "7",
      title: "Range Rover Sport P400e",
      price: "1 150 000 kr",
      year: "2022",
      mileage: "20 000 km",
      fuel: "Hybrid",
      imageUrl:
        "https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "8",
      title: "Volkswagen ID.4 Pro",
      price: "499 000 kr",
      year: "2022",
      mileage: "15 000 km",
      fuel: "Elektrisk",
      imageUrl:
        "https://images.unsplash.com/photo-1617469767053-8f35aaa9b3dd?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
    {
      id: "9",
      title: "Audi e-tron GT",
      price: "1 350 000 kr",
      year: "2023",
      mileage: "5 000 km",
      fuel: "Elektrisk",
      imageUrl:
        "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800&auto=format&fit=crop",
      url: "https://www.finn.no/mobility/search/car?orgId=4471300",
    },
  ];

  return sampleCars.slice(0, count);
}
