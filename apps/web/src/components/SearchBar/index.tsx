import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

interface Props extends Omit<InputProps, "onChange"> {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange, ...props }: Props) => {
  return (
    <InputGroup>
      <Input
        fontSize="12px"
        placeholder="Filter podcasts..."
        _focus={{ borderColor: "#cbd5e0" }}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
      <InputLeftElement fontSize="16px">
        <FiSearch />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchBar;
