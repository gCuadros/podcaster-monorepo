import { EpisodeDto } from "../Episode/Episode.dto";

export interface PodcastContentsDto {
  resultCount: number;
  results: EpisodeDto[];
}
