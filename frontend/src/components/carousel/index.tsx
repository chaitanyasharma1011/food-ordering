import { typedmemo } from "@/library/helper";
import React, { memo, ReactNode, useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

interface CarouselProps<T extends { id: string }> {
  itemsPerSlide: number;
  slideItems: number;
  renderItem: (item: T) => ReactNode;
  itemsList: T[];
}

const Carousel = <T extends { id: string }>({
  itemsPerSlide,
  slideItems,
  renderItem,
  itemsList,
}: CarouselProps<T>) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index: number) => {
    if (Array.isArray(itemsList)) {
      let newIndex = index;
      if (index < 0) newIndex = itemsList.length - slideItems;
      else if (index > itemsList.length - slideItems) newIndex = 0;
      setCurrentIndex(newIndex);
      let track = trackRef.current;
      if (track) {
        let itemWidth = track?.children[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${newIndex * itemWidth}px)`;
      }
    }
  };
  const handlePrevious = () => goToSlide(currentIndex - slideItems);
  const handleNext = () => goToSlide(currentIndex + slideItems);
  return (
    <div className="flex space-x-4 items-center px-4 overflow-hidden">
      <GrLinkPrevious size={24} onClick={handlePrevious} className="z-30" />
      <div className="flex-1 w-full overflow-hidden">
        <div
          className="w-full flex transition-transform duration-200 space-x-4"
          ref={trackRef}
        >
          {Array.isArray(itemsList)
            ? itemsList.map((item) => (
                <div
                  key={item.id}
                  style={{ minWidth: `calc(100% / ${itemsPerSlide})` }}
                >
                  {renderItem(item)}
                </div>
              ))
            : null}
        </div>
      </div>

      <GrLinkNext size={24} onClick={handleNext} className="z-30" />
    </div>
  );
};

export default typedmemo(Carousel);
