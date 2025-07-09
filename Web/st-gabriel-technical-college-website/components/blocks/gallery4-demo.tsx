import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4";

const demoData: Gallery4Props = {
  title: "Our Accredited Courses",
  description:
    "Discover our comprehensive range of accredited technical and vocational courses designed to equip you with industry-ready skills for immediate employment and entrepreneurial success.",
  items: [
    {
      id: "autocare-technology",
      title: "AutoCare Technology",
      description:
        "Our comprehensive automotive program equips students with modern vehicle maintenance and repair skills, covering both traditional and contemporary automotive systems with hands-on experience using industry-standard diagnostic equipment.",
      href: "/programs",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "cybersecurity-fundamentals",
      title: "Cybersecurity Fundamentals",
      description:
        "This cutting-edge program addresses the growing demand for cybersecurity professionals. Students learn network security, threat assessment, and protective measures essential for modern digital infrastructure.",
      href: "/programs",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "electrical-installation",
      title: "Electrical Installation and Maintenance",
      description:
        "This program provides thorough training in electrical systems, wiring, and safety protocols. Students master both residential and commercial electrical work, preparing them for immediate employment in the growing electrical services sector.",
      href: "/programs",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "fashion-design",
      title: "Fashion Design and Tailoring",
      description:
        "Students develop skills in garment construction, pattern making, and fashion design. The program combines traditional tailoring techniques with contemporary fashion trends and business practices.",
      href: "/programs",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "welding-fabrication",
      title: "Welding and Fabrication",
      description:
        "This hands-on program teaches various welding techniques and metal fabrication skills. Students work with modern equipment and learn industry-standard practices that prepare them for employment in construction, manufacturing, and specialized fabrication industries.",
      href: "/programs",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Strategies",
      description:
        "Our digital marketing program covers social media marketing, content creation, and online advertising strategies. Students learn to leverage digital platforms for business growth and brand development.",
      href: "/programs",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
