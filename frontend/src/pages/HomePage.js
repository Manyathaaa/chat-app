import React from "react";
import { Container, Box, Text, Tabs } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      {/* Title Card */}
      <Box
        bg="white"
        w="90%"
        p="30px"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
        m="40px 0 15px 0"
      >
        <Text fontSize="4xl" fontWeight="bold">
          TALK-A-TIVE
        </Text>
      </Box>

      {/* Tabs Card */}
      <Box
        bg="white"
        w="100%"
        p="30px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs.Root defaultValue="login" width="full">
          <Tabs.List>
            <Tabs.Trigger value="login">Login</Tabs.Trigger>
            <Tabs.Trigger value="signup">Sign Up</Tabs.Trigger>
          </Tabs.List>

          <Box mt="4">
            <Tabs.Content value="login">
              Login Form Here
            </Tabs.Content>

            <Tabs.Content value="signup">
              Signup Form Here
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default HomePage;
