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
      // Prepare form data for Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", schoolData.web3forms.accessKey);
      formDataToSend.append("subject", `${formData.subject} - From ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("from_name", `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("message", formData.message);
      formDataToSend.append("to", schoolData.contact.email);

      // Send email using Web3Forms
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

      // Reset form
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
        {/* Subtle radial glow */}
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

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        {schoolData.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${schoolData.contact.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {schoolData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Envelope size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${schoolData.contact.email}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {schoolData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 8:00 AM - 4:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sat: 9:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={schoolData.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookLogo size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={schoolData.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterLogo size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={schoolData.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramLogo size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={schoolData.socialMedia.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YoutubeLogo size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={schoolData.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinLogo size={20} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle
                        size={64}
                        weight="duotone"
                        className="text-primary mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleChange("firstName", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleChange("lastName", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                            }
                          rows={5}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Location</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our campus to experience our vibrant community firsthand.
              Schedule a tour today!
            </p>
          </div>

          <div className="aspect-video lg:aspect-[2/1] rounded-lg overflow-hidden">
            <iframe
              src={schoolData.contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            />
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  schoolData.contact.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? Find quick answers to common inquiries below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {schoolData.faqs.slice(0, 4).map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}