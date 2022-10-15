import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MobileLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/thiyagaraj-m/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/thiyagu23",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={35} />
        </>
      ),
      href: "mailto:thiyagaraj1501@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={35} />
        </>
      ),
      href: "https://drive.google.com/file/d/1L1Vya3Nxp6TeeeVE3zz_D7Aick3n1lQZ/view?usp=sharing",
    },
  ];
  return (
    <div className=" flex flex-col p-4 lg:hidden w-full  text-gray-300 ">
      {" "}
      <ul className="flex  justify-center items-center ">
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="mx-3 hover:scale-105 duration-300 py-2 rounded-lg "
          >
            <a target="_blank" rel="noreferrer" href={href}>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileLinks;
