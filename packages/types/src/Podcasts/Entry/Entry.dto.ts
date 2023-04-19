import { LabelDto } from "../../Label/Label.dto";
import { AttributesDto } from "../Attributes/Attributes.dto";
import { ImContentTypeDto } from "../ImContentType/ImContentType.dto";
import { ImImageDto } from "../ImImage/ImImage.dto";
import { ImPriceDto } from "../ImPrice/ImPrice.dto";

export interface EntryDto {
  "im:name": LabelDto;
  "im:image": ImImageDto[];
  summary: LabelDto;
  "im:price": ImPriceDto;
  "im:contentType": ImContentTypeDto;
  rights: LabelDto;
  title: LabelDto;
  link: { attributes: AttributesDto };
  id: { label: string; attributes: AttributesDto };
  "im:artist": LabelDto;
  category: { attributes: AttributesDto };
  "im:releaseDate": { label: string; attributes: AttributesDto };
}
