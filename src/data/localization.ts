// This file contains all the text content used throughout the application
// for easy localization and maintenance

export const siteConfig = {
  name: "Microinstruments Co.",
  description:
    "Precision engineered electromechanical components for industrial applications.",
  domain: "microinstrumentsco.com",
  contactEmail: "info@microinstrumentsco.com",
  salesEmail: "sales@microinstrumentsco.com",
  phone: "+91-171-2699935",
  phone2: "+91-171-2699936",
  address: {
    street: "8, Industrial Area",
    city: "Ambala Cantt",
    state: "Haryana",
    country: "India",
    postalCode: "133 006",
  },
  socialMedia: {
    facebook: "https://facebook.com/microinstrumentsco",
    twitter: "https://twitter.com/microinstrumentsco",
    linkedin: "https://linkedin.com/company/microinstrumentsco",
  },
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM IST",
    saturday: "9:00 AM - 1:00 PM IST",
    sunday: "Closed",
  },
};

export const navigation = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  productCategories: [
    { title: "Motors", href: "/products/motors" },
    { title: "Valves", href: "/products/valves" },
    { title: "Cooling Solutions", href: "/products/cooling-solutions" },
    { title: "Locking Mechanisms", href: "/products/locking-mechanisms" },
  ],
};

export const homePageContent = {
  hero: {
    tagline: "Industry-Leading Electromechanical Solutions",
    title: "Precision Engineered Components",
    description:
      "Explore our comprehensive range of high-quality motors, transformers, and electromechanical solutions designed for industrial applications.",
    primaryCta: "Browse Products",
    secondaryCta: "Request Quote",
  },
  featuredCategories: {
    title: "Product Categories",
    categories: [
      {
        title: "Motors",
        description:
          "BLDC, AC, and specialized motors for various applications",
        link: "/products/motors",
      },
      {
        title: "Current Transformers",
        description:
          "Precision engineered transformers for accurate measurements",
        link: "/products/transformers",
      },
      {
        title: "Specialized Components",
        description: "Valves, locks, cooling solutions and other components",
        link: "/products/components",
      },
    ],
  },
  featuredProducts: {
    title: "Featured Products",
    products: [
      {
        id: "1",
        name: "BLDC DIA 87 Motor",
        category: "BLDC Motors",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
        description:
          "High-performance brushless DC motor with 87mm diameter, ideal for industrial automation applications.",
      },
      {
        id: "2",
        name: "LT Indoor Resin Cast CT",
        category: "Current Transformers",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
        description:
          "Resin cast current transformer designed for indoor use with high accuracy and reliability.",
      },
      {
        id: "3",
        name: "Cross Flow Blower",
        category: "Cooling Solutions",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
        description:
          "Efficient cross flow blower providing even airflow distribution for HVAC systems and appliances.",
      },
    ],
  },
  callToAction: {
    title: "Need a Custom Solution?",
    description:
      "Our engineering team can help design and manufacture components tailored to your specific requirements.",
    buttonText: "Request a Quote",
  },
};

