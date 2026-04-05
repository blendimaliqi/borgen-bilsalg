import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function getCarsFromRedis() {
  try {
    const cars = await redis.get("cars");
    if (!cars) return null;
    // Upstash auto-parses JSON, so this may already be an array
    if (typeof cars === "string") {
      return JSON.parse(cars);
    }
    return cars;
  } catch (error) {
    console.error("Error reading from Redis:", error);
    return null;
  }
}
