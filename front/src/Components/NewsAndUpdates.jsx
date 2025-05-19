import React, { useEffect, useState } from "react";
import axios from "../api/Axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Carousel breakpoints
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

// Custom dot
const CustomDot = ({ onClick, active }) => (
  <button
    onClick={onClick}
    className={`h-2.5 w-2.5 mx-1 rounded-full ${active ? "bg-blue-600" : "bg-gray-300"}`}
  />
);

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);
  const [expandedNewsId, setExpandedNewsId] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("/api/news");
        setNewsData(res.data);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, []);

  const toggleExpand = (id) => {
    setExpandedNewsId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-purple-900 font-bold text-center mb-12">
          Latest News & Updates
        </h2>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={6000}
          arrows={false}
          showDots
          customDot={<CustomDot />}
          dotListClass="!mt-6 flex justify-center items-center"
          containerClass="pb-12"
        >
          {newsData.map((news) => {
            const isExpanded = expandedNewsId === news._id;
            const isLong = news.description.length > 200;

            return (
              <div
                key={news._id}
                className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={`http://localhost:5000/uploads/news/${news.image}`}
                    alt={news.title}
                    className="w-full h-[250px] md:h-[500px] object-contain"
                    data-aos="flip-left"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3
                    className="text-2xl font-bold text-purple-900 mb-4"
                    data-aos="flip-right"
                  >
                    {news.title}
                  </h3>

                  <p className="text-black mb-4" data-aos="flip-right">
                    {isExpanded || !isLong
                      ? news.description
                      : `${news.description.slice(0, 200)}...`}
                  </p>

                  {isLong && (
                    <button
                      onClick={() => toggleExpand(news._id)}
                      className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-fit"
                      data-aos="flip-right"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default NewsCarousel;
