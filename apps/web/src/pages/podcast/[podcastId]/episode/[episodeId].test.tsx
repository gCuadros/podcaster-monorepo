import fetch from "node-fetch";
global.fetch = fetch;

import { getStaticProps } from "./[episodeId]";

describe("getStaticProps", () => {
  it("should return the expected data", async () => {
    const mockParams = {
      params: { podcastId: "1535809341", episodeId: "1535809341" },
    };
    const result = await getStaticProps(mockParams);

    expect(result).toBeDefined();
  }, 10000);
});
