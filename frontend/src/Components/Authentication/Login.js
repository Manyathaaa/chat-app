import React from 'react'
import { useState } from "react";
import {
     FormControl,
     FormLabel,
     Input,
     Button,
     InputGroup,      
     InputRightElement,
     VStack
} from "@chakra-ui/react";

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
      const [show, setShow] = useState(false);
   
     const handleClick = () => setShow(!show);
   
     return (
       <VStack spacing="5px">

   
         {/* Email */}
         <FormControl id="email" isRequired>
           <FormLabel>Email</FormLabel>
           <Input
             placeholder="Enter Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
         </FormControl>
   
         {/* Password */}
         <FormControl id="password" isRequired>
           <FormLabel>Password</FormLabel>
           <InputGroup>
             <Input
               type={show ? "text" : "password"}
               placeholder="Enter Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
             <InputRightElement width="4.5rem">
               <Button h="1.75rem" size="sm" onClick={handleClick}>
                 {show ? "Hide" : "Show"}
               </Button>
             </InputRightElement>
           </InputGroup>
         </FormControl>
   
         {/* Submit */}
         <Button colorScheme="blue" width="100%" mt={4}>
           Login
         </Button>
       </VStack>
     );
   };
export default Login
