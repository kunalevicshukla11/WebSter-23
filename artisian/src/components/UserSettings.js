import React, { useState, useEffect } from "react";
import { FiChevronDown, FiEdit, FiPlusSquare } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { motion } from "framer-motion";
import { useAuth } from "../context/userContext";
import { useNavigate, useLocation } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-scroll";
const UserSettings = () => {
  const [open, setOpen] = useState(false);
  const [home, setHome] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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

  const handleEdit = () => {
    navigate("/profile");
    setOpen(false);
  };
  const handleHome = () => {
    if (home) {
      navigate("/dashboard");
    } else {
      setHome(true);
      navigate("/");
    }
    setOpen(false);
  };
  const handleAboutUs = () => {
    setOpen(false);
  };
  const handleContactUs = () => {
    setOpen(false);
  };

  const [scroll, setScroll] = useState(false);

  const changeState = () => {
    if (window.scrollY >= 38) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeState);

  return (
    <div className="w-fit  flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className={`flex items-center gap-2 px-5 py-2 rounded-md  ${
            scroll
              ? "bg-yellow-500 hover:bg-yellow-600   text-black  border-black border-2 "
              : "bg-indigo-500 text-indigo-50 hover:bg-indigo-800"
          } transition-colors`}
        >
          <span className="font-medium text-xl">Settings</span>
          <motion.span
            animate={open ? "open" : "closed"}
            variants={iconVariants}
          >
            <IoSettings />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option
            setOpen={setOpen}
            Icon={FiEdit}
            text="Edit Profile"
            onClick={handleEdit}
            scroll={scroll}
          />
          <Option
            setOpen={setOpen}
            Icon={home ? RxDashboard : AiOutlineHome}
            onClick={handleHome}
            text={home ? "Dashboard" : "Home"}
            scroll={scroll}
          />
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <Option
              setOpen={setOpen}
              Icon={FcAbout}
              text="About Us"
              onClick={handleAboutUs}
              scroll={scroll}
            />
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Option
              setOpen={setOpen}
              Icon={IoMdContacts}
              text="Contact Us"
              onClick={handleContactUs}
              scroll={scroll}
            />
          </Link>
          <Option
            setOpen={setOpen}
            Icon={CiLogout}
            text="Logout"
            onClick={handleLogout}
            scroll={scroll}
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, onClick, scroll }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        onClick();
      }}
      className={`flex items-center gap-2 w-full p-2 text-lg whitespace-nowrap rounded-md  ${
        scroll
          ? "hover:bg-yellow-100 hover:text-black"
          : "hover:bg-indigo-100 hover:text-indigo-500"
      }  text-slate-700 transition-colors cursor-pointer`}
    >
      <motion.span variants={actionIconVariants}>
        <Icon size={25} />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default UserSettings;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.005,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.005,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
