import React from "react";
import { useApi } from "../../api/useApi";
import { map_list } from "../../utilities/mapsData";
import {
  MapsContainer,
  MapsContentContainer,
  MapsHeader,
  CarouselImage,
  CarouselContainer,
  MapInfo,
  MapName,
  MapDescription,
  MapsGalleryContainer,
  MapsGalleryHeader,
  GalleryImage,
} from "./Maps.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CustomIndicator.css";
import { useState } from "react";
const Maps = () => {
  const map_data = map_list;

  const [selected, setSelected] = useState(0);

  const handleChange = (selectedIndex) => {
    setSelected(selectedIndex);
  };
  return (
    <MapsContainer>
      <MapsContentContainer>
        <MapsHeader>Maps</MapsHeader>
        <CarouselContainer>
          <Carousel
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            swipeable={true}
            onChange={handleChange}
          >
            {map_data?.map((map, index) => (
              <CarouselImage src={map.map_featured_image.url} alt="" />
            ))}
          </Carousel>
          <MapInfo>
            <MapName> {map_data?.[selected].map_name}</MapName>
            <MapDescription>
              {map_data?.[selected].map_description}
            </MapDescription>
          </MapInfo>
        </CarouselContainer>
        <MapsGalleryContainer>
          <MapsGalleryHeader>Gallery</MapsGalleryHeader>
          <Carousel
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            swipeable={true}
          >
            {map_data?.[selected]?.gallery_images?.map((map, index) => (
              <GalleryImage src={map.map_image.url} alt="" />
            ))}
          </Carousel>
        </MapsGalleryContainer>
      </MapsContentContainer>
    </MapsContainer>
  );
};

export default Maps;
