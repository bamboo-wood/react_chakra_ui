import { FC, memo } from "react";
import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align={"center"} as={"a"} mr={8} _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          ユーザー管理アプリ
        </Heading>
      </Flex>

      <Flex
        align={"center"}
        fontSize={"sm"}
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link>ユーザー一覧</Link>
        </Box>
        <Link>設定</Link>
      </Flex>
      <IconButton
        aria-label={"menu-button"}
        icon={<AddIcon />}
        size={"sm"}
        variant={"outline"}
        display={{ base: "block", md: "none" }}
      ></IconButton>
    </Flex>
  );
});
