"use client"
import { db } from "@/firebaseconfig";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface BlogData {
  id: string;
  title: string;
  author:string;
  content: string;
  published: boolean;
  created_date: any;
}

const BlogsPage = () => {
  const router = useRouter()
  const [blogsData, setBlogsData] = useState<BlogData[]>([]);
  const [cateDate, setCateDate] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<number>(0);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [searchText, setSearchText] = useState("");

  const handlenavigatetoblog=(blogid:string)=>{
router.push(`/currentblog/${blogid}`)
  }

  const getBlogs = useCallback(async () => {
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

    setBlogsData(fetchedData);
  }, []);

  const getCategories = useCallback(async () => {
    const collectionRef = collection(db, "boltzmannlabs-categories");
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCateDate(documents);
  }, []);

  const handleGetCategories = async (categorie: string) => {
    const collectionRef = collection(db, "boltzmannlabs-posts");
    const q = query(collectionRef, where("categories", "array-contains", categorie), where("published", "==", true))
    const querySnapshot = await getDocs(q);

    // Process and return the data
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include document ID
      ...doc.data(), // Include document data
    })) as BlogData[]

    setBlogsData(data)

  }


  useEffect(() => {
    const fetchData = async () => {
      await getBlogs();
      await getCategories();
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchData();
  }, [getBlogs, getCategories]);

  useEffect(() => {
    const total = blogsData.reduce((count, blog) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.content, "text/html");
      const images = doc.querySelectorAll("img");
      return count + images.length;
    }, 0);

    setTotalImages(total);
    setImagesLoaded(0);
  }, [blogsData]);

  useEffect(() => {
    if (imagesLoaded === totalImages && totalImages > 0) {
      setLoading(false);
    }
  }, [imagesLoaded, totalImages]);

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const latestBlog = filteredBlogs[0];
  const nextFourBlogs = filteredBlogs.slice(1, 5);
  const remainingBlogs = filteredBlogs.slice(5);

  return (
    <>
      <div className="flex flex-col">
      <div className="h-[80px]  "></div>
      <div className=""></div>

      {/* Latest Blog */}
      {latestBlog && (
            <div
              className="flex flex-col md:flex-row items-center justify-center  p-6  rounded-lg mb-6"
              onClick={() => handlenavigatetoblog(latestBlog.id)}
            >
              <div className="md:w-1/3">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={latestBlog.content.match(/<img[^>]+src=\"([^\"]+)\"/)?.[1] || ''}
                  alt="Latest Blog Image"
                />
              </div>
              <div className="md:w-1/3 p-4">
                <h2 className="text-2xl font-bold text-black mb-2">{latestBlog.title}</h2>
                <p className="text-gray-600">
                  Published on: {latestBlog.created_date
                    ? new Date(latestBlog.created_date.seconds * 1000).toLocaleDateString()
                    : "Unknown"}
                </p>
                <p className="text-gray-600">Author: {latestBlog.author || "Anonymous"}</p>
              </div>
            </div>
          )}

          {/* Next Four Blogs */}
          <div className="px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {nextFourBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-4 rounded-lg cursor-pointer"
                onClick={() => handlenavigatetoblog(blog.id)}
              >
                {/* Image */}
                <div className="w-full h-[150px] overflow-hidden rounded-lg mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={blog.content.match(/<img[^>]+src=\"([^\"]+)\"/)?.[1] || ''}
                    alt="Blog Thumbnail"
                  />
                </div>
                
                {/* Blog Details */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-black">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Published on: {blog.created_date
                      ? new Date(blog.created_date.seconds * 1000).toLocaleDateString()
                      : "Unknown"}
                  </p>
                  <p className="text-sm text-gray-600">Author: {blog.author || "Anonymous"}</p>
                </div>
              </div>
            ))}
          </div>
          </div>


      <div className="h-[25vh] justify-center items-center text-center"  style={{ backgroundColor: "#8540a1" }}>
        <p className="text-white text-3xl mt-8">
          Stay Ahead! Subscribe for Instant Updates on the 
        </p>
        <p className="text-white text-3xl mt-2">
        Latest Blogs, Case Studies, White Papers, and More!
        </p>
        <button
          className="bg-white text-[#8540a1] px-6 py-2 rounded-3xl font-semibold shadow-md hover:bg-gray-100 mt-4 mb-8"
        >
          Subscribe now &gt;
        </button>
      </div>
      </div>

      <div className="min-h-screen flex ">
        <div className="container mx-auto flex-col py-16">
          {/* Search Bar */}
          <div className="flex items-center w-1/2 bg-white p-2 my-3 mx-auto outline outline-purple-400 rounded-3xl">
            
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="block w-full"
            />
            <FontAwesomeIcon icon={faSearch} className="text-purple-400 mr-2" />
          </div>
          <div className="grid grid-cols-6 h-full gap-6">
            <div className="col-span-4 h-full">
              {loading ? (
                // Display shadow loaders while loading
                <div className="grid grid-cols-1 gap-6">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="relative h-[180px] m-6 flex items-center bg-gradient-to-r from-customBlue to-customPurple p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                      <div className="absolute h-[180px] w-full flex flex-col justify-center bg-white p-6 shadow-lg rounded-lg left-[10px] top-[10px] transition-shadow duration-300">
                        <div className="grid grid-cols-4 gap-4">
                          <div className="col-span-2 h-8 bg-gray-300 animate-pulse"></div>
                          <div className="col-span-2 flex justify-end items-center">
                            <div className="h-[170px] w-[200px] bg-gray-300 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Render actual blog content once data is loaded
                remainingBlogs.map((data) => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(data.content, "text/html");
                  const firstImage = doc.querySelector("img");
                  const firstImageSrc = firstImage ? firstImage.getAttribute("src") : undefined;

                  return (
                    <div key={data.id} className="relative h-[180px] m-6 flex items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={()=>handlenavigatetoblog(data.id)}>
                      {/* <div className="absolute h-[180px] w-full flex flex-col justify-center bg-white p-6 shadow-lg rounded-lg left-[10px] top-[10px] transition-shadow duration-300"> */}
                        <div className="grid grid-cols-4 gap-4">
                          {/* <div className="col-span-2 flex items-center">
                            <h5 className="text-xl font-bold bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">
                              {data.title}
                            </h5>
                          </div> */}
                          {/* Blog Title and Details */}
                          <div className="col-span-2 flex flex-col justify-center">
                            <h5 className="text-xl font-bold bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">
                              {data.title}
                            </h5>
                            {/* Published Date and Author */}
                            <div className="text-sm text-gray-600 mt-1">
                              <p>
                                Published on:{" "}
                                {data.created_date
                                  ? new Date(data.created_date.seconds * 1000).toLocaleDateString()
                                  : "Unknown"}
                              </p>
                              <p>Author: {data.author || "Anonymous"}</p>
                            </div>
                          </div>
                          <div className="col-span-2 flex justify-end items-center">
                            <div className="h-[170px] w-full overflow-hidden relative rounded-lg border-2 border-lightText">
                              <img
                                className="object-fill w-full h-full"
                                src={firstImageSrc || ''}
                                alt="Blog Image"
                              />
                            </div>
                          </div>
                        </div>
                      {/* </div> */}
                    </div>
                  );
                })
              )}
            </div>

            <div className="col-span-2 h-full">
              <div className="m-6 h-[50vh] border-2 ">
                <span className="block text-black text-[16px] m-2">Categories</span>
                {
                  cateDate.map((data) => (
                    <button key={data.id} onClick={() => handleGetCategories(data.title)} className="px-3 py-2 bg-customPurplelight rounded-full m-2 text-gray-700 text-[14px]">
                      {data.title}
                    </button>
                  ))
                }
              </div>
              {/* Container of Communities */}
              <div className="bg-[#8540a1] text-white text-center p-6 rounded-lg mx-auto max-w-3xl w-auto">
                <p className="text-lg">Join the Conversation! </p>
                <p className="text-lg mt-3">Connect with our <b>Open Source</b> </p>
                <p className="text-lg"><b>Research Communities</b> and Shape  </p>
                <p className="text-lg"> the Future Together </p>
              </div>
              {/* Bayes Labs Community */}
              <div className="bg-black text-white text-center p-6 rounded-lg mx-auto max-w-3xl w-auto mt-5 ">
                <p className="text-lg"><b>BAYES LABS</b> </p>
                <p className="text-lg mt-3">Explore our open source AI </p>
                <p className="text-lg">research community</p>
                <div className="flex mt-5 md:w-1/2">
                  <button className="bg-black text-white px-2 py-2  ml-8 rounded-3xl border border-white hover:bg-gray-800 transition">Community</button>
                  <button className="bg-black text-white px-2 py-2 ml-4 rounded-3xl border border-white hover:bg-gray-800 transition">GitHub</button>
                  <button className="bg-black text-white px-2 py-2 ml-4 rounded-3xl border border-white hover:bg-gray-800 transition">Discord</button>
                </div>
              </div>

              {/* ChemBio AI Community */}
              <div className="bg-black text-white text-center p-6 rounded-lg mx-auto max-w-3xl w-auto mt-5 ">
                <p className="text-lg"><b>ChemBio AI</b> </p>
                <p className="text-lg mt-3">Explore our open source</p>
                <p className="text-lg">Life sciences research community</p>
                <div className="flex mt-5 md:w-1/2">
                  <button className="bg-black text-white px-2 py-2  ml-8 rounded-3xl border border-white hover:bg-gray-800 transition">Community</button>
                  <button className="bg-black text-white px-2 py-2 ml-4 rounded-3xl border border-white hover:bg-gray-800 transition">GitHub</button>
                  <button className="bg-black text-white px-2 py-2 ml-4 rounded-3xl border border-white hover:bg-gray-800 transition">Discord</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;


