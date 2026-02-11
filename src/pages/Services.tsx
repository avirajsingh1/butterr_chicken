import { Building2, Globe2, GraduationCap, Users, FileText, CreditCard, Home, Shield, Stethoscope, Baby, Dog, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const categories = [
  {
    title: "For All Residents",
    items: [
      { icon: FileText, title: "Address Registration", desc: "Register or update your residential address" },
      { icon: CreditCard, title: "Tax & Finance", desc: "Property tax, dog tax, trade tax" },
      { icon: Car, title: "Vehicle Registration", desc: "Register, transfer, or deregister vehicles" },
      { icon: Dog, title: "Pet Registration", desc: "Dog registration and tax" },
    ],
  },
  {
    title: "For Immigrants & Expats",
    items: [
      { icon: Globe2, title: "Residence Permits", desc: "Apply for or renew your residence permit" },
      { icon: Shield, title: "Visa Services", desc: "Visa extensions and type changes" },
      { icon: Users, title: "Integration Courses", desc: "German language and orientation courses" },
      { icon: Stethoscope, title: "Health Insurance", desc: "Mandatory health coverage guidance" },
    ],
  },
  {
    title: "For Students",
    items: [
      { icon: GraduationCap, title: "University Enrollment", desc: "Steps to enroll at Rheinstadt universities" },
      { icon: Home, title: "Student Housing", desc: "Dormitories and housing assistance" },
      { icon: Baby, title: "Student Jobs", desc: "Work regulations and job resources" },
      { icon: Building2, title: "Student Services", desc: "AStA, Studierendenwerk, counseling" },
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="font-display text-4xl font-bold mb-2">City Services</h1>
        <p className="text-muted-foreground mb-10 max-w-xl">
          Browse services by category. For personalized guidance, ask Anna.
        </p>

        <div className="space-y-12">
          {categories.map((cat) => (
            <section key={cat.title}>
              <h2 className="font-display text-2xl font-bold mb-4">{cat.title}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cat.items.map((item) => (
                  <Card key={item.title} className="cursor-default hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold font-sans text-sm">{item.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
