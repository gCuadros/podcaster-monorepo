import { ContentsDto } from "./Contents/Content.dto";
import { FeedDto } from "./Feed/Feed.dto";
import { StatusDto } from "./Status/Status.dto";

export interface PodcastDto {
  contents: ContentsDto;
  status: StatusDto;
}

export interface FindAllPodcast {
  request: {
    query: {
      limit?: number;
      genre?: number;
    };
  };
  response: PodcastDto;
}
