import { useCallback, useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { SimpleCardData } from "../data";

function Gallery() {
  const [embla, setEmbla] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scaleFactor = 0.9;

  const data = [
    { img: "https://www.eepcindia.org/backend/gallery/1697612764.jpeg" },
    { img: "https://www.eepcindia.org/backend/gallery/1698732101.jpeg" },
    { img: "https://www.eepcindia.org/backend/gallery/1697102629.jpeg" },
    { img: "https://www.eepcindia.org/backend/gallery/1692171623.jpeg" },
  ];

  const updateSelectedIndex = useCallback(() => {
    if (embla) {
      setSelectedIndex(embla.selectedScrollSnap());
    }
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on("select", updateSelectedIndex);
      updateSelectedIndex();
    }
  }, [embla, updateSelectedIndex]);

  return (
    <>
      <Carousel
        loop
        dragFree
        slideGap="md"
        initialSlide={2}
        slideSize={"50%"}
        height={300}
        getEmblaApi={setEmbla}
      >
        {data.map((item, index) => {
          const isCenter = index === selectedIndex;
          const isSide = Math.abs(index - selectedIndex) === 1;
          return (
            <Carousel.Slide key={index} h={"100%"} w={"100%"}>
              <img
                src={item.img}
                style={{
                  filter: isCenter ? "none" : "grayscale(100%)",
                  transform: `scale(${isCenter ? scaleFactor : 1})`,
                  transition: "all 0.3s ease-in-out",
                  objectFit: "cover",
                  borderRadius: "1.8rem",
                  display: "block",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
}

export default Gallery;
