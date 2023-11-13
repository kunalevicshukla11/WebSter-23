import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Stack } from "@chakra-ui/react";

import React from "react";

const Sidebar = () => {
  {
    return (
      <Box pt={28} position="relative" h="100vh">
        <Accordion defaultIndex={[0]} allowMultiple="true" allowToggle>
          <AccordionItem mr={50} mt={5}>
            <h2>
              <AccordionButton _expanded={{ bg: "teal.800", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <NavLink className="text-2xl" to="/">
                    Home
                  </NavLink>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontWeight={"extrabold"} fontSize={20} pb={4}>
              <Stack>
                <NavLink className="text-slate-400" to="/">
                  About Us
                </NavLink>
                <NavLink className="text-slate-400" to="/">
                  Contact Us
                </NavLink>
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mr={50} mt={0}>
            <h2>
              <AccordionButton _expanded={{ bg: "teal.800", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <NavLink className="text-2xl" to="/">
                    Student
                  </NavLink>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontWeight={"extrabold"} fontSize={20} pb={4}>
              <Stack>
                <NavLink className="text-slate-400" to="/login-student">
                  Login
                </NavLink>
                <NavLink className="text-slate-400" to="/signup-student">
                  Sign Up
                </NavLink>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mr={50} mt={0}>
            <h2>
              <AccordionButton _expanded={{ bg: "teal.800", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <NavLink className="text-2xl" to="/">
                    Admin
                  </NavLink>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontWeight={"extrabold"} fontSize={20}>
              <Stack>
                <NavLink className="text-slate-400" to="/login-admin">
                  Login
                </NavLink>
                <NavLink className="text-slate-400" to="/signup-admin">
                  Sign Up
                </NavLink>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    );
  }
};

export default Sidebar;
