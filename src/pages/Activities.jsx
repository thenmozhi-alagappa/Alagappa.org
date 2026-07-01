import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Palette, Trophy, Heart, MusicNotes, Users } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { schoolData } from "@/data/schoolData";

const categoryIcons = {
  Academic: BookOpen,
  Arts: Palette,
  Sports: Trophy,
  Service: Heart,
  Leadership: Users,
  Music: MusicNotes,
};

export default function Activities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = ["all", ...new Set(schoolData.activities.map((a) => a.category))];

  const filteredActivities = schoolData.activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || activity.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Activities</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Programs & Initiatives
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our diverse range of programs designed to nurture
              talents, build skills, and foster holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          {filteredActivities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => {
                const CategoryIcon = categoryIcons[activity.category] || BookOpen;
                return (
                  <Card
                    key={activity.id}
                    className="overflow-hidden group flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="w-fit">
                          {activity.category}
                        </Badge>
                        <CategoryIcon
                          size={24}
                          weight="duotone"
                          className="text-primary"
                        />
                      </div>
                      <CardTitle className="mt-2">{activity.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground mb-4">
                        {activity.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Includes:</p>
                        <div className="flex flex-wrap gap-2">
                          {activity.details.map((detail) => (
                            <Badge key={detail} variant="secondary" className="text-xs">
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No activities found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Programs */}
      <section id="academic" className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Academic Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our academic programs are designed to challenge and inspire
              students to reach their full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen size={24} weight="duotone" className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">STEM Program</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive science, technology, engineering, and mathematics
                  curriculum with hands-on projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Palette size={24} weight="duotone" className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Arts Program</h3>
                <p className="text-sm text-muted-foreground">
                  Visual arts, music, and performing arts programs that foster
                  creativity and self-expression.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy size={24} weight="duotone" className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Athletics</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive sports programs promoting physical fitness,
                  teamwork, and healthy competition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Clubs</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Student Clubs & Organizations
              </h2>
              <p className="text-muted-foreground mb-6">
                With over {schoolData.statistics.clubs} active clubs, there's
                something for every interest. Students can explore their
                passions, develop leadership skills, and make lasting friendships.
              </p>
              <ul className="space-y-3">
                {[
                  "Robotics & Engineering Club",
                  "Debate & Model UN",
                  "Drama & Theater",
                  "Environmental Club",
                  "Student Government",
                  "Community Service",
                ].map((club) => (
                  <li key={club} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{club}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" asChild>
                <Link to="/contact">
                  Join a Club
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop"
                alt="Student Clubs"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Get Involved Today
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Explore your interests and discover new passions. Contact us to
                learn more about our programs and how to join.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to="/events">View Events</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}