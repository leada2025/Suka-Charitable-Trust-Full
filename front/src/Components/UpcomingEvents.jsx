import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import axios from "../api/Axios";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    // Fetch events from backend API
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/api/events");
        setEvents(res.data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };
    fetchEvents();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleEvents = events.slice(0, visibleCount);

  return (
    <section className="bg-white py-12 px-4 relative">
      <div className="absolute top-0 left-0 w-25 h-20 bg-gradient-to-tr from-blue-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-25 h-40 bg-gradient-to-tr from-green-600 to-transparent rounded-bl-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto flex">
        <div className="flex-1">
          <h2 className="text-3xl text-purple-900 font-bold text-center mb-10">
            UPCOMING EVENTS
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
  {visibleEvents.map((event, index) => (
    <div
      key={index}
      className="w-full sm:w-[300px] border border-black rounded-md p-4 transition hover:shadow-lg hover:border-blue-600 hover:text-white hover:bg-black active:bg-black active:text-white"
      data-aos="zoom-in-up"
    >
      <div className="bg-gray-100 text-center py-2 rounded mb-2">
        <span className="text-lg font-bold text-black">{event.date}</span>
      </div>
      <h3 className="text-sm font-semibold mb-1">{event.title}</h3>
      <div className="flex items-start text-gray-500 text-sm">
        <MapPin className="w-4 h-4 mr-1 mt-0.5" />
        <span>{event.location}</span>
      </div>
    </div>
  ))}
</div>


     {events.length > 4 && (
  <div className="mt-10 text-center flex flex-col sm:flex-row justify-center gap-4">
    {visibleCount < events.length && (
      <button
        onClick={handleLoadMore}
        className="border border-black px-6 py-2 rounded-full hover:bg-purple-900 hover:text-white transition active:bg-purple-900 active:text-white"
      >
        LOAD MORE
      </button>
    )}

    {visibleCount > 4 && (
      <button
        onClick={() => setVisibleCount(4)}
        className="border border-black px-6 py-2 rounded-full hover:bg-purple-900 hover:text-white transition active:bg-purple-900 active:text-white"
      >
        LOAD LESS
      </button>
    )}
  </div>
)}

        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
