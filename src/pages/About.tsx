import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
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
            About Microinstruments Co.
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Engineering Excellence{" "}
            <span className="text-primary">Since 1985</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Pioneering precision electromechanical components for industrial
            applications with a commitment to quality, innovation, and customer
            satisfaction.
          </p>
        </div>
      </div>

      {/* Company History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-sm font-medium">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold mb-6">Company History</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1985, Microinstruments Co. began as a small workshop
                specializing in precision motors for industrial applications.
                Over the decades, we've grown into a leading manufacturer of
                electromechanical components serving clients worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been marked by continuous innovation, strategic
                expansions, and an unwavering commitment to engineering
                excellence. From our humble beginnings to our current
                state-of-the-art manufacturing facilities, we've maintained our
                founding principles of precision, reliability, and customer
                focus.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">1985</span>
                  </div>
                  <span className="text-sm">Founded</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">15+</span>
                  </div>
                  <span className="text-sm">Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">500+</span>
                  </div>
                  <span className="text-sm">Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">5000+</span>
                  </div>
                  <span className="text-sm">Clients</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22731c9c78?w=800&q=80"
                alt="Company History"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="https://api.dicebear.com/7.x/shapes/svg?seed=iso9001"
                  alt="ISO 9001"
                  className="h-16 w-16"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-sm font-medium">
              Our Purpose
            </div>
            <h2 className="text-3xl font-bold">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-center">
                  To deliver precision-engineered electromechanical components
                  that exceed industry standards, while providing exceptional
                  value and service to our customers. We are committed to
                  continuous innovation and sustainable manufacturing practices
                  that respect our environment and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-center">
                  To be the global leader in electromechanical component
                  manufacturing, recognized for our technical excellence,
                  reliability, and customer-focused approach. We aim to drive
                  industry innovation through advanced engineering solutions
                  that power the technologies of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-sm font-medium">
              What We Stand For
            </div>
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground text-sm">
                  We maintain the highest standards in every component we
                  manufacture, ensuring reliability and performance that exceeds
                  expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2v20"></path>
                    <path d="m4.93 10.93 14.14-7.07"></path>
                    <path d="M4.93 13.07 19.07 20"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We continuously explore new technologies and methods to
                  advance our products and manufacturing processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Customer Focus</h3>
                <p className="text-muted-foreground text-sm">
                  We prioritize understanding and meeting our customers' needs,
                  building long-term relationships based on trust and
                  reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  We are committed to environmentally responsible manufacturing
                  practices and reducing our ecological footprint.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-sm font-medium">
              Our Facilities
            </div>
            <h2 className="text-3xl font-bold">Manufacturing Capabilities</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our state-of-the-art facilities combine precision engineering with
              advanced technology to deliver components of exceptional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" x2="8" y1="16" y2="16"></line>
                  <line x1="16" x2="16" y1="16" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Precision Engineering</h3>
              <p className="text-muted-foreground text-sm">
                Our engineering team utilizes advanced CAD/CAM systems for
                precise design and manufacturing, ensuring components meet exact
                specifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path>
                  <path d="M9 17h6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Automated Production</h3>
              <p className="text-muted-foreground text-sm">
                Our automated production lines combine efficiency with
                precision, allowing us to maintain consistent quality while
                meeting high volume demands.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Control</h3>
              <p className="text-muted-foreground text-sm">
                Every component undergoes rigorous testing and inspection to
                ensure it meets our exacting standards before leaving our
                facility.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="px-8">
              Learn More About Our Facilities
            </Button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-sm font-medium">
              Our People
            </div>
            <h2 className="text-3xl font-bold">Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Meet the experienced professionals guiding our company's vision
              and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Chief Executive Officer",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ceo",
              },
              {
                name: "Sarah Chen",
                position: "Chief Technology Officer",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=cto",
              },
              {
                name: "Michael Rodriguez",
                position: "Head of Manufacturing",
                image:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=manufacturing",
              },
              {
                name: "Priya Sharma",
                position: "Quality Assurance Director",
                image:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=quality",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-muted p-6 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-white"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {member.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Contact our team to discuss how our precision-engineered components
            can meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary/20 hover:bg-primary/30 border-primary-foreground/20"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
