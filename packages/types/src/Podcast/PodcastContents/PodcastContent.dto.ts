import { EpisodeDto } from "../Episode/Episodie.dto";

export interface PodcastContentsDto {
  resultCount: number;
  results: EpisodeDto[];
}
