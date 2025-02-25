import { NextResponse } from "next/server";
import { getCarsWithFallback } from "@/app/lib/finn-cars";

// Set revalidation time to 1 hour (3600 seconds)
export const revalidate = 3600;

/**
 * GET handler for /api/cars
 * Fetches car listings from Finn.no and returns them as JSON
 *
 * Optional query parameters:
 * - orgId: The organization ID on Finn.no (defaults to 4471300)
 * - limit: Maximum number of cars to fetch (0 for all)
 * - apiKey: Optional API key for protection (not implemented yet)
 */
export async function GET() {
  try {
    // Get cars with fallback
    const cars = await getCarsWithFallback();

    // Return the cars array directly
    return NextResponse.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch cars",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