export const aboutPageContent = {
  hero: {
    tagline: "About Microinstruments Co.",
    title: "Engineering Excellence Since 1985",
    description:
      "Pioneering precision electromechanical components for industrial applications with a commitment to quality, innovation, and customer satisfaction.",
  },
  companyHistory: {
    tagline: "Our Journey",
    title: "Company History",
    paragraphs: [
      "Founded in 1985, Microinstruments Co. began as a small workshop specializing in precision motors for industrial applications. Over the decades, we've grown into a leading manufacturer of electromechanical components serving clients worldwide.",
      "Our journey has been marked by continuous innovation, strategic expansions, and an unwavering commitment to engineering excellence. From our humble beginnings to our current state-of-the-art manufacturing facilities, we've maintained our founding principles of precision, reliability, and customer focus.",
    ],
    stats: [
      { value: "1985", label: "Founded" },
      { value: "15+", label: "Countries" },
      { value: "500+", label: "Products" },
      { value: "5000+", label: "Clients" },
    ],
  },
  missionVision: {
    tagline: "Our Purpose",
    title: "Mission & Vision",
    mission:
      "To deliver precision-engineered electromechanical components that exceed industry standards, while providing exceptional value and service to our customers. We are committed to continuous innovation and sustainable manufacturing practices that respect our environment and communities.",
    vision:
      "To be the global leader in electromechanical component manufacturing, recognized for our technical excellence, reliability, and customer-focused approach. We aim to drive industry innovation through advanced engineering solutions that power the technologies of tomorrow.",
  },
  values: {
    tagline: "What We Stand For",
    title: "Our Core Values",
    valuesList: [
      {
        title: "Quality",
        description:
          "We maintain the highest standards in every component we manufacture, ensuring reliability and performance that exceeds expectations.",
      },
      {
        title: "Innovation",
        description:
          "We continuously explore new technologies and methods to advance our products and manufacturing processes.",
      },
      {
        title: "Customer Focus",
        description:
          "We prioritize understanding and meeting our customers' needs, building long-term relationships based on trust and reliability.",
      },
      {
        title: "Sustainability",
        description:
          "We are committed to environmentally responsible manufacturing practices and reducing our ecological footprint.",
      },
    ],
  },
  manufacturing: {
    tagline: "Our Facilities",
    title: "Manufacturing Capabilities",
    description:
      "Our state-of-the-art facilities combine precision engineering with advanced technology to deliver components of exceptional quality.",
    capabilities: [
      {
        title: "Precision Engineering",
        description:
          "Our engineering team utilizes advanced CAD/CAM systems for precise design and manufacturing, ensuring components meet exact specifications.",
      },
      {
        title: "Automated Production",
        description:
          "Our automated production lines combine efficiency with precision, allowing us to maintain consistent quality while meeting high volume demands.",
      },
      {
        title: "Quality Control",
        description:
          "Every component undergoes rigorous testing and inspection to ensure it meets our exacting standards before leaving our facility.",
      },
    ],
  },
  team: {
    tagline: "Our People",
    title: "Leadership Team",
    description:
      "Meet the experienced professionals guiding our company's vision and operations.",
    members: [
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
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=manufacturing",
      },
      {
        name: "Priya Sharma",
        position: "Quality Assurance Director",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=quality",
      },
    ],
  },
  callToAction: {
    title: "Ready to Work With Us?",
    description:
      "Contact our team to discuss how our precision-engineered components can meet your specific requirements.",
    primaryCta: "Contact Us",
    secondaryCta: "Browse Products",
  },
};

