import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const AboutItem = ({ developer }) => {
  const socialList = [
    {
      id: 1,
      name: "linkedin",
      link: "/",
    },
    {
      id: 2,
      name: "instagram",
      link: "/",
    },
    {
      id: 3,
      name: "github",
      link: "/",
    },
  ];

  const developerSocial =
    developer.attributes.socialMedia &&
    developer.attributes.socialMedia !== "undefined"
      ? developer.attributes.socialMedia
      : socialList;

  const developerImage =
    developer.attributes.profileImg.data.attributes.url &&
    developer.attributes.profileImg.data.attributes.url !== ""
      ? developer.attributes.profileImg.data.attributes.url
      : "https://via.placeholder.com/150";

  return (
    <div
      style={{
        backgroundImage: `url(${developerImage})`,
      }}
      className={
        "h-96 rounded-md bg-cover bg-center flex items-end md:h-80 lg:h-96"
      }
    >
      <div className="p-4 w-full">
        <div className="text-white backdrop-blur-md px-4 py-5 border-2 rounded-md backdrop-brightness-75">
          <h2 className="text-2xl font-bold font-sans mb-2 md:text-lg lg:text-2xl">
            {developer.attributes.name}
          </h2>
          <p className="mb-3 text-lg md:text-base lg:text-lg">
            {developer.attributes.position}
          </p>
          <div className="flex gap-4 text-2xl text-white md:text-lg md:gap-3 lg:text-2xl">
            {developerSocial.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={social.id}
              >
                {social.name === "linkedin" && <FaLinkedin />}
                {social.name === "instagram" && <FaInstagram />}
                {social.name === "github" && <FaGithub />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