// "use client"
// import { db } from "@/firebaseconfig";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
// import { useCallback, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface BlogData {
//   id: string;
//   title: string;
//   author: string;
//   content: string;
//   published: boolean;
//   created_date: any;
// }

// const BlogsPage = () => {
//   const router = useRouter();
//   const [blogsData, setBlogsData] = useState<BlogData[]>([]);
//   const [cateDate, setCateDate] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");

//   const handlenavigatetoblog = (blogid: string) => {
//     router.push(`/currentblog/${blogid}`);
//   };

//   const getBlogs = useCallback(async () => {
//     const q = query(
//       collection(db, "boltzmannlabs-posts"),
//       where("published", "==", true),
//       orderBy("created_date", "desc")
//     );
//     const querySnapshot = await getDocs(q);
//     const fetchedData = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as BlogData[];

//     setBlogsData(fetchedData);
//   }, []);

//   const getCategories = useCallback(async () => {
//     const collectionRef = collection(db, "boltzmannlabs-categories");
//     const querySnapshot = await getDocs(collectionRef);
//     const documents = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     setCateDate(documents);
//   }, []);

//   const handleGetCategories = async (categorie: string) => {
//     const collectionRef = collection(db, "boltzmannlabs-posts");
//     const q = query(
//       collectionRef,
//       where("categories", "array-contains", categorie),
//       where("published", "==", true)
//     );
//     const querySnapshot = await getDocs(q);

