import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer placement={"left"} size={"xs"} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={0} bg={"gray.100"}>
          <Button w={"100%"}>Top</Button>
          <Button w={"100%"}>ユーザー一覧</Button>
          <Button w={"100%"}>設定</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
