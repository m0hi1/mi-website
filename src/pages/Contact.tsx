import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));

    // Clear error when field is edited
    if (errors.agreeToTerms) {
      setErrors((prev) => ({ ...prev, agreeToTerms: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      try {
        setFormStatus("success");
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
            agreeToTerms: false,
          });
          setFormStatus("idle");
        }, 3000);
      } catch (error) {
        setFormStatus("error");
      }
    }, 1500);
  };

  // FAQ data
  const faqs = [
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including automotive, consumer electronics, industrial automation, medical devices, and renewable energy sectors. Our components are designed to meet the specific requirements of each industry.",
    },
    {
      question: "Do you offer custom manufacturing solutions?",
      answer:
        "Yes, we specialize in custom manufacturing solutions tailored to your specific requirements. Our engineering team works closely with clients to design and manufacture components that meet their exact specifications.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "Minimum order quantities vary depending on the product and customization requirements. Please contact our sales team for specific information regarding your needs.",
    },
    {
      question: "How long does it take to fulfill an order?",
      answer:
        "Standard products typically ship within 2-3 weeks. Custom orders may take 4-8 weeks depending on complexity and specifications. We provide detailed timelines during the quotation process.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to customers worldwide. We have established logistics partnerships to ensure reliable and cost-effective shipping to international destinations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background */}
      <div className="relative bg-muted py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22731c9c78?w=1200&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4 font-medium text-sm">
            Get in Touch
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have questions about our products or services? Our team is here to
            help. Reach out to us using the contact information below or fill
            out the form.
          </p>
        </div>
      </div>

      {/* Contact Form and Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  {formStatus === "success" && (
                    <Alert className="mb-6 bg-green-50 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Your message has been sent successfully. Our team will
                        contact you shortly.
                      </AlertDescription>
                    </Alert>
                  )}

                  {formStatus === "error" && (
                    <Alert className="mb-6 bg-red-50 border-red-200">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        There was an error sending your message. Please try
                        again later.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className={errors.name ? "border-red-500" : ""}
                          disabled={formStatus === "submitting"}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          className={errors.email ? "border-red-500" : ""}
                          disabled={formStatus === "submitting"}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          disabled={formStatus === "submitting"}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        className={errors.message ? "border-red-500" : ""}
                        disabled={formStatus === "submitting"}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={handleCheckboxChange}
                        disabled={formStatus === "submitting"}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="agreeToTerms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the privacy policy and terms of service{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        {errors.agreeToTerms && (
                          <p className="text-xs text-red-500">
                            {errors.agreeToTerms}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={
                        formStatus === "submitting" || formStatus === "success"
                      }
                    >
                      {formStatus === "submitting"
                        ? "Sending..."
                        : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <address className="not-italic text-muted-foreground mt-1">
                        8, Industrial Area,
                        <br />
                        Ambala Cantt, India-133 006
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground mt-1">
                        <a
                          href="tel:+911712699935"
                          className="hover:text-primary"
                        >
                          +91-171-2699935
                        </a>
                        <br />
                        <a
                          href="tel:+911712699936"
                          className="hover:text-primary"
                        >
                          +91-171-2699936
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground mt-1">
                        <a
                          href="mailto:info@microinstrumentsco.com"
                          className="hover:text-primary"
                        >
                          info@microinstrumentsco.com
                        </a>
                        <br />
                        <a
                          href="mailto:sales@microinstrumentsco.com"
                          className="hover:text-primary"
                        >
                          sales@microinstrumentsco.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-sm font-medium">
              Our Location
            </div>
            <h2 className="text-3xl font-bold">Find Us</h2>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Placeholder for an actual map integration */}
            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium">Map Placeholder</p>
                <p className="text-muted-foreground">
                  In a real implementation, an interactive map would be
                  displayed here.
                </p>
                <Button className="mt-4" variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-sm font-medium">
              Common Questions
            </div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Don't see your question here? Contact our support team.
              </p>
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