//     const data = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as BlogData[];

//     setBlogsData(data);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       await getBlogs();
//       await getCategories();
//       setLoading(false);
//     };

//     fetchData();
//   }, [getBlogs, getCategories]);

//   const filteredBlogs = blogsData.filter((blog) =>
//     blog.title.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const latestBlog = filteredBlogs[0];
//   const nextFourBlogs = filteredBlogs.slice(1, 5);
//   const remainingBlogs = filteredBlogs.slice(5);

//   return (
//     <>
//       <div className="flex flex-col" style={{ backgroundColor: "#8540a1" }}>
//         <div className="h-[80px]"></div>
//         <div className="mt-[80px]"></div>
//       </div>

//       <div className="min-h-screen flex ">
//         <div className="container mx-auto flex-col py-16">
//           {/* Search Bar */}
//           <div className="flex items-center w-1/2 bg-white p-2 my-3 mx-auto outline outline-purple-400 rounded-3xl">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               className="block w-full"
//             />
//             <FontAwesomeIcon icon={faSearch} className="text-purple-400 mr-2" />
//           </div>

//           {/* Latest Blog */}
//           {latestBlog && (
//             <div
//               className="flex flex-col md:flex-row items-center bg-white p-6 shadow-lg rounded-lg mb-6"
//               onClick={() => handlenavigatetoblog(latestBlog.id)}
//             >
//               <div className="md:w-1/2">
//               <img
//                   className="object-cover w-full h-[300px] rounded-lg"
//                   src={latestBlog.content.match(/<img[^>]+src=\"([^\"]+)\"/)?.[1] || ''}
//                   alt="Latest Blog Image"
//                 />
//               </div>
//               <div className="md:w-1/2 p-4">
//                 <h2 className="text-2xl font-bold text-purple-700 mb-2">{latestBlog.title}</h2>
//                 <p className="text-gray-600">
//                   Published on: {latestBlog.created_date
//                     ? new Date(latestBlog.created_date.seconds * 1000).toLocaleDateString()
//                     : "Unknown"}
//                 </p>
//                 <p className="text-gray-600">Author: {latestBlog.author || "Anonymous"}</p>
//               </div>
//             </div>
//           )}

