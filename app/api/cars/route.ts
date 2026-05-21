import { NextResponse } from "next/server";
import { getCarsFromRedis } from "@/app/lib/redis";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const cachedCars = await getCarsFromRedis();

    if (Array.isArray(cachedCars)) {
      return NextResponse.json(cachedCars, {
        headers: {
          "x-cars-source": "redis",
        },
      });
    }

    return NextResponse.json([], {
      headers: {
        "x-cars-source": "redis-empty",
      },
    });
  } catch (error) {
    console.error("Error in cars API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch cars" },
      { status: 500 }
    );
  }
}
