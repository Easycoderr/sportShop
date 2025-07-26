export async function getData() {
  const API_KEY = "vujAkTvoObhoYiA0k5pbbcTtV5OFJD";
  try {
    const response = await fetch(
      `https://dinarapi.hediworks.site/api/get-price?id=8&api_token=${API_KEY}`
    );
    if (response) {
      return response.json();
    } else {
      throw error;
    }
  } catch (error) {
    console.error(
      "Same thing wrong please check your connection and try again."
    );
  }
}
