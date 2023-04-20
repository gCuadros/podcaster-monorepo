import { EpisodeDto } from "../Episode.dto";

export interface EpisodeContentsDto {
  resultCount: number;
  results: EpisodeDto[];
}
