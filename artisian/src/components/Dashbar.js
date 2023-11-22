import React, { useState, useEffect } from "react";
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
import { Link } from "react-scroll";
import { useAuth } from "../context/userContext";
import { useNavigate, useLocation } from "react-router-dom";

const Dashbar = () => {
  const [auth, setAuth] = useAuth();
  const [home, setHome] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Check if the current location is "/"
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location.pathname]); // Update when the location changes

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    navigate("/");
  };

  return (
    <Box pt={128} className="" position="relative" h="100vh">
      <Accordion defaultIndex={[0]} allowMultiple="true" allowToggle>
        <AccordionItem mr={50} pb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
              <Box flex="1" textAlign="left" ml={4}>
                <NavLink className="text-2xl" to="">
                  Links
                </NavLink>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontWeight={"extrabold"} fontSize={20} pb={4}>
            <Stack ml={2}>
              <NavLink
                to={home ? "/dashboard" : "/"}
                className=" text-slate-400 hover:text-opacity-70 hover:cursor-pointer text-2xl"
              >
                {home ? "Dashboard" : "Home"}
              </NavLink>
              <NavLink
                to="/profile"
                className="text-slate-400 hover:text-opacity-70 text-2xl"
              >
                My Profile
              </NavLink>
              <Link
                className="text-slate-400 hover:text-opacity-70 text-2xl hover:cursor-pointer"
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
            <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
              <Box flex="1" textAlign="left">
                <NavLink className="text-2xl" to="">
                  Settings
                </NavLink>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={2} fontWeight={"extrabold"} fontSize={20} pb={4}>
            <Stack>
              <NavLink
                to="/profile"
                className="text-slate-400 hover:text-opacity-70 text-2xl"
              >
                Edit Profile
              </NavLink>
              <NavLink
                to="/"
                onClick={handleLogout}
                className="text-slate-400 hover:text-opacity-70 text-2xl"
              >
                Logout
              </NavLink>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Dashbar;
