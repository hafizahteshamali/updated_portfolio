import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Hafiz Ahtesham Ali",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 330 8419436",
  },
  {
    icon: <MailIcon size={20} />,
    text: "hafizahteshamali363617@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 27 june, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Software Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "House No.B/245, B/area Mumtaz Nagar Malir Colony Karachi Pakistan",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "The Citizen Foundation",
        qualification: "Matriculation",
        years: "2017 - 2018",
      },
      {
        university: "P.I.S Technical College",
        qualification: "Comp. info. tech(C.I.T)",
        years: "2019 - 2021",
      },
      {
        university: "Indus University Pakistan",
        qualification: "Bachelor in Software Engineering",
        years: "2022 - 2026",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Atia General Hospital",
        designation: "Administration Staff",
        timePeriod: "Mar(2020) - Apr(2021)",
      },
      {
        company: "CodSoft",
        designation: "Frontend Developer",
        timePeriod: "Mar(2024) - Apr(2024)",
      },
      {
        company: "Syhtek Software Solution",
        designation: "Frontend Developer",
        timePeriod: "Aug(2024) - Dec(2024)",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "JAVASCRIPT",
      },
      {
        name: "BOOTSTRAP",
      },
      {
        name: "FIREBASE",
      },
      {
        name: "TAILWIND CSS",
      },
      {
        name: "REACT JS",
      },
      {
        name: "NEXT JS",
      },
      {
        name: "NODE JS",
      },
      {
        name: "EXPRESS JS",
      },
      {
        name: "MONGO DB",
      },
      {
        name: "O.O.P",
      },
      {
        name: "D.S.A",
      },
      {
        name: "GITHUB",
      },
      {
        name: "GIT",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/dev.png",
      },
      {
        imgPath: "/about/vs-code.png",
      },
      {
        imgPath: "/about/coreldraw.png",
      },
      {
        imgPath: "/about/photoshop.png",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/ahteshamAliPic.jpg"
            />
          </div>

          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* tabs content */}

              <div className="text-lg mt-12 xl:mt-8 text-center">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 ">
                      Unmatched Serveices Quality for over 10 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-1 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Urdu</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div className="w-[500px bg-blue-600]">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experience & Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col w-[300px] gap-y-4">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium ">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, designation, timePeriod } = item;
                              return (
                                <div
                                  className="flex gap-x-8 mt-3 group text-left"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {designation}
                                    </div>
                                    <div className="text-base font-medium">
                                      {timePeriod}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education*/}
                      <div className="flex flex-col w-[300px] gap-y-4">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium ">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 mt-3 group text-left"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent className="w-full" value="skills">
                  <div className="text-center xl:text-left w-[100%]">
                    <h3 className="h3 mb-8">Tools I use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className="flex flex-wrap">
                        {getData(skillData, 'skills').data.map((item, index)=>{
                          const {name} = item;
                          return(
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium">{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                        <div className="border-b border-border mb-4"></div>
                        {/* tools list */}
                        <div className="flex gap-x-8 justify-center xl:justify-start ">
                            {getData(skillData, 'tools').data.map((item, index)=>{
                              const {imgPath} = item;
                              return <div key={index}>
                                <Image src={imgPath} width={48} height={48} alt="" priority />
                              </div>
                            })}
                        </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
