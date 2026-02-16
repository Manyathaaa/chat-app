import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import SignUp from "../Components/Authentication/SignUp";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent> <Box bg={'white'} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="40px" w="90%" p="30px" borderRadius="lg" borderWidth="1px" color="black" m="40px 0 15px 0" >
        <Text fontSize="4xl" fontWeight="bold">
          TALK-A-TIVE
        </Text>
      </Box>

      {/* Tabs */}
      <Box
        bg="white"
        w="100%"
        p="30px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="blue" isFitted>
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>

          <TabPanels>
            <TabPanel><Login /></TabPanel>
            <TabPanel><SignUp /></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
