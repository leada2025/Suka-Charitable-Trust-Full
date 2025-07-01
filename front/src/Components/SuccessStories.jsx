import React, { useState, useEffect } from "react";
import axios from "../api/Axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SuccessStoriesCarousel = () => {
  const [stories, setStories] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await axios.get("/api/stories");
      // If backend doesn't return imageUrl, construct it here
      const formatted = res.data.map((story) => ({
        ...story,
        imageUrl: `https://suka-charitable-trust-full-backend.onrender.com/uploads${story.image}`

      }));
      setStories(formatted);
    } catch (err) {
      console.error("Failed to fetch stories:", err);
    }
  };

  const toggleReadMore = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-purple-900 p-2 rounded-full shadow-md hover:bg-purple-200 transition md:block"
      aria-label="Previous"
    >
      <ChevronLeft className="text-white w-5 h-5" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-purple-900 p-2 rounded-full shadow-md hover:bg-purple-200 transition md:block"
      aria-label="Next"
    >
      <ChevronRight className="text-white w-5 h-5" />
    </button>
  );

  return (
    <section className="py-10 relative">
      <div className="absolute top-0 left-1/2 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-60 right-2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl text-center font-bold text-purple-900 mb-8">
          Community Stories
        </h3>

        <div className="relative max-w-full">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={false}
            showDots={true}
            itemClass="px-2"
            containerClass="pb-12"
            dotListClass="!mt-6 flex justify-center items-center"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {stories.map((story) => {
              const isExpanded = expandedCard === story._id;
              return (
                <div
                  key={story._id}
                  className="bg-white w-[280px] mx-auto rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-auto flex flex-col"
                >
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-100 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {story.title}
                    </h3>
                    <p
                      className={`text-black text-sm mb-2 overflow-hidden ${
                        isExpanded ? "" : "line-clamp-4"
                      }`}
                    >
                      {story.description}
                    </p>
                    <button
                      onClick={() => toggleReadMore(story._id)}
                      className="text-purple-900 text-sm mt-auto hover:underline"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;
