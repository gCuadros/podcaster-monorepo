import { PodcasterError } from "./error";

export const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com${url}`
    )}`,
    {
      ...init,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...init?.headers,
      },
    }
  );

  if (!res.ok) {
    const message = await res.json();
    throw new PodcasterError(message, res.status);
  }

  return res.json();
};
