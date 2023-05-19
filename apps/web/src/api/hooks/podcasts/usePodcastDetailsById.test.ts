import { useQuery } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";

import {
  usePodcastDetailsById,
  usePodcastFilterEpisodeById,
  podcastDetailKey,
  fetchPodcastDetail,
} from "./usePodcastDetailsById";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("api/fetcher", () => ({
  fetcher: jest.fn(),
}));

describe("usePodcastDetailsById", () => {
  it("debería llamar a useQuery con los argumentos correctos cuando props.query.podcastId está presente", () => {
    const props = {
      query: {
        podcastId: "examplePodcastId",
      },
    };

    renderHook(() => usePodcastDetailsById(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastDetailKey(props),
      queryFn: fetchPodcastDetail,
      enabled: true,
    });
  });

  it("debería llamar a useQuery con los argumentos correctos cuando props.query.podcastId está ausente", () => {
    const props = {
      query: {
        podcastId: "",
      },
    };

    renderHook(() => usePodcastDetailsById(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastDetailKey(props),
      queryFn: fetchPodcastDetail,
      enabled: false,
    });
  });
});

describe("usePodcastFilterEpisodeById", () => {
  it("debería llamar a useQuery con los argumentos correctos cuando props.query.podcastId y props.filter.id están presentes", () => {
    const props = {
      query: {
        podcastId: "examplePodcastId",
      },
      filter: {
        id: "exampleEpisodeId",
      },
    };

    renderHook(() => usePodcastFilterEpisodeById(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastDetailKey(props),
      queryFn: fetchPodcastDetail,
      select: expect.any(Function),
      enabled: true,
    });
  });

  it("debería llamar a useQuery con los argumentos correctos cuando props.query.podcastId está ausente", () => {
    const props = {
      query: {
        podcastId: "",
      },
      filter: {
        id: "exampleEpisodeId",
      },
    };

    renderHook(() => usePodcastFilterEpisodeById(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastDetailKey(props),
      queryFn: fetchPodcastDetail,
      select: expect.any(Function),
      enabled: false,
    });
  });

  it("debería llamar a useQuery con los argumentos correctos cuando props.filter.id está ausente", () => {
    const props = {
      query: {
        podcastId: "examplePodcastId",
      },
      filter: {
        id: "",
      },
    };

    renderHook(() => usePodcastFilterEpisodeById(props));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: podcastDetailKey(props),
      queryFn: fetchPodcastDetail,
      select: expect.any(Function),
      enabled: false,
    });
  });
});
