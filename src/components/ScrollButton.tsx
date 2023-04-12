import { Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useRouter } from "next/router";
interface ScrollButtonProps {
  sectionId: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ sectionId }) => {
  const router = useRouter();

  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <Button onClick={scrollToSection}>Scroll to section</Button>;
};

export default ScrollButton;
