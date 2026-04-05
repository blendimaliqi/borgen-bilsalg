import { NextResponse } from "next/server";
import { getCarsFromRedis } from "@/app/lib/redis";
import { getCarsWithFallback } from "@/app/lib/finn-cars";

// Cache for 5 minutes — Redis data is updated every 30 min by cron
export const revalidate = 300;

export async function GET() {
  try {
    // Try Redis first (populated by external cron job)
    const cachedCars = await getCarsFromRedis();
    if (cachedCars && Array.isArray(cachedCars) && cachedCars.length > 0) {
      return NextResponse.json(cachedCars);
    }

    // Fallback to live scraping if Redis is empty (e.g. first run)
    console.log("Redis empty, falling back to live scraping");
    const cars = await getCarsWithFallback();
    return NextResponse.json(cars);
  } catch (error) {
    console.error("Error in cars API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch cars" },
      { status: 500 }
    );
  }
}
