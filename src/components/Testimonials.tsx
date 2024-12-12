import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Souvik Rahut",
      designation: "Developer and Organizer",
      src: "/images/souvik.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Abir Dutta",
      designation: "Developer and Organizer",
      src: "/images/abir.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Trishan Dewanji",
      designation: "Organizer",
      src: "/images/trishan.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Snehasish Saha",
      designation: "Organizer",
      src: "/images/snehasish.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Asutosh Dubey",
      designation: "Organizer",
      src: "/images/asutosh.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Soumyadip Banerji",
      designation: "Organizer",
      src: "/images/soumyadip.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
