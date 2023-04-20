import { StatusDto } from "../Status/Status.dto";

export interface PodcastDto {
  contents: string;
  status: StatusDto;
}

export interface FindPodcast {
  request: {
    query?: {
      podcastId?: string;
    };
  };
  response: PodcastDto;
}
