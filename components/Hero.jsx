import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase2Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiBriefcase4Fill,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="py-12 px-3 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-around items-center gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              MERN Stack Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Hafiz Ahtesham Ali</h1>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              "I'm Hafiz Ahtesham Ali, a MERN stack developer passionate about
              building dynamic and scalable web applications. With expertise in
              HTML, CSS, Bootstrap, JavaScript, Tailwind CSS, Firebase, React
              JS, Node.js, Express.js, and MongoDB, I specialize in creating
              robust, user-friendly interfaces and backend solutions that exceed
              expectations. I thrive on collaboration, continuous learning, and
              delivering exceptional results. Let's connect and bring your
              projects to life!"
            </p>

            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <Link
                  className="flex gap-x-2 items-center"
                  href="https://drive.google.com/file/d/1HswSyIF06MiffbgH0Bs2K9Ovx4tYU3JC/view?usp=drive_link"
                >
                  Download CV <Download size={18} />
                </Link>
              </Button>
            </div>

            {/* socials */}
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative">
            {/* Badge */}
            {/* <Badge
                containerStyles='absolute top-[10%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
            /> */}
            {/* Badge2 */}
            {/* <Badge
                containerStyles='absolute top-[50%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText='k'
              badgeText="Finished Projects"
            /> */}

            {/* Badge3 */}
            {/* <Badge
                containerStyles='absolute top-[30%] right-0'
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText='k'
              badgeText="Happy clients"
            /> */}

            <div className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="w-[500px] h-[500px] over-flow bg-no-repeat relative bg-bottom"
              imgSrc="/hero/ahteshamAliPic.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
