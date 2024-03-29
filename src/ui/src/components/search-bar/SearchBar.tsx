import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useTheme } from "../../../..";

export const SearchBar = () => {
  const { textStyles, colors } = useTheme();
  return (
    <Flex bgColor="white" p="3" borderRadius={8}>
      <InputGroup borderRadius={5} size="sm" bgColor="white">
        <InputLeftElement
          pointerEvents="none"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <SearchIcon color={colors.grayLight} width="24px" height="24px" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for pots & collections..."
          _placeholder={{ color: colors.grayLight }}
          minWidth="388px"
          border="none"
          variant="unstyled"
          ml="3"
          {...textStyles.body2_400}
        />
      </InputGroup>
    </Flex>
  );
};
