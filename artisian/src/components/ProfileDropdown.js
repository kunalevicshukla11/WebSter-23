import React, { useState } from "react";
import { FiChevronDown, FiEdit, FiPlusSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../context/userContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
const ProfileDropDown = () => {
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
    navigate("/profile");
    setOpen(false);
  };
  const name = auth?.user?.name;
  const displayName = name ? name.split(" ")[0] : "";

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
    <div className="w-fit    flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className={`flex items-center gap-2 px-5 mr-4 py-2 rounded-md ${
            scroll
              ? "bg-yellow-500 hover:bg-yellow-600 text-black border-black border-2   "
              : "bg-indigo-500 text-indigo-50 hover:bg-indigo-800"
          } transition-colors`}
        >
          <span className="font-medium  text-lg">{displayName}</span>
          <motion.span
            animate={open ? "open" : "closed"}
            variants={iconVariants}
          >
            <CgProfile size={28} />
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
            Icon={ImProfile}
            text="My Profile"
            onClick={handleEdit}
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
      className={`flex  gap-2 w-full p-2 text-lg font-medium  rounded-md ${
        scroll
          ? "hover:bg-yellow-100 hover:text-black"
          : "hover:bg-indigo-100 hover:text-indigo-500"
      }  text-slate-700  transition-colors cursor-pointer`}
    >
      <motion.span variants={actionIconVariants}>
        <Icon size={30} />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default ProfileDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
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
