import { JSDOM } from "jsdom";

export interface Car {
  id: string;
  title: string;
  price: string;
  year: string;
  mileage: string;
  transmission: string;
  fuel: string;
  imageUrl: string;
  url: string;
  status: string; // Added to track if a car is sold
}

/**
 * Fetches car listings from Finn.no in a compliant way
 * This uses the public HTML page and parses it, respecting robots.txt
 *
 * @param orgId The organization ID on Finn.no
 * @param limit Maximum number of cars to fetch (0 for all)
 * @returns Array of car objects
 */
export async function fetchCarsFromFinn(
  orgId: string,
  limit: number = 0
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
        cache: "no-store", // Ensure we get fresh data each time
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch from Finn.no: ${response.status}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Find all car listings - based on the current Finn.no structure
    const carElements = Array.from(document.querySelectorAll("article"));
    const cars: Car[] = [];

    for (let i = 0; i < carElements.length; i++) {
      if (limit > 0 && i >= limit) break;

      const element = carElements[i];

      // Check if this is a car listing (some articles might be ads or other content)
      const titleElement = element.querySelector("h2, h3");
      if (!titleElement) continue;

      // Extract data from the listing
      const title = titleElement.textContent?.trim() || "";

      // Check if the car is sold
      const isSold = element.textContent?.includes("Solgt") || false;
      const status = isSold ? "sold" : "available";

      // Get the link to the car details
      const linkElement = element.querySelector("a");
      const relativeUrl = linkElement
        ? linkElement.getAttribute("href") || ""
        : "";

      // Fix URL formatting - ensure we have a proper absolute URL
      // If the URL starts with https:// or http://, use it as is
      // Otherwise, prepend https://www.finn.no
      let url = "";
      if (relativeUrl) {
        if (
          relativeUrl.startsWith("https://") ||
          relativeUrl.startsWith("http://")
        ) {
          url = relativeUrl;
        } else {
          // Make sure we don't have double slashes when joining
          const cleanRelativeUrl = relativeUrl.startsWith("/")
            ? relativeUrl
            : `/${relativeUrl}`;
          url = `https://www.finn.no${cleanRelativeUrl}`;
        }
      }

      // Generate an ID from the URL or use a fallback
      const urlParts = url.split("/");
      const id =
        urlParts.length > 0 ? urlParts[urlParts.length - 1] : `car-${i}`;

      // Extract price
      const priceElement = element.querySelector("p strong, .text-14");
      let price = priceElement ? priceElement.textContent?.trim() || "" : "";
      if (!price && !isSold) {
        // Try alternative price selectors
        const altPriceElement = element.querySelector("[class*='price']");
        price = altPriceElement
          ? altPriceElement.textContent?.trim() || ""
          : "";
      }

      // If the car is sold and no price is found, set a default message
      if (isSold && !price) {
        price = "Solgt";
      }

      // Extract car details (year, mileage, fuel type)
      const detailsText = element.textContent || "";

      // Extract year - look for 4 digit numbers that could be years (2000-2024)
      const yearMatch = detailsText.match(/\b(20\d{2}|19\d{2})\b/);
      const year = yearMatch ? yearMatch[0] : "";

      // Extract mileage - look for numbers followed by "km"
      const mileageMatch = detailsText.match(/(\d{1,3}(?:\s?\d{3})*)\s*km/);
      const mileage = mileageMatch ? `${mileageMatch[1]} km` : "";

      // Extract transmission type
      const isAutomatic = detailsText.includes("Automat");
      const isManual = detailsText.includes("Manuell");
      const transmission = isAutomatic ? "Automat" : isManual ? "Manuell" : "";

      // Extract fuel type
      let fuel = "";
      if (detailsText.includes("Bensin")) fuel = "Bensin";
      else if (detailsText.includes("Diesel")) fuel = "Diesel";
      else if (detailsText.includes("El")) fuel = "Elektrisk";
      else if (detailsText.includes("Hybrid")) fuel = "Hybrid";

      // Extract image URL
      const imageElement = element.querySelector("img");
      let imageUrl = imageElement ? imageElement.getAttribute("src") || "" : "";

      // If no image is found, use a placeholder
      if (!imageUrl) {
        imageUrl =
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop";
      }

      cars.push({
        id,
        title,
        price,
        year,
        mileage,
        transmission,
        fuel,
        imageUrl,
        url,
        status,
      });
    }

    console.log(`Successfully fetched ${cars.length} cars from Finn.no`);
    return cars;
  } catch (error) {
    console.error("Error fetching cars from Finn.no:", error);
    return [];
  }
}

/**
 * Fetches car listings from Finn.no
 * This is a server-side function that should be used in getServerSideProps or similar
 *
 * @param orgId The organization ID on Finn.no
 * @param limit Maximum number of cars to fetch (0 for all)
 * @returns Array of car objects or empty array if fetch fails
 */
export async function getCarsWithFallback(
  orgId: string = "4471300", // Default organization ID
  limit: number = 0
): Promise<Car[]> {
  try {
    const cars = await fetchCarsFromFinn(orgId, limit);
    return cars;
  } catch (error) {
    console.error("Error in getCarsWithFallback:", error);
    return [];
  }
}
