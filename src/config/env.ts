export const env = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
};

if (!env.BASE_URL && process.env.NODE_ENV === "production") {
  throw new Error("❌ Missing NEXT_PUBLIC_API_URL in environment variables");
}
