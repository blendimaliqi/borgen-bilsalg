import { NextResponse } from "next/server";
import { getCarsFromRedis } from "@/app/lib/redis";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

/**
 * GET handler for /api/cars/refresh
 * Checks Redis for latest data and revalidates the cache.
 * The actual scraping is done by the external cron job.
 */
export async function GET() {
  const startTime = Date.now();

  try {
    const cars = await getCarsFromRedis();

    // Revalidate the cars path to pick up latest Redis data
    revalidatePath("/cars");

    const endTime = Date.now();
    const duration = `${((endTime - startTime) / 1000).toFixed(2)}s`;

    const count = Array.isArray(cars) ? cars.length : 0;

    return NextResponse.json({
      success: true,
      count,
      duration,
      timestamp: new Date().toISOString(),
      message: count > 0
        ? `Found ${count} cars in cache (${duration})`
        : "No cars in cache. Waiting for cron job to populate data.",
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
