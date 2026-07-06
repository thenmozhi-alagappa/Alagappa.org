import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { X, CaretLeft, CaretRight, Buildings, MapPin, Calendar, Image, VideoCamera } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { schoolData } from "@/data/schoolData";
import { createPortal } from "react-dom";

// Tab metadata
const TAB_META = {
  institutions: {
    heading: "Institutions",
    sub: "Explore our educational institutions and their events",
  }, 
  events: {
    heading: "Events",
    sub: "Events that took place at our institutions",
  },
  gallery: {
    heading: "Images & Videos",
    sub: "Captured moments from our events",
  },
};

// Sub navigation items
const subNavItems = [
  { label: "Institutions", tab: "institutions" },
  { label: "Events", tab: "events" },
  { label: "Images & Videos", tab: "gallery" },
];

// Gallery institutions with events
const galleryInstitutions = [
  {
    id: 1,
    name: "Alagappa Smart Start playschool and Daycare center",
    location: "Karaikudi, Tamil Nadu",
    tag: "Playschool & Daycare",
    events: [
      { id: 1, title: "Doctor's Day Celebration", date: "2026-07-01", type: "Doctor's Day" },
      { id: 2, title: "Graduation Ceremony", date: "2025-12-10", type: "Academic" },
    ],
  },
  {
    id: 2,
    name: "Alagappa Matric Hr. Sec School",
    location: "Karaikudi, Tamil Nadu",
    tag: "Higher Secondary",
    events: [
      { id: 4, title: "School Images", date: "2026-03-20", type: "Academic" },
      { id: 5, title: "Tech Fest", date: "2026-02-15", type: "Technical" },
    ],
  },
   {
    id: 7,
    name: "Alagappa Matric Hr. Sec School",
    location: "Karaikudi, Tamil Nadu",
    tag: "Higher Secondary",
    events: [
      { id: 14, title: "Graduation Ceremony", date: "2026-03-20", type: "Academic" },
      { id: 15, title: "Tech Fest", date: "2026-02-15", type: "Technical" },
    ],
  },
  {
    id: 3,
    name: "Alagappa Girls Higher Secondary School",
    location: "Karaikudi, Tamil Nadu",
    tag: "Girls' School",
    events: [
      { id: 6, title: "Women's Day Celebration", date: "2026-03-08", type: "Cultural" },
      { id: 7, title: "Art Exhibition", date: "2026-01-25", type: "Arts" },
    ],
  },
  {
    id: 4,
    name: "Alagappa CBSE School",
    location: "Karaikudi, Tamil Nadu",
    tag: "CBSE",
    events: [
      { id: 8, title: "Tech Symposium", date: "2026-04-05", type: "Technical" },
      { id: 9, title: "Annual Convocation", date: "2026-05-10", type: "Academic" },
    ],
  },
  {
    id: 5,
    name: "Alagappa Performing Arts Academy",
    location: "Karaikudi, Tamil Nadu",
    tag: "Performing Arts",
    events: [
      { id: 10, title: "Classical Dance Festival", date: "2026-01-30", type: "Cultural" },
      { id: 11, title: "Music Concert", date: "2026-02-28", type: "Cultural" },
    ],
  },
  {
    id: 6,
    name: "Alagappa CBSE School",
    location: "Chennai, Tamil Nadu",
    tag: "CBSE",
    events: [
      { id: 12, title: "University Convocation", date: "2026-04-15", type: "Academic" },
      { id: 13, title: "Research Symposium", date: "2026-03-01", type: "Research" },
    ],
  },
];

