import { AuthorDto } from "../Author/Author.dto";
import { EntryDto } from "../Entry/Entry.dto";

export interface FeedDto {
  author: AuthorDto;
  entry: EntryDto[];
}
