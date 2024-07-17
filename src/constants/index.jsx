import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";
// import user5 from "../assets/profile-pictures/user5.jpg";
// import user6 from "../assets/profile-pictures/user6.jpg";
import user7 from "../assets/profile-pictures/user7.jpg";
import user8 from "../assets/profile-pictures/user8.jpg";
import user9 from "../assets/profile-pictures/user9.jpg";
import user10 from "../assets/profile-pictures/user10.jpg";
import user11 from "../assets/profile-pictures/user11.jpg";
import user12 from "../assets/profile-pictures/user12.jpg";

import destination from "../assets/Services/destination.jpg"
import albums from "../assets/Services/albums.jpg"
import couple from "../assets/Services/couple.jpg"
import drone from "../assets/Services/drone.jpg"
import weeding_day from "../assets/Services/wedding_day.jpg"
import engagement_photo from "../assets/Services/engagement_photo.jpg"

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "About US", href: "#" },
  { label: "Contact US", href: "#" },
];

export const testimonials = [
  {
    user: "John & Emily",
    // company: "Stellar Solutions",
    image: user7,
    text: "Choosing [Your Photography Studio Name] was the best decision we made for our wedding! Their attention to detail and ability to capture the essence of our special day exceeded our expectations. We're forever grateful for the stunning photos that now decorate our home",
  },
  {
    user: "Michael & Sarah",
    // company: "Blue Horizon Technologies",
    image: user8,
    text: "We couldn't have asked for a better photographer than [Your Name]. From our engagement shoot to the wedding day, every moment was captured beautifully. Their professionalism and creativity made the entire experience unforgettable.",
  },
  {
    user: "David Johnson",
    // company: "Quantum Innovations",
    image: user9,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ryan & Jennifer",
    // company: "Fusion Dynamics",
    image: user10,
    text: "We are absolutely thrilled with our wedding photos from [Your Name]. They captured the joy and love of our day beautifully. The team was so easy to work with, and their creativity shined through in every image.",
  },
  {
    user: "Alex & Lauren",
    // company: "Visionary Creations",
    image: user11,
    text: "The team at [Your Photography Studio Name] goes above and beyond! Their creativity and passion for photography are evident in every shot. They captured the emotions of our wedding day perfectly, and we couldn't be happier with the results.",
  },
  {
    user: "David & Jessica",
    // company: "Synergy Systems",
    image: user12,
    text: "Working with [Your Name] was an absolute pleasure! They made us feel comfortable and relaxed throughout the entire process. The photos are breathtaking, and we're constantly receiving compliments from friends and family",
  },
];

export const features = [
  {
    icon: <img className="rounded-2xl" src={engagement_photo} alt="" />,
    text: "Engagement Photography",
    description:
      "Capture the pre-wedding moments with a special engagement shoot.",
    book: (
      <a
        href="#"
        className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
        Book Now
      </a>
    ),
  },
  {
    icon: <img className="rounded-2xl" src={weeding_day} alt="" />,
    text: "Wedding Day Photography",
    description:
      "Offer packages for the entire wedding day, including pre-ceremony, ceremony, and reception coverage.",
      book: (
        <a
          href="#"
          className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
          Book Now
        </a>
      ),
  },
  {
    icon: <img className="rounded-2xl" src={destination} alt="" />,
    text: "Destination Weddings",
    description:
      "Specialize in destination wedding photography, capturing beautiful locations around the world.",
      book: (
        <a
          href="#"
          className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
          Book Now
        </a>
      ),
  },
  {
    icon: <img className="rounded-2xl" src={couple} alt="" />,
    text: "Couple’s Portraits",
    description:
      "Capture romantic moments between the couple in various settings.",
      book: (
      <a
        href="#"
        className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
        Book Now
      </a>
    ),
  },
  {
    icon: <img className="rounded-2xl" src={albums} alt="" />,
    text: "Albums and Prints",
    description:
      "Provide professionally designed wedding albums, prints, and canvases.",
      book: (
      <a
        href="#"
        className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
        Book Now
      </a>
    ),
  },
  {
    icon: <img className="rounded-2xl" src={drone} alt="" />,
    text: "Drone Photography",
    description:
      "Use drones for unique aerial shots of the wedding venue and ceremony.",
      book: (
      <a
        href="#"
        className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
        Book Now
      </a>
    ),
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
