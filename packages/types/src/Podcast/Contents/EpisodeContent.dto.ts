import { EpisodeDto } from "../Episode/Episodie.dto";

export interface ContentsDto {
  resultCount: number;
  results: EpisodeDto[];
}
