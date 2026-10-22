// components/Internships.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Building2 } from "lucide-react";

type Internship = {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "Remote" | "On-site" | "Hybrid";
  stipend: string;
  tags: string[];
};

const internships: Internship[] = [
  {
    id: "1",
    role: "Frontend Developer Intern",
    company: "TechNova",
    location: "Bangalore, India",
    duration: "3 months",
    type: "Remote",
    stipend: "₹25,000 / month",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: "2",
    role: "Backend Developer Intern",
    company: "CloudSphere",
    location: "Hyderabad, India",
    duration: "6 months",
    type: "Hybrid",
    stipend: "₹30,000 / month",
    tags: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "3",
    role: "UI/UX Design Intern",
    company: "PixelCraft",
    location: "Remote",
    duration: "2 months",
    type: "Remote",
    stipend: "₹15,000 / month",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    id: "4",
    role: "Data Science Intern",
    company: "InsightAI",
    location: "Pune, India",
    duration: "4 months",
    type: "On-site",
    stipend: "₹35,000 / month",
    tags: ["Python", "Pandas", "ML"],
  },
  {
    id: "5",
    role: "Full Stack Intern",
    company: "Startly",
    location: "Mumbai, India",
    duration: "3 months",
    type: "Hybrid",
    stipend: "₹20,000 / month",
    tags: ["MERN", "TypeScript", "REST"],
  },
  {
    id: "6",
    role: "DevOps Intern",
    company: "InfraWorks",
    location: "Remote",
    duration: "5 months",
    type: "Remote",
    stipend: "₹28,000 / month",
    tags: ["Docker", "Kubernetes", "CI/CD"],
  },
];

const typeVariant: Record<Internship["type"], string> = {
  Remote: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "On-site": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Hybrid: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

export default function Internships() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Available Internships
        </h2>
        <p className="mt-2 text-muted-foreground">
          Kickstart your career with these opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {internships.map((internship) => (
          <Card
            key={internship.id}
            className="flex flex-col transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-lg">{internship.role}</CardTitle>
                  <CardDescription className="mt-1 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5" />
                    {internship.company}
                  </CardDescription>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeVariant[internship.type]}`}
                >
                  {internship.type}
                </span>
              </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {internship.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {internship.duration}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {internship.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-sm font-medium">{internship.stipend}</p>
            </CardContent>

            <CardFooter>
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}