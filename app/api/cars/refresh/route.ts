import { NextResponse } from "next/server";
import { fetchCarsFromFinn, getCarsWithFallback } from "@/app/lib/finn-cars";
import { revalidatePath } from "next/cache";

// Disable caching for this route
export const dynamic = "force-dynamic";

/**
 * GET handler for /api/cars/refresh
 * Manually triggers a refresh of car data from Finn.no
 * This can be called by a cron job or manually to update the data
 *
 * Optional query parameters:
 * - orgId: The organization ID on Finn.no (defaults to 4471300)
 * - apiKey: Optional API key for protection (not implemented yet)
 */
export async function GET(request: Request) {
  const startTime = Date.now();

  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const orgId = searchParams.get("orgId") || "4471300";

    // Optional: Add API key validation for security
    // const apiKey = searchParams.get("apiKey");
    // if (!apiKey || apiKey !== process.env.REFRESH_API_KEY) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // Fetch cars from Finn.no
    const cars = await getCarsWithFallback();

    // Revalidate the cars path to update any cached data
    revalidatePath("/cars");

    const endTime = Date.now();
    const duration = `${((endTime - startTime) / 1000).toFixed(2)}s`;

    return NextResponse.json({
      success: true,
      count: cars.length,
      duration,
      timestamp: new Date().toISOString(),
      message:
        cars.length > 0
          ? `Successfully fetched ${cars.length} cars in ${duration}`
          : "No cars found. Please check that your Finn.no listing is active.",
    });
  } catch (error) {
    console.error("Error refreshing cars:", error);

    return NextResponse.json(
      {
        success: false,
        count: 0,
        duration: `${((Date.now() - startTime) / 1000).toFixed(2)}s`,
        timestamp: new Date().toISOString(),
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
