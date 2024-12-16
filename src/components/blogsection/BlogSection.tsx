"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useRef, useState, useCallback } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebaseconfig";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Interface for the blog data
interface BlogData {
  id: string;
  title: string;
  content: string;
  published: boolean;
  created_date: any;
}

const BlogSection = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [blogsData, setBlogsData] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const router = useRouter();

  const handleNavigate = (docid: string) => {
    router.push(`currentblog/${docid}`)
  }

  // Fetch blogs from Firestore
  const getBlogs = useCallback(async () => {
    setLoading(true); // Set loading state to true
    const q = query(
      collection(db, "boltzmannlabs-posts"),
      where("published", "==", true),
      orderBy("created_date", "desc")
    );
    const querySnapshot = await getDocs(q);
    const fetchedData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogData[];

    setBlogsData(fetchedData.length > 6 ? fetchedData.slice(0, 6) : fetchedData);
    setLoading(false); // Set loading state to false
  }, []);

  useEffect(() => {
    getBlogs();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="spinner"></div> {/* Placeholder loading spinner */}
      </div>
    );
  }


  return (
    <div className="min-h-[70vh] flex bg-white">
      <div className="container mx-auto py-16 flex flex-col flex-1">
        {/* <h2 className="text-4xl text-customPurple text-center mb-16">
          Blog
        </h2> */}
        <div
          className={`h-[70vh] w-full flex flex-col justify-center transition-opacity duration-500`}
        >
          <div>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{ delay: 2500 }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {blogsData.map((data) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data.content, "text/html");
                const firstImage = doc.querySelector("img");
                const firstImageSrc = firstImage ? firstImage.getAttribute("src") : undefined;

                return (
                  <SwiperSlide key={data.id}>
                    <div className="relative h-[350px] bg-white rounded-xl overflow-hidden shadow-lg slide-in-element hover:cursor-pointer border-2" onClick={() => handleNavigate(data.id)}>

                      <div className="relative h-44 overflow-hidden text-white">
                        {firstImageSrc && (
                          <Image
                            id={`blog-image-${data.id}`}
                            key={`img-${data.id}`}
                            className="scale-100 hover:scale-125 transition-transform"
                            src={firstImageSrc}
                            alt={`Blog Image ${data.id}`}
                            width={500}
                            height={900}
                            loading="lazy"
                            placeholder="empty"
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold text-clip cursor-pointer hover:bg-gradient-to-r hover:from-customBlue hover:to-customPurple hover:bg-clip-text hover:text-transparent">
                          {data.title}
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
          <div>
            <div className="h-full flex flex-col items-center">
              <div className="w-full h-full">
                <div className="flex mt-2">
                  <div className="flex-1"></div>
                  <div className="rounded-full">
                    <button
                      className="items-center p-3 bg-white  text-black rounded-full mr-2"
                      type="button"
                      ref={prevRef}
                      aria-label="Previous slide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                      </svg>
                    </button>

                    <button
                      className="items-center p-3 bg-white  text-black rounded-full ml-2"
                      type="button"
                      ref={nextRef}
                      aria-label="Next slide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 bg-[#7E4499] min-h-[120px] flex flex-col justify-center items-center rounded-full">
            <p className="text-lg sm:text-xl font-semibold text-white text-center">
              <span>Want to know more about our modules?</span> <br />
              <a
                href="https://calendly.com/prashamsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Schedule a DEMO now!
              </a>  
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogSection;
