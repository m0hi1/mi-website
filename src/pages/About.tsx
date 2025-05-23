import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import { 
  Shield, Target, ShieldCheck, Lightbulb, Users, Leaf, 
  Cpu, Factory, ClipboardCheck, Building, Award, 
  Briefcase, Eye, MessageSquare
} from "lucide-react";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header with Background */}
        <div className="relative bg-muted py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <ImageWithFallback
              src="/company/building.png"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4 font-medium text-sm">
              About Micro Instruments Co.
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Engineering Excellence{" "}
              <span className="text-primary">Since 1989</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              An organization well known for its design capability, test facilities, 
              product quality and reliability in electromechanical components and BLDC motors.
            </p>
          </div>
        </div>        {/* Navigation Menu */}
        <div className="sticky top-16 z-30 bg-background border-b border-border shadow-sm">
          <div className="container mx-auto overflow-x-auto">
            <div className="flex space-x-8 py-4">
              <button
                onClick={() => scrollToSection("about")}
                className={`whitespace-nowrap px-1 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === "about"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-border hover:text-foreground"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("history")}
                className={`whitespace-nowrap px-1 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === "history"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-border hover:text-foreground"
                }`}
              >
                History
              </button>
              <button
                onClick={() => scrollToSection("infrastructure")}
                className={`whitespace-nowrap px-1 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === "infrastructure"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-border hover:text-foreground"
                }`}
              >
                Infrastructure
              </button>
              <button
                onClick={() => scrollToSection("capabilities")}
                className={`whitespace-nowrap px-1 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === "capabilities"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-border hover:text-foreground"
                }`}
              >
                Our Capabilities
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className={`whitespace-nowrap px-1 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === "vision"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-border hover:text-foreground"
                }`}
              >
                Vision & Mission
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`whitespace-nowrap px-1 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === "team"
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-border hover:text-foreground"
                }`}
              >
                Management Team
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 py-8">
            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {/* About Us Section */}
              <section id="about" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Micro Instruments Co. is an organization that is well known for its design capability, 
                      test facilities, product quality and reliability.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Beginning in 1989, Micro Instruments Co. today caters to a wide variety of OEM requirements 
                      of motors, e.g. for Refrigerators, Air Conditioners, Visi coolers, Telecommunications and 
                      other Electronics equipment. Some products have been designed and manufactured for automotive 
                      under the hood application as well.
                    </p>
                    <p className="text-muted-foreground">
                      Applied Technological and engineering capabilities for brushless motors allow us to introduce 
                      innovative new energy efficient products like Brushless Motor Ceiling Fan. We do the hard work 
                      so you can enjoy electricity savings without compromising on the comfort.
                    </p>
                  </div>
                  <div>
                    <Card className="overflow-hidden">
                      <ImageWithFallback
                        src="/company/front-doot.png"
                        alt="Micro Instruments Facility"
                        className="w-full h-auto"
                      />
                    </Card>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  Micro Instruments Specializes in design and manufacture BLDC motors and energy efficient ceiling fans. 
                  We are located at Ambala Cantt, Haryana. Our mission is to design energy efficient products to assist 
                  those in energy poverty. We specialize in cost effective products for existing facility. All work that 
                  we perform is supervised by our well qualified engineers and managers. Integrity, honesty, cost efficiency 
                  and great products are the strength of our business.
                </p>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" /> Our Strength
                  </h3>
                  <p className="text-muted-foreground">
                    R&D is a major strength of Micro Instruments. With a strong team of Engineers in various disciplines 
                    including Electrical, Mechanical, Electronic Hardware, Software Development and Tool Design/Manufacture 
                    it truly has multidiscipline capability. It is not dependent on external resources for any of its 
                    development needs. With recent addition of a basic Rapid Prototyping machine, it can develop prototypes 
                    and products even faster now.
                  </p>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">History</h2>
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Beginning with Motors in 1989, Micro Instruments Co. caters to a wide variety of OEM requirements for 
                      Refrigerators, Washing Machines, Air Conditioners, Visicoolers, Telecommunication and other electronics equipment.
                    </p>
                    <p className="text-muted-foreground">
                      Applied technological and engineering capabilities allow Micro to continually introduce innovative new products 
                      and applications that meet each customer's specifications. Product design, development are performed by dedicated 
                      engineering teams. Micro's dedication to innovative design and manufacturing excellence has propelled them to the 
                      forefront of equipment suppliers to above mentioned market segments.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1989</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">197+</div>
                    <div className="text-sm text-muted-foreground">Employees</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3M+</div>
                    <div className="text-sm text-muted-foreground">Motors/Year</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                    <div className="text-sm text-muted-foreground">9001 Certified</div>
                  </div>
                </div>
              </section>

              {/* Infrastructure Section */}
              <section id="infrastructure" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">Infrastructure</h2>
                <p className="text-muted-foreground mb-6">
                  The company's manufacturing and design capabilities provides an advantage over the competition.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <Building className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-bold text-lg mb-2">Facility Size</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Land - 45,000 sq. ft.</li>
                        <li>• Covered Area - 30,000 sq. ft.</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-bold text-lg mb-2">Workforce</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Over 197 highly skilled employees</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <Factory className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-bold text-lg mb-2">Production</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Production Capacity 3 million motors/year</li>
                        <li>• Complete test facilities for FHP motors</li>
                        <li>• Fully Equipped In-house Injection Moulding division</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ImageWithFallback
                    src="/company/building.png"
                    alt="Facility"
                    className="rounded-lg hover:opacity-90 transition-opacity"
                  />
                  <ImageWithFallback
                    src="/company/quality policy.jpg"
                    alt="Quality Policy"
                    className="rounded-lg hover:opacity-90 transition-opacity"
                  />
                  <ImageWithFallback
                    src="/company/Our Clients.jpg"
                    alt="Our Clients"
                    className="rounded-lg hover:opacity-90 transition-opacity"
                  />
                </div>
              </section>

              {/* Capabilities Section */}
              <section id="capabilities" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">Our Capabilities</h2>
                <p className="text-muted-foreground mb-6">
                  We have the following capabilities:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Cpu className="text-primary h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">Design Excellence</h3>
                          <p className="text-muted-foreground mt-2">
                            Design of Motors, Electromechanical Components, Valves etc.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Factory className="text-primary h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">Manufacturing</h3>
                          <p className="text-muted-foreground mt-2">
                            Tools/Dies/Fixture Development (Injection Moulds, PR Die Casting Tools Cutting and Bending Tools)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-muted p-6 rounded-lg text-center">
                  <div className="inline-flex items-center mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <ShieldCheck className="h-4 w-4 mr-1" /> ISO 9001 Certified
                  </div>
                  <p className="text-muted-foreground">
                    For our commitment to quality, we have acquired the ISO 9001 certification from Underwriters Laboratories, USA.
                  </p>
                </div>
              </section>

              {/* Vision and Mission */}
              <section id="vision" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">Vision and Mission</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                        <Eye className="text-primary h-6 w-6" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-center">
                        Our Vision
                      </h3>
                      <p className="text-muted-foreground text-center">
                        Do the RIGHT thing for the Company, its Employees, Customers and the Community. 
                        With this foundation generate value for the customer, society and the economy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                        <Target className="text-primary h-6 w-6" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-center">
                        Our Mission
                      </h3>
                      <p className="text-muted-foreground text-center">
                        Create an international quality motor manufacturing organization capable of 
                        serving the appliance and the automotive sectors.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Management Team */}
              <section id="team" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">Management Team</h2>
                
                <Card className="overflow-hidden mb-8">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-muted p-6 flex items-center justify-center">
                      <ImageWithFallback
                        src="/images/team/md.png"
                        alt="Mr. Rajni Kant"
                        className="w-48 h-48 rounded-full border-4 border-white object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold mb-2">Mr. Rajni Kant</h3>
                      <p className="text-primary font-medium mb-4">Managing Director</p>
                      <p className="text-muted-foreground mb-4">
                        MS (Electrical Engineering), MBA
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Mr. Rajni Kant is Managing Director of Micro Instruments Co., Ambala Cantt, an 
                        indigenous R&D based company dedicated to research, design, development and production 
                        of high quality, long-life, fractional horsepower motors, fans, and electromechanical 
                        components. The products are widely used by Multinational and National Appliance 
                        Manufacturers and also by automotive industries.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        From 1974-77 he worked as Senior Design Engineer with Fairchild Camera and Instruments, 
                        followed by a year with Monolithic Inc. In 1978 he joined Raytheon Company and worked there 
                        until 1985 as operations manager. From 1985-87 he was Vice President of International Microcircuits. 
                        Rajni has 4 patents to his credit in the field of Semiconductors and has published few papers 
                        in the area of Semiconductor Design. He was instrumental in developing 'Radiation Hardened Technology 
                        for ICBM Missiles for Lockheed.
                      </p>
                      <p className="text-muted-foreground">
                        Mr. Kant returned to India in 1987 and funded the Micro Instruments Co. Presently Micro Instruments 
                        is engaged in developing high-efficiency electronically commutated motors (Brushless DC Motors) 
                        for Appliances and automotive Applications. A recent development is BLDC motor based state of the art 
                        Super-efficient low-wattage Ceiling Fans.
                      </p>
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p>
                          Mr. Kant received his B.E. (Hons.) degree in Electrical Engineering from BITs. Pilani in 1972, 
                          M.S. Electrical Engineering with focus on Semiconductor Design from University of California, Berkeley 
                          in 1973 and MBA from Santa Clara University, California in 1976.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-32">
                <Card>
                  <CardContent className="p-6">                    <h3 className="text-lg font-bold mb-4 border-b pb-2">Quick Navigation</h3>                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => scrollToSection("about")}
                          className={`flex items-center w-full p-2 rounded-md text-sm transition-colors ${
                            activeSection === "about"
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          }`}
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          About Us
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("history")}
                          className={`flex items-center w-full p-2 rounded-md text-sm transition-colors ${
                            activeSection === "history"
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Briefcase className="h-4 w-4 mr-2" />
                          History
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("infrastructure")}
                          className={`flex items-center w-full p-2 rounded-md text-sm transition-colors ${
                            activeSection === "infrastructure"
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Building className="h-4 w-4 mr-2" />
                          Infrastructure
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("capabilities")}
                          className={`flex items-center w-full p-2 rounded-md text-sm transition-colors ${
                            activeSection === "capabilities"
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Award className="h-4 w-4 mr-2" />
                          Our Capabilities
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("vision")}
                          className={`flex items-center w-full p-2 rounded-md text-sm transition-colors ${
                            activeSection === "vision"
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Vision & Mission
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("team")}
                          className={`flex items-center w-full p-2 rounded-md text-sm transition-colors ${
                            activeSection === "team"
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Management Team
                        </button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                    <p className="text-muted-foreground mb-4">
                      Interested in learning more about our products or services?
                    </p>
                    <Link to="/contact">
                      <Button className="w-full">Contact Us</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="mt-6 bg-muted/50">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <ImageWithFallback 
                        src="/company/quality policy.jpg" 
                        alt="ISO Certified"
                        className="h-16 w-16" 
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      ISO 9001 Certified by Underwriters Laboratories, USA
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

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
    </Layout> 
  );
};

export default AboutPage;
