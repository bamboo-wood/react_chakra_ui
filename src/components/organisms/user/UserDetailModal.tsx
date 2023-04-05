import {
  Box,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <FormControl>
            <Stack spacing={4}>
              <Box>
                <FormLabel>名前</FormLabel>
                <Input value={user?.username} isReadOnly></Input>
              </Box>
              <Box>
                <FormLabel>フルネーム</FormLabel>
                <Input value={user?.name} isReadOnly></Input>
              </Box>
              <Box>
                <FormLabel>メールアドレス</FormLabel>
                <Input value={user?.email} isReadOnly></Input>
              </Box>
              <Box>
                <FormLabel>電話番号</FormLabel>
                <Input value={user?.phone} isReadOnly></Input>
              </Box>
            </Stack>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
