import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props extends Omit<InputProps, "onChange"> {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange, ...props }: Props) => {
  return (
    <InputGroup>
      <Input
        fontSize="12px"
        placeholder="Filter podcasts..."
        onChange={e => onChange(e.target.value)}
        {...props}
      />
      <InputRightElement fontSize="12px">
        <AiOutlineSearch />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
