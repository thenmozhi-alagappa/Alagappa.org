import { useState } from "react";
import {
  MapPin,
  Phone,
  Envelope,
  Clock,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  CheckCircle,
  Globe,
  GraduationCap,
  BookOpen,
  Wrench,
  Buildings,
} from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { schoolData } from "@/data/schoolData";

// Institution contact details - organized by category
const institutionContacts = {
  primary: {
    title: "Primary Institutions",
    icon: BookOpen,
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    institutions: [
     
       {
        id: 1,
        name: "Alagappa Montessori",
        address: "Alagappapuram, Karaikudi– 630 003",
        phone: "04565-230395",
        email: "montessori@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=5661745654180683299&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
      {
        id: 2,
        name: "Alagappa Smart Start Play School and Daycare",
        address: "Karaikudi, Tamil Nadu",
        phone: "044 – 4997 1111",
        email: " smartstartplayschool@alagappa.org",
        website: "#",
        mapUrl: "https://maps.google.com/?q=Karaikudi+Tamil+Nadu",
      },

      {
        id: 3,
        name: "Umayal Play School",
        address: "No.90, Dr. Alagappa road, Purasawalkam, Chennai - 600084",
        phone: "044- 26422008 /26423545",
        email: " firdouse@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=16139538805760220198&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
       {
        id: 4,
        name: "Alagappa Basic School",
        address: "Alagappapuram, Karaikudi– 630 003",
        phone: "9487335566",
        email: " basic@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=10253306288998204672&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
    ],
  },
  secondary: {
    title: "Secondary Institutions",
    icon: GraduationCap,
    color: "from-indigo-50 to-indigo-100",
    borderColor: "border-indigo-200",
    institutions: [
      {
        id: 5,
        name: "Alagappa Matric Hr. Sec School (Karaikudi)",
        address: "Karaikudi, Tamil Nadu",
        phone: "04565-225527",
        email: "matrickkd@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps/place/Alagappa+Schools/@13.0827637,80.2552007,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5265e00f53ebc1:0xdffb29086bf85c26!8m2!3d13.0827637!4d80.2552007!16s%2Fg%2F1td0lfjt?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        id: 6,
        name: "Alagappa Matric Hr. Sec School (Chennai)",
        address: "Purasawalkam, Chennai, Tamil Nadu",
        phone: "044 – 26422008 / 26423545",
        email: "alagappa.schools@gmail.com",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=5661745654180683299&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
      {
        id: 7,
        name: "Alagappa Girls Higher Secondary School",
        address: "Karaikudi, Tamil Nadu",
        phone: "+91 44 4997 1111",
        email: "girls@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=5661745654180683299&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
      {
        id: 8,
        name: "Alagappa CBSE Academy (Karaikudi)",
        address: "Karaikudi, Tamil Nadu",
        phone: "044 – 4997 1111",
        email: " cbse@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=5661745654180683299&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
      {
        id: 9,
        name: "Alagappa CBSE Academy (Chennai)",
        address: "Chennai, Tamil Nadu",
        phone: "044 – 26422008 / 26423545",
        email: "alagappa.schools@gmail.com",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=5661745654180683299&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
    ],
  },
  professional: {
    title: "Professional Institutions",
    icon: Wrench,
    color: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    institutions: [
      {
        id: 10,
        name: "Dr. Umayal Ramanathan College for Women",
        address: "Karaikudi, Tamil Nadu",
        phone: "044 – 4997 1111",
        email: " womenscollege@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=15475786132785785521&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
      {
        id: 11,
        name: "Alagappa College of Nursing",
        address: "Karaikudi, Tamil Nadu",
        phone: "044 – 4997 1111",
        email: "nursing@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=15475786132785785521&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
      {
        id: 12,
        name: "Alagappa Institute of Technology",
        address: "Chennai & Karaikudi, Tamil Nadu",
        phone: "044 – 42174904 / 45570122",
        email: "naresh@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=16139538805760220198&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
    
    
    ],
  },
  vocational: {
    title: "Vocational Institutions",
    icon: Buildings,
    color: "from-teal-50 to-teal-100",
    borderColor: "border-teal-200",
    institutions: [
     {
        id: 13,
        name: "ALAGAPPA PERFORMING ARTS ACADEMY",
        address: "Chennai & USA",
        phone: "73585 96403",
        email: "customersupport@alagappaarts.com",
        website: "#",
        mapUrl: "https://www.google.com/maps?cid=16139538805760220198&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
      },
        {
        id: 14,
        name: "ALAGAPPA PERFORMING ARTS ACADEMY",
        address: " Karaikudi, Tamil Nadu",
        phone: "044 4997 1111",
        email: "performingarts@alagappa.org",
        website: "#",
        mapUrl: "https://www.google.com/maps/place/Alagappa+College+of+Performing+Arts/@10.0806963,78.7900204,17z/data=!3m1!4b1!4m6!3m5!1s0x3b006777952d5e6f:0x8c9305ce8cdb7aa9!8m2!3d10.0806963!4d78.7926007!16s%2Fg%2F11bxf_l1dx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", schoolData.web3forms.accessKey);
      formDataToSend.append("subject", `${formData.subject} - From ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("from_name", `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("message", formData.message);
      formDataToSend.append("to", schoolData.contact.email);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setSubmitted(true);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false,
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Web3Forms Error:", error);
      toast.error("Failed to send message. Please try again.", {
        description: "You can also email us directly at " + schoolData.contact.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
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
            Contact Us
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
            Get in Touch
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
            We welcome your questions, comments, and interest in our school. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* ── Institution Contacts by Category ── */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Institutions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Contact All Our Institutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the contact details for any of our institutions. Click the buttons to view on map or visit website.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {Object.entries(institutionContacts).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <div key={key} className="rounded-xl overflow-hidden shadow-lg">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} px-6 py-4 border-b ${category.borderColor}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center shadow-sm">
                        <Icon size={20} className="text-slate-700" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                      <Badge variant="outline" className="ml-auto bg-white/50">
                        {category.institutions.length} {category.institutions.length === 1 ? "Institution" : "Institutions"}
                      </Badge>
                    </div>
                  </div>

                  {/* Institution Table */}
                  <div className="overflow-x-auto bg-white">
                    <table className="w-full min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left py-3 px-4 font-semibold text-sm text-slate-600 w-[200px]">Institution</th>
                          <th className="text-left py-3 px-4 font-semibold text-sm text-slate-600">Address</th>
                          <th className="text-left py-3 px-4 font-semibold text-sm text-slate-600 w-[140px]">Phone</th>
                          <th className="text-left py-3 px-4 font-semibold text-sm text-slate-600 w-[180px]">Email</th>
                          <th className="text-center py-3 px-4 font-semibold text-sm text-slate-600 w-[160px]">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.institutions.map((institution, idx) => (
                          <tr
                            key={institution.id}
                            className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/50 transition-colors border-b border-slate-100`}
                          >
                            <td className="py-3 px-4">
                              <div className="font-medium text-slate-800 text-sm">{institution.name}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-slate-400 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{institution.address}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Phone size={14} className="text-slate-400 flex-shrink-0" />
                                <a href={`tel:${institution.phone}`} className="text-sm text-slate-600 hover:text-blue-600">
                                  {institution.phone}
                                </a>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Envelope size={14} className="text-slate-400 flex-shrink-0" />
                                <a href={`mailto:${institution.email}`} className="text-sm text-slate-600 hover:text-blue-600 truncate">
                                  {institution.email}
                                </a>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center justify-center gap-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-7 text-xs border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                                  asChild
                                >
                                  <a href={institution.mapUrl} target="_blank" rel="noopener noreferrer">
                                    <MapPin size={10} className="mr-1" />
                                    Map
                                  </a>
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-7 text-xs border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                                  asChild
                                >
                                  {/* <a href={institution.website} target="_blank" rel="noopener noreferrer">
                                    <Globe size={10} className="mr-1" />
                                    Web
                                  </a> */}
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    

  
    </div>
  );
}