import { FC, memo } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;

  return (
    <IconButton
      aria-label={"menu-button"}
      icon={<AddIcon />}
      size={"sm"}
      variant={"outline"}
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
