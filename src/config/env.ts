export const env = {
  get BASE_URL() {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error(
        "❌ Missing NEXT_PUBLIC_API_URL in environment variables"
      );
    }
    return process.env.NEXT_PUBLIC_API_URL;
  },
};
