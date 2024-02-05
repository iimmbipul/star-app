
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FilmList from "./FilmList";

const queryClient = new QueryClient();

describe("FilmDetailsComp", () => {
  test("renders film details", async () => {
    const App = () => (
      <div>
        {" "}
        <QueryClientProvider client={queryClient}>
          <FilmList
            filmUrls={[
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/3/",
            ]}
          />
        </QueryClientProvider>
      </div>
    );

    render(<App />);

    // Wait for data to be loaded

    const text1 = await screen.findByText("Return of the Jedi");
    const text2 = await screen.findByText("A New Hope");
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});
