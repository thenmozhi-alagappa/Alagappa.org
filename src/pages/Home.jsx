import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Newspaper,
  GraduationCap,
  Buildings,
  MapPin,
} from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { schoolData } from "@/data/schoolData";
import HeroSlider from "../components/layout/HeroSlider";
const stats = [
  {
    label: "Graduates Since Inception",
    value: schoolData.statistics.students,
    icon: GraduationCap,
    suffix: "+",
  },
  {
    label: "Years of Excellence",
    value: schoolData.statistics.events,
    icon: Calendar,
    suffix: "+",
  },
  {
    label: "Institutions",
    value: schoolData.statistics.volunteers,
    icon: Buildings,
    suffix: "+",
  },
  {
    label: "Cities — Chennai & Karaikudi",
    value: schoolData.statistics.clubs,
    icon: MapPin,
    suffix: "",
  },
];

const institutionCategories = [
  {
    id: "primary",
    label: "Primary",
    count: 3,
    items: [
      {
        initials: "AB",
        name: "Alagappa Basic School",
        city: "Karaikudi",
        logo: "/logos/basicschl.png",
      },
      {
        initials: "AB",
        name: "Alagappa Smart Start Play School and Daycare Center",
        city: "Karaikudi",
        logo: "/logos/smartstart.png",
      },
      {
        initials: "AM",
        name: "Alagappa Montessori",
        city: "Karaikudi",
        logo: "/logos/montessori.png",
      },
      {
        initials: "UP",
        name: "Umayal Play School",
        city: "Chennai",
        logo: "/logos/umayalPlayschl.png",
      },
    ],
  },
  {
    id: "secondary",
    label: "Secondary",
    count: 5,
    items: [
      {
        initials: "AM",
        name: "Alagappa Matric Hr. Sec School",
        city: "Chennai",
        logo: "/logos/cbsechn.png",
      },
      {
        initials: "AM",
        name: "Alagappa Matric Hr. Sec School",
        city: "Karaikudi",
        logo: "/logos/matric.png",
      },
      {
        initials: "AC",
        name: "Alagappa CBSE Academy",
        city: "Karaikudi",
        logo: "/logos/cbse.png",
      },
      {
        initials: "AC",
        name: "Alagappa CBSE Academy",
        city: "Chennai",
        logo: "/logos/cbsechn.png",
      },
      {
        initials: "AG",
        name: "Alagappa Girls Matric School",
        city: "Karaikudi",
        logo: "/logos/girls.png",
      },
    ],
  },
  {
    id: "professional",
    label: "Professional",
    count: 2,
    items: [
      {
        initials: "DR",
        name: "Dr. Umayal Ramanathan College for Women",
        city: "Karaikudi",
        logo: "/logos/urcw.png",
      },
      {
        initials: "AN",
        name: "Alagappa College of Nursing",
        city: "Karaikudi",
        logo: "/logos/nursing.png",
      },
    ],
  },
  {
    id: "vocational",
    label: "Vocational",
    count: 2,
    items: [
      {
        initials: "PA",
        name: "Alagappa Performing Arts Academy",
        city: "Karaikudi",
        logo: "/logos/apaa.png",
      },
      {
        initials: "AI",
        name: "Alagappa Institute of Technology",
        city: "Chennai & Karaikudi",
        logo: "/logos/algtechinst.png",
      },
    ],
  },
];

const govInstitutions = [
  {
    initials: "AU",
    name: "Alagappa University",
    city: "Karaikudi",
    logo: "/logos/alagappauniversity.png",
  },
  {
    initials: "AC",
    name: "Alagappa College of Technology",
    city: "Chennai",
    logo: "/logos/algclgtech.png",
  },
  {
    initials: "AE",
    name: "Alagappa College of Engg & Technology",
    city: "Karaikudi",
    logo: "/logos/algclgengg.png",
  },
  {
    initials: "AG",
    name: "Alagappa Govt Arts College",
    city: "Karaikudi",
    logo: "/logos/algarts.png",
  },
  {
    initials: "AW",
    name: "Alagappa Govt Women's College",
    city: "Karaikudi",
    logo: "/logos/algwomens.png",
  },
];

// Reusable logo component — shows image if available, falls back to initials
function InstitutionLogo({ logo, initials, size = "lg" }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isLg = size === "lg";

  const handleError = () => {
    if (!imgLoaded) {
      setImgError(true);
    }
  };

  const handleLoad = () => {
    setImgLoaded(true);
    setImgError(false);
  };

  if (!imgError && logo) {
    return (
      <img
        src={logo}
        alt={initials}
        onError={handleError}
        onLoad={handleLoad}
        className={`object-contain ${isLg ? "w-32 h-32" : "w-28 h-28"}`}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#E6F1FB] text-[#004B8E] font-bold ${
        isLg ? "w-32 h-32 text-2xl" : "w-28 h-28 text-xl"
      }`}
    >
      {initials}
    </div>
  );
}

function InstitutionsSection() {
  const [active, setActive] = useState("primary");
  const current = institutionCategories.find((c) => c.id === active);

  return (
    <section
      className="bg-muted/30"
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        marginLeft: "4rem",
        marginRight: "4rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Institutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Spanning primary to professional education across Chennai &
            Karaikudi.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {institutionCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active === cat.id
                  ? "bg-[#004B8E] text-white border-[#004B8E]"
                  : "bg-background text-muted-foreground border-border hover:border-[#004B8E] hover:text-[#004B8E]"
              }`}
            >
              {cat.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                  active === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-[#E6F1FB] text-[#004B8E]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Institution Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {current.items.map((inst, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-1"
            >
              <InstitutionLogo
                logo={inst.logo}
                initials={inst.initials}
                size="lg"
              />
              <div>
                <p className="text-base font-medium leading-snug">
                  {inst.name}
                </p>
                <p className="text-sm text-[#0066c2] mt-1 flex items-center justify-center gap-1">
                  <MapPin size={12} />
                  {inst.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Government Institutions */}
        <div className="mt-6">
            <p className="text-base font-medium text-[#004B8E] flex items-center gap-2 mb-6">
              <Buildings size={18} />
              Managed by the State Government of Tamil Nadu
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {govInstitutions.map((inst, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-1"
                >
                  <InstitutionLogo
                    logo={inst.logo}
                    initials={inst.initials}
                    size="lg"
                  />
                  <div>
                    <p className="text-sm font-medium leading-snug text-gray-800">
                      {inst.name}
                    </p>
                    <p className="text-sm text-[#0066c2] mt-1 flex items-center justify-center gap-1">
                      <MapPin size={12} />
                      {inst.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
    
     {/* Stats Section */}
<section className="py-12 bg-muted/30">
  <div className="w-full px-4 flex justify-center">
    <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="stats-gradient stats-card rounded-2xl p-[2px]"
        >
          <div className="rounded-[14px] bg-background/95 backdrop-blur-md h-full">
            <div className="flex flex-col items-center justify-center p-4 text-center min-h-[130px]">
              <stat.icon
                size={28}
                weight="duotone"
                className="text-primary mb-2"
              />
              <span className="text-2xl lg:text-3xl font-bold">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="mt-1 text-xs lg:text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Institutions Section */}
      <InstitutionsSection />



    </div>
  );
}