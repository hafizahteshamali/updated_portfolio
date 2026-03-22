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
    description: "Fast, dynamic websites that load content without page refresh for smoother user experience.",
  },
  {
    icon: <Layout size={72} strokeWidth={0.8} />,
    title: "UI/UX Implementation",
    description: "Pixel-perfect, responsive designs using Tailwind CSS, Bootstrap, and Material-UI.",
  },
  {
    icon: <Network size={72} strokeWidth={0.8} />,
    title: "API Integration",
    description: "Seamless integration with REST APIs and GraphQL for real-time data fetching and display.",
  },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "State Management",
    description: "Efficient state handling using Redux, Context API, or Zustand for predictable data flow.",
  },
  {
    icon: <ShoppingCart size={72} strokeWidth={0.8} />,
    title: "E-commerce Development",
    description: "Complete e-commerce solutions with product pages, cart functionality, and payment integration.",
  },
  {
    icon: <PieChart size={72} strokeWidth={0.8} />,
    title: "Dashboards",
    description: "Interactive admin panels and analytics dashboards with Chart.js and Recharts.",
  },
  {
    icon: <ArrowRightLeft size={72} strokeWidth={0.8} />,
    title: "Code Migration",
    description: "Upgrading legacy projects to modern ReactJS architecture for better performance.",
  },
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "Frontend Development",
    description: "Building interactive UIs with HTML, CSS, JavaScript, ReactJS, and NextJS.",
  },
  {
    icon: <Tablet size={72} strokeWidth={0.8} />,
    title: "Responsive Web Design",
    description: "Mobile-first designs that adapt seamlessly across all devices and screen sizes.",
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
