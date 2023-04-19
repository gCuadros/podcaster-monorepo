import { StatusDto } from "./Status/Status.dto";

export interface PodcastDto {
  contents: string;
  status: StatusDto;
}

export interface FindAllPodcast {
  request: {
    query?: {
      limit?: number;
      genre?: number;
    };
  };
  response: PodcastDto;
}
