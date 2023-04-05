import React, { FC, memo, useEffect } from "react";
import { Box, Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Spinner />
        </Center>
      ) : (
        <Wrap className="kazukiWrap" p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id} className="kazukiWrapItem">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
