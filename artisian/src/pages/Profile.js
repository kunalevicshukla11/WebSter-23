import React from "react";
import { Flex, Box, Image, Text, HStack, Center } from "@chakra-ui/react";
import { FaSuitcase, FaEnvelope } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import { useAuth } from "../context/userContext";
import { TiUser } from "react-icons/ti";
const UserProfileCard = () => {
  const [auth] = useAuth(); // I removed setAuth as it seems you are not using it

  const name = auth?.user?.name;
  const email = auth?.user?.email;
  if (!auth?.user) {
    return (
      <>
        <h1>You Do not have access to this page. Please Login!</h1>
      </>
    );
  }

  return (
    <Box pos="relative" className="flex flex-col">
      <Image
        className="object-cover h-screen  w-screen"
        src="/images/pbg.jpg"
        alt="profile bg. img"
        pos="absolute"
        inset={0}
      />

      <Center
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <div class="flex flex-col items-center justify-center rounded-lg shadow-lg  w-[400px]  sm:w-full bg-gray-400 bg-opacity-70 p-4 mt-[760px] mb-[100px]">
          <div
            class="bg-cover  bg-center bg-no-repeat h-full w-full rounded-[20px] p-8 flex items-left"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              shadow="lg"
              border="5px solid"
              borderColor="gray.800"
            />
          </div>
          <Box
            gridColumn="span 8"
            p={8}
            width="400px"
            borderRadius="lg"
            textAlign="left"
            mt={-6}
          >
            <TiUser className="absolute -ml-11 mt-2" size="45px" />
            <Text
              className="hover:bg-gray-700 hover:cursor-pointer hover:border-black hover:border-2 rounded-lg hover:bg-opacity-50 px-2 "
              fontSize="4xl"
              fontWeight="extrabold"
              _dark={{
                color: "gray.800",
              }}
            >
              {name}
            </Text>
            <HStack
              className="w-[400px] h-[10px]  mt-12 mb-12 pl-2"
              spacing={2}
            >
              <FaSuitcase size={24} />
              <Text
                className="hover:bg-gray-700 hover:cursor-pointer hover:border-black hover:border-2 rounded-lg hover:bg-opacity-50 px-2 mt-6 "
                fontSize="3xl"
                paddingTop={0}
                fontWeight="extrabold"
                _dark={{ color: "gray.800" }}
              >
                {auth?.user?.role === 2
                  ? "Student"
                  : auth?.user?.role === 3
                  ? "Accountant"
                  : auth?.user?.role === 1
                  ? "Admin"
                  : auth?.user?.role === 4
                  ? "Student Representative"
                  : ""}{" "}
              </Text>
            </HStack>
            <HStack className="w-[340px] h-[2px]  mb-12" spacing={3}>
              <GiTreeBranch size="28px" />
              <Text
                className="hover:bg-gray-700 hover:cursor-pointer hover:border-black hover:border-2 rounded-lg hover:bg-opacity-50 px-2 mt-5"
                fontWeight="extrabold"
                _dark={{ color: "gray.800" }}
                fontSize="3xl"
              >
                {auth?.user?.branch}
              </Text>
            </HStack>
            <HStack className="w-[340px] h-[10px] pl-2" spacing={3}>
              <FaEnvelope size={20} />
              <Text
                className="hover:bg-gray-700 hover:cursor-pointer hover:border-black hover:border-2 rounded-lg hover:bg-opacity-50 px-2"
                marginTop="20px"
                fontWeight="extrabold"
                _dark={{ color: "gray.800" }}
                fontSize="2xl"
              >
                {email}
              </Text>
            </HStack>
          </Box>
        </div>
      </Center>
    </Box>
  );
};

export default UserProfileCard;
