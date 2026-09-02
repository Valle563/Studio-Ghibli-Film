import { isMovie, type ApiState } from "../types/movie";

type ReactSet = (s: ApiState) => void;

export async function getMovies(setApiState: ReactSet): Promise<void> {
  const url = "https://ghibliapi.vercel.app/films";
  
  try {
    setApiState({ status: "loading" });
    const response = await fetch(url);

    if (response.ok) {
      const data: unknown = await response.json();

      if (typeof data !== "object" || data === null || !(data instanceof Array))
        throw new Error("Datan är inte en lista.");

      if (!data.every((item) => isMovie(item)))
        throw new Error("Datan innehåller objekt som inte är filmer.");

      setApiState({ status: "success", data });
    } else {
      setApiState({ status: "error", message: "Fel från API. Statuskod: " + response.status });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "okänt fel.";
    setApiState({ status: "error", message: "Fel vid hämtning: " + message });
  }
}