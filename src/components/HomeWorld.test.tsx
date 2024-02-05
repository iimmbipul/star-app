
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeWorld from "./HomeWorld";

const queryClient = new QueryClient();

describe("Home Planet Comp", () => {
  test("renders home planet details", async () => {
    const App = () => (
      <div>
        {" "}
        <QueryClientProvider client={queryClient}>
          <HomeWorld
            url="https://swapi.dev/api/planets/1/"
          />
        </QueryClientProvider>
      </div>
    );

    render(<App />);

    // Wait for data to be loaded

    const text = await screen.findByText("Tatooine");
    expect(text).toBeInTheDocument();

  });
});
