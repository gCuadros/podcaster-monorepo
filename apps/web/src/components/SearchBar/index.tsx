import {
  Badge,
  HStack,
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props extends Omit<InputProps, "onChange"> {
  totalItems?: number;
  onChange: (value: string) => void;
}

const SearchBar = ({ totalItems, onChange, ...props }: Props) => {
  return (
    <HStack>
      <Badge
        color="white"
        backgroundColor="#3078a7"
        fontSize="12px"
        borderRadius="8px"
        paddingY={1}
        paddingX={4}
      >
        {totalItems}
      </Badge>
      <InputGroup>
        <Input
          fontSize="12px"
          placeholder="Filter podcasts..."
          onChange={e => onChange(e.target.value)}
          {...props}
        />
        <InputRightElement fontSize="12px" children={<AiOutlineSearch />} />
      </InputGroup>
    </HStack>
  );
};

export default SearchBar;
