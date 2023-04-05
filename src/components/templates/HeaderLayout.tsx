import { FC, memo } from "react";

import { Header } from "../organisms/layout/Header";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  console.log("HeaderLayout");

  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});
