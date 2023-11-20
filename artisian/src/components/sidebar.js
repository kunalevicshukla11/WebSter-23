import React from "react";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Stack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box pt={128} className="" position="relative" h="100vh">
      <Accordion defaultIndex={[0]} allowMultiple="true" allowToggle>
        <AccordionItem mr={50} pb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left" ml={4}>
                <NavLink className="text-2xl" to="/">
                  Home
                </NavLink>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontWeight={"extrabold"} fontSize={20} pb={4}>
            <Stack ml={2}>
              <Link
                className="text-slate-400 hover:cursor-pointer  hover:text-opacity-70 text-2xl"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About Us
              </Link>
              <Link
                className="text-slate-400 hover:text-opacity-70 text-2xl hover:cursor-pointer"
                to="Contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact Us
              </Link>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mr={50} pb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                <NavLink className="text-2xl" to="/">
                  Student
                </NavLink>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={2} fontWeight={"extrabold"} fontSize={20} pb={4}>
            <Stack>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/login-student"
              >
                Login
              </NavLink>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/signup-student"
              >
                Sign Up
              </NavLink>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mr={50} pb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                <NavLink className="text-2xl" to="/">
                  Representative (Student)
                </NavLink>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={2} fontWeight={"extrabold"} fontSize={20} pb={4}>
            <Stack>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/login-student-rep"
              >
                Login
              </NavLink>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/signup-student-rep"
              >
                Sign Up
              </NavLink>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mr={50} pb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                <NavLink className="text-2xl" to="/">
                  Accountant
                </NavLink>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={2} fontWeight={"extrabold"} fontSize={20} pb={4}>
            <Stack>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/login-accountant"
              >
                Login
              </NavLink>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/signup-accountant"
              >
                Sign Up
              </NavLink>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mr={50} mt={0}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                <NavLink className="text-2xl" to="/">
                  Admin
                </NavLink>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={2} fontWeight={"extrabold"} fontSize={20}>
            <Stack>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/login-admin"
              >
                Login
              </NavLink>
              <NavLink
                className="text-slate-400 hover:text-opacity-70 text-2xl"
                to="/signup-admin"
              >
                Sign Up
              </NavLink>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
