import {
  GanttChartSquare,
  Layout,
  Network,
  Code,
  Database,
  ShoppingCart,
  PieChart,
  Tablet,
  ArrowRightLeft,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Single Page Applications (SPAs)",
    description:
      "Fast and dynamic websites that load content without refreshing the page, improving speed and user experience. Example: Gmail, Trello.",
  },
  {
    icon: <Layout size={72} strokeWidth={0.8} />,
    title: "UI/UX Implementation:",
    description:
      "Creating pixel-perfect, responsive, and attractive designs using frameworks like Tailwind CSS, Bootstrap, and Material-UI.",
  },
  {
    icon: <Network size={72} strokeWidth={0.8} />,
    title: "API Integration",
    description:
      "Fetching and displaying real-time data from REST APIs or GraphQL to connect the frontend with backend services. Example: Weather apps, e-commerce products.",
  },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "State Management",
    description:
      "Managing complex application states using tools like Redux, Context API, or Zustand to ensure structured data flow.",
  },
  {
    icon: <ShoppingCart size={72} strokeWidth={0.8} />,
    title: "E-commerce Development",
    description:
      "Developing product pages, dynamic filters, shopping carts, and payment gateways to create robust e-commerce platforms.",
  },
  {
    icon: <PieChart size={72} strokeWidth={0.8} />,
    title: "Dashboards",
    description:
      "Designing interactive admin panels and data visualization tools using libraries like Chart.js and Recharts for displaying analytics.",
  },
  {
    icon: <ArrowRightLeft size={72} strokeWidth={0.8} />,
    title: "Code Migration",
    description:
      "Upgrading legacy projects to modern ReactJS-based architecture for better maintainability and performance.",
  },
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "Frontend Development",
    description:
      "Focuses on the visual and interactive parts of a website that users see and interact with. Technologies include HTML, CSS, JavaScript, and libraries/frameworks like ReactJS and NextJS.",
  },
  {
    icon: <Tablet size={72} strokeWidth={0.8} />,
    title: "Responsive Web Design",
    description:
      "Creating websites that adjust seamlessly to different screen sizes (mobile, tablet, desktop) using frameworks like Bootstrap, Tailwind CSS, or custom CSS Media Queries.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto my-[100px]">
          My Services
        </h2>
        {/* grid items */}
        <div className="flex flex-wrap justify-between lg:w-[90%] w-full px-5 mx-auto">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full sm:w-[300px] md:w-[350px] my-10 lg:w-[380px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