export const contactPageContent = {
  hero: {
    tagline: "Get in Touch",
    title: "Contact Us",
    description:
      "Have questions about our products or services? Our team is here to help. Reach out to us using the contact information below or fill out the form.",
  },
  contactForm: {
    title: "Send Us a Message",
    successMessage:
      "Your message has been sent successfully. Our team will contact you shortly.",
    errorMessage:
      "There was an error sending your message. Please try again later.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company",
      phone: "Phone",
      message: "Message",
      agreeToTerms: "I agree to the privacy policy and terms of service",
    },
    submitButton: "Send Message",
    submittingButton: "Sending...",
  },
  contactInfo: {
    title: "Contact Information",
    address: {
      title: "Address",
      value: "8, Industrial Area, Ambala Cantt, India-133 006",
    },
    phone: {
      title: "Phone",
      values: ["+91-171-2699935", "+91-171-2699936"],
    },
    email: {
      title: "Email",
      values: ["info@microinstrumentsco.com", "sales@microinstrumentsco.com"],
    },
  },
  businessHours: {
    title: "Business Hours",
    hours: [
      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
      { day: "Saturday", hours: "9:00 AM - 1:00 PM IST" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  mapSection: {
    tagline: "Our Location",
    title: "Find Us",
    buttonText: "Get Directions",
  },
  faqSection: {
    tagline: "Common Questions",
    title: "Frequently Asked Questions",
    noQuestionText: "Don't see your question here? Contact our support team.",
    contactSupportButton: "Contact Support",
    faqs: [
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
    ],
  },
};

export const productCatalogContent = {
  categories: [
    {
      id: "1",
      name: "Motors",
      subcategories: [
        {
          id: "1-1",
          name: "BLDC Motors",
          products: [],
        },
        {
          id: "1-2",
          name: "AC Motors",
          products: [],
        },
      ],
    },
    {
      id: "2",
      name: "Valves",
      subcategories: [
        {
          id: "2-1",
          name: "Magnetic Valve",
          products: [],
        },
      ],
    },
    {
      id: "3",
      name: "Locking Mechanisms",
      subcategories: [
        {
          id: "3-1",
          name: "Door Lock",
          products: [],
        },
      ],
    },
    {
      id: "4",
      name: "Cooling Solutions",
      subcategories: [
        {
          id: "4-1",
          name: "Cross Flow Blower",
          products: [],
        },
      ],
    },
  ],
  products: [
    {
      id: "1",
      name: "BLDC DIA 87 Motor",
      description:
        "High-performance brushless DC motor with 87mm diameter, ideal for industrial automation applications.",
      category: "Motors",
      subcategory: "BLDC Motors",
      imageUrl:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "2",
      name: "BLDC E-Bicycle Motor",
      description:
        "Compact hub motor design with high torque, perfect for electric bicycles and small electric vehicles.",
      category: "Motors",
      subcategory: "BLDC Motors",
      imageUrl:
        "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "3",
      name: "BLDC Ceiling Fan",
      description:
        "Energy-efficient, quiet operation motor designed specifically for ceiling fan applications.",
      category: "Motors",
      subcategory: "BLDC Motors",
      imageUrl:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "4",
      name: "Magnetic Valve",
      description:
        "Electromagnetic valve assembly with precise control for fluid control systems and appliances.",
      category: "Valves",
      subcategory: "Magnetic Valve",
      imageUrl:
        "https://images.unsplash.com/photo-1635401850685-27c4bfbb8a36?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "5",
      name: "Door Lock",
      description:
        "Electromechanical door locking mechanism for appliances and security systems.",
      category: "Locking Mechanisms",
      subcategory: "Door Lock",
      imageUrl:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "6",
      name: "Cross Flow Blower",
      description:
        "Cylindrical cross-flow blower assembly with even airflow distribution for HVAC systems.",
      category: "Cooling Solutions",
      subcategory: "Cross Flow Blower",
      imageUrl:
        "https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?w=500&q=80",
      price: "Contact for quote",
    },
  ],
};

export const productDetailContent = {
  product: {
    id: "1",
    name: "BLDC DIA 87 Motor",
    category: "Motors",
    subcategory: "BLDC Motors",
    description:
      "High-performance brushless DC motor with 87mm diameter. Designed for industrial automation and high-efficiency applications requiring reliable performance and precise control.",
    features: [
      "Energy efficient design with up to 30% power savings",
      "Low noise operation (<45dB)",
      "Extended lifespan (>50,000 hours)",
      "Variable speed control",
      "Integrated thermal protection",
    ],
    specifications: [
      { name: "Diameter", value: "87mm" },
      { name: "Voltage", value: "24V DC" },
      { name: "Power Rating", value: "120W" },
      { name: "Speed Range", value: "1000-3000 RPM" },
      { name: "Efficiency", value: ">85%" },
      { name: "Protection Class", value: "IP44" },
      { name: "Weight", value: "850g" },
      { name: "Mounting Type", value: "Flange Mount" },
    ],
    applications: [
      "Industrial automation systems",
      "HVAC equipment",
      "Precision machinery",
      "Medical devices",
      "Robotics",
    ],
    resources: [
      { name: "Technical Datasheet", type: "PDF", size: "1.2 MB" },
      { name: "Installation Guide", type: "PDF", size: "850 KB" },
      { name: "CAD Model (STEP)", type: "STEP", size: "3.5 MB" },
      { name: "Wiring Diagram", type: "PDF", size: "450 KB" },
    ],
    relatedProducts: [
      {
        id: "2",
        name: "BLDC E-Bicycle Motor",
        image:
          "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=300&q=80",
      },
      {
        id: "3",
        name: "BLDC Ceiling Fan",
        image:
          "https://images.unsplash.com/photo-1595079676601-f1adf5be5dee?w=300&q=80",
      },
      {
        id: "4",
        name: "BLDC Aircon Motor",
        image:
          "https://images.unsplash.com/photo-1581092921461-eab10380ed66?w=300&q=80",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22731c9c78?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-3051cc2a99e0?w=800&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    ],
  },
};
