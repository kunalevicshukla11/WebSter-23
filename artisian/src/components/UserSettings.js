import React, { useState } from "react";
import { FiChevronDown, FiEdit, FiPlusSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../context/userContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { IoSettings } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-scroll";
const UserSettings = () => {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate(); // Use useNavigate for navigation

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
    navigate("/profile"); // Navigate to "/profile"
    setOpen(false);
  };
  const handleHome = () => {
    navigate("/");
    setOpen(false);
  };
  const handleAboutUs = () => {
    setOpen(false);
  };
  const handleContactUs = () => {
    setOpen(false);
  };

  return (
    <div className="w-fit  -ml-[135px] -mt-8 flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-800 transition-colors"
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
          />
          <Option
            setOpen={setOpen}
            Icon={FiPlusSquare}
            text="Logout"
            onClick={handleLogout}
          />
          <Option
            setOpen={setOpen}
            Icon={AiOutlineHome}
            onClick={handleHome}
            text="Home"
          />
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <Option
              setOpen={setOpen}
              Icon={FcAbout}
              text="About"
              onClick={handleAboutUs}
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
            />
          </Link>
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, onClick }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        onClick();
      }}
      className="flex items-center gap-2 w-full p-2 text-lg whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
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
