import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24 ">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              I’m here to turn your ideas into stunning digital experiences.
              Whether it’s a website, a dynamic web application, or creative
              frontend development, I’m just a message away!
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid items-center lg:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-8 xl:gap-y-14 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8 ">
              <MailIcon size={18} className="text-primary" />
              <div>hafizahteshamali363617@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8 ">
              <HomeIcon size={18} className="text-primary" />
              <div>House #B/245, B/area Mumtaz Nagar Malir Colony Karachi</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8 ">
              <PhoneCall size={18} className="text-primary" />
              <div>+92 330 8419436 / +92 340 2425689</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
