import { Link } from "react-router-dom";
import { Envelope, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { schoolData } from "@/data/schoolData";

export default function Members() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Members</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Community
            </h1>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated team behind our school's success - from
              leadership to faculty and student representatives.
            </p>
          </div>
        </div>
      </section>

      {/* Members Tabs */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <Tabs defaultValue="executive" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              <TabsTrigger value="executive">Executive Committee</TabsTrigger>
              <TabsTrigger value="faculty">Faculty Coordinators</TabsTrigger>
              <TabsTrigger value="students">Student Representatives</TabsTrigger>
            </TabsList>

            {/* Executive Committee */}
            <TabsContent value="executive" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Executive Committee</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our executive team provides strategic direction and ensures
                  excellence in all aspects of our school community.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {schoolData.members.executive.map((member) => (
                  <Card key={member.id} className="overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <Badge variant="outline" className="w-fit mx-auto">
                        {member.role}
                      </Badge>
                      <CardDescription className="mt-2">
                        {member.department}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-primary"
                      >
                        <a href={`mailto:${member.email}`}>
                          <Envelope size={16} className="mr-2" />
                          Contact
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Faculty Coordinators */}
            <TabsContent value="faculty" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Faculty Coordinators</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our dedicated faculty members lead by example and guide
                  students in their academic journey.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {schoolData.members.faculty.map((member) => (
                  <Card key={member.id} className="overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <Badge variant="outline" className="w-fit mx-auto">
                        {member.role}
                      </Badge>
                      <CardDescription className="mt-2">
                        {member.department}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-primary"
                      >
                        <a href={`mailto:${member.email}`}>
                          <Envelope size={16} className="mr-2" />
                          Contact
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Student Representatives */}
            <TabsContent value="students" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Student Representatives
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our student leaders represent the voice of the student body
                  and contribute to school decision-making.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {schoolData.members.studentReps.map((member) => (
                  <Card key={member.id} className="overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {member.role}
                      </Badge>
                      <CardDescription className="mt-2">
                        Grade {member.grade}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="mb-4 w-fit">Get Involved</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Join Our Community
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're a prospective student, parent, or community
                  member, there's a place for you in our school community.
                  Get in touch to learn more about involvement opportunities.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/activities">Explore Activities</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
                  alt="Community"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}