// Event media (images and videos)
const eventMedia = {
  1: [ // Annual Day Celebration
    { id: 101, type: "image", src: "/Gallery/Smartstart/Doctorsday/doctorsday1.png", alt: "Doctor's Day" },
    { id: 102, type: "image", src: "/Gallery/Smartstart/Doctorsday/doctorsday2.png", alt: "Doctor's Day" },
    { id: 103, type: "image", src: "/Gallery/Smartstart/Doctorsday/doctorsday3.png", alt: "Doctor's Day" },
    { id: 104, type: "image", src: "/Gallery/Smartstart/Doctorsday/doctorsday4.png", alt: "Doctor's Day" },
  ],
  2: [ // Science Exhibition
    { id: 201, type: "image", src: "/Gallery/Smartstart/Graduationday/graduationday1.png", alt: "Graduation Day" },
    { id: 202, type: "image", src: "/Gallery/Smartstart/Graduationday/graduationday2.png", alt: "Graduation Day" },
  ],

  4: [ // Graduation Ceremony
    { id: 401, type: "image", src: "/Gallery/MatricKKD/Students/stud1.jpeg", alt: "Students" },
    { id: 402, type: "image", src: "/Gallery/MatricKKD/Students/stud2.jpeg", alt: "Students" },
    { id: 403, type: "image", src: "/Gallery/MatricKKD/Students/stud3.jpeg", alt: "Students" },
    { id: 404, type: "image", src: "/Gallery/MatricKKD/Students/stud4.jpeg", alt: "Students" },
    { id: 405, type: "image", src: "/Gallery/MatricKKD/Students/stud5.jpeg", alt: "Students" },
    { id: 406, type: "image", src: "/Gallery/MatricKKD/Students/stud6.jpeg", alt: "Students" },
  ],
  5: [ // Tech Fest
    { id: 501, type: "image", src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop", alt: "Tech Exhibition" },
  ],
  6: [ // Women's Day
    { id: 601, type: "image", src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop", alt: "Women's Day Event" },
  ],
  7: [ // Art Exhibition
    { id: 701, type: "image", src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop", alt: "Art Display" },
  ],
  8: [ // Tech Symposium
    { id: 801, type: "image", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop", alt: "Symposium" },
  ],
  9: [ // Convocation
    { id: 901, type: "image", src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop", alt: "Convocation" },
  ],
  10: [ // Dance Festival
    { id: 1001, type: "image", src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop", alt: "Dance Performance" },
  ],
  11: [ // Music Concert
    { id: 1101, type: "image", src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop", alt: "Music Concert" },
  ],
  12: [ // University Convocation
    { id: 1201, type: "image", src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop", alt: "University Convocation" },
  ],
  13: [ // Research Symposium
    { id: 1301, type: "image", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop", alt: "Research Presentation" },
  ],
};

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get tab and selected items from URL
  const tab = searchParams.get("tab") || "institutions";
  const institutionId = searchParams.get("institution");
  const eventId = searchParams.get("event");

  // State for lightbox
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab, institutionId, eventId]);

  // Get selected data
  const selectedInstitution = galleryInstitutions.find(i => i.id === parseInt(institutionId));
  const selectedEvent = selectedInstitution?.events.find(e => e.id === parseInt(eventId));
  const currentMedia = eventId ? eventMedia[parseInt(eventId)] || [] : [];

  const meta = TAB_META[tab];

  // Navigation helpers
  const navigateTo = (newTab, params = {}) => {
    const newParams = new URLSearchParams();
    newParams.set("tab", newTab);
    Object.entries(params).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
    });
    setSearchParams(newParams);
  };

  const openLightbox = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = "unset";
  };

  const navigateMedia = (direction) => {
    if (!selectedMedia) return;
    const currentIndex = currentMedia.findIndex(m => m.id === selectedMedia.id);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % currentMedia.length;
    } else {
      newIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
    }
    setSelectedMedia(currentMedia[newIndex]);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #0d2444 45%, #1a3a6b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(74,158,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "52px 24px 36px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 700,
              color: "#4a9eff",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px",
              background: "rgba(74,158,255,0.12)",
              padding: "4px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(74,158,255,0.25)",
            }}
          >
            Gallery
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "12px",
              lineHeight: 1.15,
            }}
          >
            {meta.heading}
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(200,216,240,0.75)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {meta.sub}
          </p>
        </div>

        {/* Tab Strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              gap: "2px",
            }}
          >
            {subNavItems.map((item) => {
              const isActive = tab === item.tab;
              return (
                <Link
                  key={item.tab}
                  to={`/gallery?tab=${item.tab}${institutionId ? `&institution=${institutionId}` : ''}${eventId ? `&event=${eventId}` : ''}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "14px 20px",
                    fontSize: "13px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#fff" : "rgba(200,216,240,0.65)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    borderBottom: isActive ? "3px solid #4a9eff" : "3px solid transparent",
                    background: isActive ? "rgba(74,158,255,0.12)" : "transparent",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.01em",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgba(200,216,240,0.65)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* View: INSTITUTIONS */}
      {tab === "institutions" && (
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryInstitutions.map((institution) => {
                const eventCount = institution.events.length;
                const previewEvent = institution.events[0];

                return (
                  <Card
                    key={institution.id}
                    className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    onClick={() => navigateTo("events", { institution: institution.id })}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "12px",
                            background: "linear-gradient(135deg, #1a3a6b 0%, #4a9eff 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Buildings size={28} color="#fff" weight="duotone" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                            {institution.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={14} />
                            <span className="line-clamp-1">{institution.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <Badge variant="secondary" className="text-xs">
                          {institution.tag}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{eventCount} {eventCount === 1 ? "event" : "events"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* View: EVENTS */}
      {tab === "events" && !institutionId && (
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Select Institution</Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Choose an Institution
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select an institution to view its events
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {galleryInstitutions.map((institution) => (
                <Card
                  key={institution.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigateTo("events", { institution: institution.id })}
                >
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{institution.name}</h3>
                    <Badge variant="outline">{institution.events.length} events</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "events" && institutionId && selectedInstitution && (
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link
                to="/gallery?tab=institutions"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Institutions
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium">{selectedInstitution.name}</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Events at {selectedInstitution.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedInstitution.events.map((event) => {
                const mediaCount = eventMedia[event.id]?.length || 0;

                return (
                  <Card
                    key={event.id}
                    className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    onClick={() => navigateTo("gallery", { institution: institutionId, event: event.id })}
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <Calendar size={48} className="text-blue-300" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {event.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Image size={14} />
                        <span>{mediaCount} {mediaCount === 1 ? "item" : "items"}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* View: GALLERY (Images & Videos) */}
      {tab === "gallery" && (
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <Link
                to="/gallery?tab=institutions"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Institutions
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                to={`/gallery?tab=events&institution=${institutionId}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Events
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium">{selectedEvent?.title}</span>
            </div>

            {selectedEvent && (
              <>
                <div className="mb-8">
                  <Badge variant="secondary" className="mb-2">{selectedEvent.type}</Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>

                {currentMedia.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground">No media available for this event.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentMedia.map((media) => (
                      <div
                        key={media.id}
                        className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openLightbox(media)}
                      >
                        <img
                          src={media.src}
                          alt={media.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          {media.type === "video" ? (
                            <VideoCamera size={32} className="text-white" />
                          ) : (
                            <Image size={32} className="text-white" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* Lightbox — rendered via portal directly into document.body,
          with an inline zIndex as a hard override so it always sits
          above the site header regardless of any header z-index/stacking. */}
      {selectedMedia && createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/95"
          style={{ zIndex: 999999 }}
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            style={{ zIndex: 1000000 }}
            onClick={closeLightbox}
          >
            <X size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            style={{ zIndex: 1000000 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia("prev");
            }}
          >
            <CaretLeft size={32} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            style={{ zIndex: 1000000 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia("next");
            }}
          >
            <CaretRight size={32} />
          </Button>

          <div
            className="max-w-4xl max-h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.src}
                controls
                className="max-w-full max-h-[80vh] rounded-lg"
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
            <div className="text-center mt-4">
              <p className="text-white">{selectedMedia.alt}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}