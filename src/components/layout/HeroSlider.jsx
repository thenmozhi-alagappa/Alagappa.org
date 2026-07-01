import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 1,
    image: "/sliders/Matric_Campus_2.png",
    alt: "Welcome to Smart Start Play School",
    label: "DO YOU NEED ANY HELP?",
    heading: "WELCOME TO\n Alagappa Groups\nof Educational Institutions",
    cta: "READ MORE",
  },
  {
    id: 2,
    image: "/sliders/Montessoristud.jpg",
    alt: "Nurturing Every Young Mind",
    label: "EXCELLENCE IN EDUCATION",
    heading: "NURTURING\nEVERY YOUNG\nMIND DAILY",
    cta: "READ MORE",
  },
  {
    id: 3,
    image: "/sliders/Matric_Campus.png",
    alt: "Inspiring Creativity Every Day",
    label: "CREATIVE LEARNING",
    heading: "INSPIRING\nCREATIVITY\nEVERY DAY",
    cta: "EXPLORE NOW",
  },
  {
    id: 4,
    image: "/sliders/Matric_Campus.png",
    alt: "Building Future Champions",
    label: "SPORTS & ACTIVITIES",
    heading: "BUILDING\nFUTURE\nCHAMPIONS",
    cta: "READ MORE",
  },
];

const bottomCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#004B8E" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="#004B8E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Alagappa Buzz",
    link: "Read More",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#004B8E" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#004B8E" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "The Inspire Zone - Alumni Newsletter",
    link: "Read More",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#004B8E" strokeWidth="2"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#004B8E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Alagappa Waves",
    link: "Read More",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative overflow-hidden" style={{ fontFamily: "sans-serif" }}>
      <Carousel
        className="w-full"
        opts={{ loop: true, autoplay: true, autoplayInterval: 5000 }}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative" style={{ minHeight: "677px" }}>

                {/* FULL-BLEED BACKGROUND IMAGE */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    style={{
  objectPosition: "center 35%",
}}
                  />
                </div>

                {/* DARK OVERLAY over entire image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "rgba(5, 15, 35, 0.62)",
                    zIndex: 1,
                  }}
                />

                {/* LEFT-ALIGNED TEXT CONTENT */}
                <div
                  className="absolute z-20 flex flex-col justify-center"
                  style={{
                    top: 0,
                    left: 0,
                    bottom: "110px",
                    padding: "0 4rem",
                  
                   
                  }}
                >
                  {/* Small label above heading */}
                  <p
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      marginBottom: "14px",
                    }}
                  >
                    {slide.label}
                  </p>

                  {/* BIG BOLD HEADING */}
                  <h1
                    style={{
                      color: "#ffffff",
                      fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                      fontWeight: 900,
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                      textTransform: "uppercase",
                      marginBottom: "32px",
                      
                      whiteSpace: "pre-line",
                      textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                    }}
                  >
                    {slide.heading}
                  </h1>

                  {/* CTA Button */}
                  <div>
                    <button
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#004B8E",
                        color: "#fff",
                        border: "none",
                        borderRadius: "3px",
                        padding: "11px 26px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        boxShadow: "0 4px 18px rgba(0,75,142,0.45)",
                      }}
                    >
                      {slide.cta}
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7h10M8 3l4 4-4 4"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* BOTTOM INFO BAR */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-20"
                  style={{
                    background: "rgba(8, 20, 48, 0.88)",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    marginBottom:"50px",
                    margin:"40px",
                    padding:"15px",
                    
                  }}
                >
                  <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px !important", 
  }}
>
                    {bottomCards.map((card, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "18px 28px",
                          borderRight:
                            i < bottomCards.length - 1
                              ? "1px solid rgba(255,255,255,0.1)"
                              : "none",
                          cursor: "pointer",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,75,142,0.35)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        {/* Icon box */}
                        <div
                          style={{
                            background: "rgba(255,255,255,0.92)",
                            borderRadius: "4px",
                            padding: "8px",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {card.icon}
                        </div>

                        {/* Text */}
                        <div>
                          <p
                            style={{
                              color: "#ffffff",
                              fontSize: "0.8rem",
                              fontWeight: 800,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              margin: 0,
                              marginBottom: "4px",
                            }}
                          >
                            {card.title}
                          </p>
                          <span
                            style={{
                              color: "#f0a500",
                              fontSize: "0.72rem",
                              fontWeight: 600,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            {card.link}
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                              <path
                                d="M2 7h10M8 3l4 4-4 4"
                                stroke="#f0a500"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-4 border-0 text-white z-30"
          style={{ background: "rgba(255,255,255,0.15)", top: "calc(50% - 55px)" }}
        />
        <CarouselNext
          className="right-4 border-0 text-white z-30"
          style={{ background: "#004B8E", top: "calc(50% - 55px)" }}
        />
      </Carousel>
    </section>
  );
}