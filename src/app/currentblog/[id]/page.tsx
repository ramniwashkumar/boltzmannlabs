"use client";
import { db } from "@/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const CurrentBlog = () => {
    const { id } = useParams<{ id: string }>(); // Get the dynamic ID from the URL
    const [title, setTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [content, setContent] = useState(''); // Store the blog content as HTML
    const [loading, setLoading] = useState(true); // Add loading state

    const getSingleDocument = async () => {
        if (!id) return; // Ensure there is an ID

        const docRef = doc(db, 'boltzmannlabs-posts', id); // Reference the document
        const docSnap = await getDoc(docRef); // Get the document snapshot

        if (docSnap.exists()) {
            const { content: rawContent, title, author, created_date } = docSnap.data();
            console.log(rawContent)
            setTitle(title); // Set the title state
            setAuthorName(author); // Set the author state
            setDateCreated(created_date.toDate().toLocaleString()); // Format and set the created date

            // Parsing and styling content
            const parser = new DOMParser();
            const parsedHtml = parser.parseFromString(rawContent, 'text/html');
            const modifyElements = (element: HTMLElement) => {
                element.className = ''; // Clear any existing classes
                switch (element.tagName.toLowerCase()) {
                    case 'h1':
                        element.classList.add('text-3xl', 'font-bold', 'my-4');
                        break;
                    case 'h2':
                        element.classList.add('text-2xl', 'font-semibold', 'my-3');
                        break;
                    case 'p':
                        element.classList.add('text-base', 'leading-relaxed', 'mb-4');
                        break;
                    case 'img':
                        element.classList.add(
                            'block', // Make sure the image occupies its own line
                            'max-w-full', // Make the image responsive
                            'w-auto', // Prevents stretching
                            'h-auto', // Keep aspect ratio
                            'mx-auto', // Center the image horizontally
                            'my-6', // Add vertical margin for spacing
                            'rounded-lg', // Optional rounded corners
                            'shadow-md', // Optional shadow for better visibility
                            'border-4',
                            'border-customBlue'
                        );
                        const brElement = document.createElement('div');
                        element.after(brElement);
                        break;
                    case 'ul':
                        element.classList.add('list-disc', 'pl-5', 'mb-4');
                        break;
                    case 'ol':
                        element.classList.add('list-decimal', 'pl-5', 'mb-4');
                        break;
                    case 'a':
                        element.classList.add('text-blue-500', 'hover:underline');
                        break;
                    case 'strong':
                        // If the strong tag contains an img, apply block display and center it
                        const imgInsideStrong = element.querySelector('img');
                        if (imgInsideStrong) {
                            element.classList.add('block', 'mx-auto','max-w-[500px]','h-auto'); // Make the strong element a block-level and centered
                        }
                        break;
                        case 'figure':
                            // If the strong tag contains an img, apply block display and center it
                            const imgInsideStrong2 = element.querySelector('img');
                            if (imgInsideStrong2) {
                                element.classList.add('block', 'mx-auto','max-w-[500px]','h-auto'); // Make the strong element a block-level and centered
                            }
                            break;
                    default:
                        break;
                }

                // Recursively modify child elements
                Array.from(element.children).forEach((child) => modifyElements(child as HTMLElement));
            };

            const bodyElement = parsedHtml.body;
            modifyElements(bodyElement); // Modify the parsed HTML
            setContent(bodyElement.innerHTML); // Set the modified content as HTML string

            setLoading(false); // Set loading to false after data is processed
        } else {
            console.log('No such document!');
            setLoading(false); // Set loading to false if document is not found
        }
    };

    useEffect(() => {
        getSingleDocument(); // Fetch the document on component mount
    }, [id]); // Re-fetch if the ID changes

    return (
        <div className="min-h-[80vh] bg-customBlue">
            {loading ? (
                // Display a loader while content is loading
                <div className="flex justify-center items-center h-[80vh]">
                    <p className="text-white text-2xl">Loading...</p>
                </div>
            ) : (
                // Display content after loading
                <div className="h-full container mx-auto bg-repeat bg-[url('https://cdn.svgator.com/images/2022/06/animated-svg-background-css.svg')]">
                    <div className="p-9 h-[300px] bg-customBlue bg-opacity-95 flex flex-col items-center justify-center">
                        <h2 className="text-white text-2xl text-center">
                            {title}
                        </h2>
                        <p className="text-slate-300 text-lg m-2 truncate">
                            &nbsp;&nbsp; {authorName} &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; {dateCreated}
                        </p>
                    </div>
                    {/* Use dangerouslySetInnerHTML to render the content */}
                    <div className="p-9 bg-white bg-opacity-95" dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            )}
        </div>
    );
}

export default CurrentBlog;
