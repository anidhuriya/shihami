import { Button, Box } from "@chakra-ui/react";
import Link from "next/link";

import User from "../public/Icons/User Profile.svg";

const AccountButton = () => {
  return (
    <Box>
      <Button variant="unstyled" aria-label="Creant Account">
        <Link href="/updateprofile">
          <User />
        </Link>
      </Button>
    </Box>
  );
};

export default AccountButton;
