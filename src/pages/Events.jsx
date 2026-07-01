import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight, MagnifyingGlass, Funnel } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { schoolData } from "@/data/schoolData";

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = ["all", "Academic", "Arts", "Sports", "General"];

  const filteredUpcomingEvents = schoolData.events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredPastEvents = schoolData.pastEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Events</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay connected with our school community through exciting events,
              activities, and gatherings throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
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

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="upcoming">
                Upcoming Events ({filteredUpcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past">
                Past Events ({schoolData.pastEvents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {filteredUpcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredUpcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{event.category}</Badge>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedEvent(event)}
                              >
                                Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg">
                              <DialogHeader>
                                <DialogTitle>{event.title}</DialogTitle>
                                <DialogDescription>
                                  {event.category} Event
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar size={18} />
                                  <span>{formatDate(event.date)}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock size={18} />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <MapPin size={18} />
                                  <span>{event.location}</span>
                                </div>
                                <p className="text-muted-foreground">
                                  {event.description}
                                </p>
                                <Button className="w-full">Register Now</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <CardTitle className="mt-2 text-xl line-clamp-1">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4">Register</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No events found matching your criteria.
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
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-1">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        {formatDate(event.date)}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
              <DialogDescription>{selectedEvent.category} Event</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={18} />
                <span>{formatDate(selectedEvent.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={18} />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={18} />
                <span>{selectedEvent.location}</span>
              </div>
              <p className="text-muted-foreground">
                {selectedEvent.description}
              </p>
              <Button className="w-full">Register Now</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Calendar CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="mb-4 w-fit">Stay Updated</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Never Miss an Event
                </h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our event calendar to receive notifications about
                  upcoming events, important dates, and school activities.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link to="/contact">Subscribe</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop"
                  alt="Calendar"
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