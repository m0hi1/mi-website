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
import ImageWithFallback from "@/components/ImageWithFallback";
import Layout from "@/components/Layout";

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
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header with Background */}      <div className="relative bg-muted py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <ImageWithFallback
              src="/company/building.png"
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
                <Card className="bg-white overflow-hidden">
                  <div className="bg-primary py-6 px-6">
                    <h2 className="text-2xl font-bold text-primary-foreground mb-2">Send Us a Message</h2>
                    <p className="text-primary-foreground/80">We're here to help with any questions you might have.</p>
                  </div>
                  <CardContent className="p-6 pt-8">
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

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-medium">
                            Full Name <span className="text-red-500">*</span>
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
                          <Label htmlFor="email" className="font-medium">
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

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="font-medium">Company</Label>
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
                          <Label htmlFor="phone" className="font-medium">Phone</Label>
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
                        <Label htmlFor="message" className="font-medium">
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
                      </div>                    <Button
                        type="submit"
                        className="w-full py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={
                          formStatus === "submitting" || formStatus === "success"
                        }
                      >
                        {formStatus === "submitting" ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          <>Send Message <Mail className="ml-2 h-5 w-5" /></>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="overflow-hidden">
                  <div className="bg-primary py-6 px-6">
                    <h2 className="text-2xl font-bold text-primary-foreground mb-2">Contact Information</h2>
                    <p className="text-primary-foreground/80">Reach out to us directly using the information below.</p>
                  </div>
                  <CardContent className="p-6 space-y-6">
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
                            className="hover:text-primary flex items-center"
                          >
                            <span>+91-171-2699935</span>
                          </a>
                          <a
                            href="tel:+911712699936"
                            className="hover:text-primary flex items-center mt-1"
                          >
                            <span>+91-171-2699936</span>
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
                            className="hover:text-primary flex items-center"
                          >
                            <span>info@microinstrumentsco.com</span>
                          </a>
                          <a
                            href="mailto:sales@microinstrumentsco.com"
                            className="hover:text-primary flex items-center mt-1"
                          >
                            <span>sales@microinstrumentsco.com</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  
                    <div className="border-t pt-6 mt-6">
                      <h3 className="font-medium mb-3">Business Hours</h3>
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
                  </CardContent>
                </Card>
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
              {/* Actual map integration */}
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5872109232475!2d76.84153837458622!3d30.05221471990835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f97a226f64667%3A0x405b26a79eb93c3e!2sIndustrial%20Area%20Phase%202%2C%20Chandigarh%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1715313434186!5m2!1sen!2sus" 
                  width="100%" 
                  height="500" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Micro Instruments Co. Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4 bg-white border-t flex justify-between items-center">
                <div className="flex items-center">
                  <MapPin className="text-primary mr-2" size={18} />
                  <p className="text-muted-foreground">8, Industrial Area, Ambala Cantt, India-133 006</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=8+Industrial+Area+Ambala+Cantt+India" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary hover:text-primary/80"
                >
                  <Button variant="outline" className="flex items-center">
                    Get Directions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="M18 8L22 12L18 16"></path>
                      <path d="M2 12H22"></path>
                    </svg>
                  </Button>
                </a>
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
                <Button variant="default" className="shadow-md hover:shadow-lg transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
