import { useQuery } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";

import {
  usePodcasts,
  usePodcastsFilterOnClient,
  usePodcastsFilterById,
  podcastsKey,
  fetchPodcasts,
} from "./usePodcasts";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("api/fetcher", () => ({
  fetcher: jest.fn(),
}));

describe("usePodcasts", () => {
  it("debería llamar a useQuery con los argumentos correctos", () => {
    renderHook(() => usePodcasts());

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastsKey(),
      queryFn: fetchPodcasts,
    });
  });
});

describe("usePodcastsFilterOnClient", () => {
  it("debería llamar a useQuery con los argumentos correctos", () => {
    const props = {
      filter: {
        search: "example",
      },
    };

    renderHook(() => usePodcastsFilterOnClient(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastsKey(),
      queryFn: fetchPodcasts,
      select: expect.any(Function),
    });
  });
});

describe("usePodcastsFilterById", () => {
  it("debería llamar a useQuery con los argumentos correctos cuando props.filter.id está presente", () => {
    const props = {
      filter: {
        id: "exampleId",
      },
    };

    renderHook(() => usePodcastsFilterById(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastsKey(),
      queryFn: fetchPodcasts,
      select: expect.any(Function),
      enabled: true,
    });
  });

  it("debería llamar a useQuery con los argumentos correctos cuando props.filter.id está ausente", () => {
    const props = {
      filter: {
        id: "",
      },
    };

    renderHook(() => usePodcastsFilterById(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastsKey(),
      queryFn: fetchPodcasts,
      select: expect.any(Function),
      enabled: false,
    });
  });
});
