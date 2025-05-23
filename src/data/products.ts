export interface ProductSpec {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  subcategory: string;
  description: string;
  features: string[];
  specifications?: ProductSpec[];
  applications: string[];
  image: string;
}

export const products: Product[] = [
  // BLDC Motors
  {
    id: "bldc-dia-87-motor",
    name: "BLDC DIA 87 Motor",
    categoryId: "motors",
    subcategory: "BLDC Motors",
    description: "Cylindrical brushless DC motor with 87mm diameter, featuring metallic silver housing with cooling fins and mounting bracket",
    features: [
      "Energy efficient design",
      "Precise speed control",
      "Long operational lifespan",
      "Low noise operation"
    ],
    specifications: [
      { name: "Diameter", value: "87mm" },
      { name: "Voltage", value: "24V DC" },
      { name: "Power", value: "180W" },
      { name: "Speed Range", value: "1000-3000 RPM" },
      { name: "Efficiency", value: ">85%" }
    ],    applications: [
      "HVAC Systems",
      "Industrial Automation",
      "Medical Equipment"
    ],
    image: "/images/products/bldc motors.jpg"
  },
  {
    id: "bldc-outer-rotor-fan",
    name: "BLDC Outer Rotor Fan Motor",
    categoryId: "motors",
    subcategory: "BLDC Motors",
    description: "High-efficiency brushless DC outer rotor design for fan applications with integrated controller",
    features: [
      "Outer rotor design for optimal torque",
      "Integrated electronic controller",
      "Multiple speed settings",
      "IP44 protection rating"
    ],
    specifications: [
      { name: "Diameter", value: "120mm" },
      { name: "Voltage", value: "12-24V DC" },
      { name: "Power", value: "75W" },
      { name: "Speed Range", value: "800-2500 RPM" },
      { name: "Noise Level", value: "<35dB" }
    ],    applications: [
      "Cooling Systems",
      "Ventilation Equipment",
      "Air Purifiers"
    ],
    image: "/images/products/Desert cooler motor.jpg"
  },

  // AC Motors
  {
    id: "ac-induction-motor",
    name: "AC Induction Motor",
    categoryId: "motors",
    subcategory: "AC Motors",
    description: "General purpose single-phase AC induction motor with aluminum housing and efficient cooling design",
    features: [
      "High starting torque",
      "Thermal protection",
      "Ball bearing construction",
      "Class F insulation"
    ],
    specifications: [
      { name: "Power", value: "1/3 HP" },
      { name: "Voltage", value: "110-240V AC" },
      { name: "Frequency", value: "50/60 Hz" },
      { name: "Speed", value: "1450/1730 RPM" },
      { name: "Frame", value: "NEMA 48" }
    ],    applications: [
      "Pumps",
      "Compressors",
      "Industrial Machinery"
    ],
    image: "/images/products/Shaded ac motors.jpg"
  },

  // Valves
  {
    id: "solenoid-valve-brass",
    name: "2-Way Brass Solenoid Valve",
    categoryId: "valves",
    subcategory: "Solenoid Valves",
    description: "Normally closed 2-way brass solenoid valve for fluid control applications",
    features: [
      "Lead-free brass construction",
      "NBR seal material",
      "Low power consumption design",
      "Manual override option"
    ],
    specifications: [
      { name: "Connection Size", value: "1/2 inch" },
      { name: "Operating Pressure", value: "0.5-10 bar" },
      { name: "Voltage", value: "12V/24V DC, 110V/220V AC" },
      { name: "Media Temperature", value: "-10°C to 80°C" },
      { name: "Protection Rating", value: "IP65" }
    ],    applications: [
      "Water Treatment Systems",
      "Industrial Automation",
      "Irrigation Systems"
    ],
    image: "/images/products/solenoid-valve.png"
  },

  // Current Transformers
  {
    id: "lt-indoor-resin-ct",
    name: "LT Indoor Resin Cast CT",
    categoryId: "current-transformers",
    subcategory: "Indoor Resin Cast CTs",
    description: "High accuracy epoxy resin cast current transformer for indoor applications",
    features: [
      "Fully insulated design",
      "High accuracy class",
      "Compact dimensions",
      "Multiple ratio options"
    ],
    specifications: [
      { name: "Rated Current", value: "5-600A" },
      { name: "Secondary Output", value: "5A or 1A" },
      { name: "Accuracy Class", value: "0.5, 0.5S, 0.2" },
      { name: "Burden", value: "2.5-30VA" },
      { name: "Insulation Level", value: "0.72/3kV" }
    ],    applications: [
      "Energy Metering",
      "Power Distribution Panels",
      "Control Panels"
    ],
    image: "/images/products/resin-cast-ct.png"
  },

  // Locking Mechanisms
  {
    id: "electronic-solenoid-lock",
    name: "Electronic Solenoid Lock",
    categoryId: "locking-mechanisms",
    subcategory: "Solenoid Locks",
    description: "Fail-safe electronic solenoid lock with status monitoring for access control systems",
    features: [
      "Holding force up to 600lbs",
      "Status monitoring sensors",
      "Low current consumption",
      "Easy installation design"
    ],
    specifications: [
      { name: "Voltage", value: "12/24V DC" },
      { name: "Current", value: "500mA at 12V" },
      { name: "Holding Force", value: "600lbs (272kg)" },
      { name: "Duty Cycle", value: "Continuous" },
      { name: "Dimensions", value: "230 x 41 x 27mm" }
    ],    applications: [
      "Access Control Systems",
      "Security Gates",
      "Cabinets and Safes"
    ],
    image: "/images/products/solenoid-lock.png"
  }
];
