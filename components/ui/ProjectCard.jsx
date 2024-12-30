import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* Image */}
        <div className="relative w-full h-[300px] flex items-center flex-col justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-7 shadow-2xl aspect-[2/1.5]"
            src={project.image}
            width={300}
            height={300}
            alt=""
            priority
          />
          {/* button */}
          <Link className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" href={project.link}><Link2Icon className="text-white" /></Link>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg ">
          {project.description.slice(0, 120)}...
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
