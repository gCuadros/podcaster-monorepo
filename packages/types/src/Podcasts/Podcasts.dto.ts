import { StatusDto } from "../Status/Status.dto";

export interface PodcastsDto {
  contents: string;
  status: StatusDto;
}

export interface FindAllPodcast {
  request: {
    query?: {
      limit?: number;
      genre?: number;
    };
    filter?: { search?: string; id?: string };
  };
  response: PodcastsDto;
}