//           {/* Next Four Blogs */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {nextFourBlogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="relative h-[200px] bg-white p-4 shadow-lg rounded-lg cursor-pointer"
//                 onClick={() => handlenavigatetoblog(blog.id)}
//               >
//                 <img className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
//                   src={blog.content.match(/<img[^>]+src=\"([^\"]+)\"/)?.[1] || ''}
//                   alt="Blog Thumbnail"
//                 />
//                 <div className="relative z-10">
//                   <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
//                     {blog.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Subscribe Section */}
//           <div className="h-[20vh] flex flex-col items-center text-center bg-purple-100 py-8">
//             <p className="text-purple-700 text-2xl mb-4">
//               Stay Ahead! Subscribe for Instant Updates on the Latest Blogs, Case Studies, White Papers, and More!
//             </p>
//             <button
//               className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-purple-600"
//             >
//               Subscribe now &gt;
//             </button>
//           </div>

//           {/* Remaining Blogs */}
//           <div className="grid grid-cols-1 gap-6 mt-6">
//             {remainingBlogs.map((data) => (
//               <div
//                 key={data.id}
//                 className="relative h-[180px] m-6 flex items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
//                 onClick={() => handlenavigatetoblog(data.id)}
//               >
//                                 <div className="grid grid-cols-4 gap-4">
//                   <div className="col-span-2 flex flex-col justify-center">
//                     <h5 className="text-xl font-bold bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">
//                       {data.title}
//                     </h5>
//                     <div className="text-sm text-gray-600 mt-1">
//                       <p>
//                         Published on: {data.created_date
//                           ? new Date(data.created_date.seconds * 1000).toLocaleDateString()
//                           : "Unknown"}
//                       </p>
//                       <p>Author: {data.author || "Anonymous"}</p>
//                     </div>
//                   </div>
//                   <div className="col-span-2 flex justify-end items-center">
//                     <div className="h-[170px] w-full overflow-hidden relative rounded-lg border-2 border-lightText">
//                       <img
//                         className="object-fill w-full h-full"
//                         src={data.content.match(/<img[^>]+src=\"([^\"]+)\"/)?.[1] || ''}
//                         alt="Blog Thumbnail"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogsPage;
