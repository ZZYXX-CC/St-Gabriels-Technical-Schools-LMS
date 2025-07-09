import { About3 } from "@/components/ui/about-3";

const About3Demo = () => {
  return (
    <About3
      title="Bold Thinkers Begin Here"
      description="St. Gabriel Technical Institute is an independent technical school serving students from diverse backgrounds. Rooted in timeless values and powered by forward-thinking learning, we've helped students grow into confident, curious, and compassionate learners."
      mainImage={{
        src: "/asset/Y4-2_3 - Photo.jpg",
        alt: "Classroom with students raising hands at St. Gabriel Technical Institute",
      }}
      breakout={{
        src: "/asset/SGT-blue.svg",
        alt: "St. Gabriel Technical Institute logo",
        title: "Explore Our Mission",
        description: "Discover how our mission shapes the future of technical education and empowers students to achieve their dreams.",
        buttonText: "Explore Our Mission",
        buttonUrl: "/about",
      }}
      companies={undefined}
      achievements={undefined}
      companiesTitle={undefined}
      achievementsTitle={undefined}
      achievementsDescription={undefined}
    />
  );
};

export { About3Demo };
