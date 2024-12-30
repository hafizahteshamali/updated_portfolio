"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/@LetsProgrammingwithAhtesham",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/hafiz-ahtesham-ali-b1301b290/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/hafizahteshamali/",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100034668692703",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/ahtesham3811/",
    name: <RiInstagramFill />,
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
