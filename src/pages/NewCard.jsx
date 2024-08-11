import React, { useState, useEffect, useContext } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import axios from 'axios';
import { MyContext } from '@/components/contextApi/MyContext';

// const url = 'https://api.unsplash.com/photos/random';
// const accessKey = '5Jxzw6t0XTTrsUBF1BiOYXcNVAO28WeNXa023-NJ_4E';

const url = 'https://api.pexels.com/v1/search';
const accessKey = '9KnuNccxp8YW3ov2mYcVcGZmxITDgKZNOXdwkgK7m1DCFPLHmCu3ld7R';

export function CardWithForm() {
    const { description, setDescription, title, setTitle } = useContext(MyContext);
    const [photos, setPhotos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    /* pexels */
    const getPhotos = () => {
        axios
            .get(url, {
                params: { query: 'landscape', per_page: 36, page: 1 },
                headers: { Authorization: accessKey }
            })
            .then(response => {
                setPhotos(response.data.photos);
                // Handle the photo data here
            })
            .catch(error => console.error('Error fetching photo:', error));
    };
    useEffect(() => {
        getPhotos();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true); // Trigger fade-out

            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 6) % 36);
                setFade(false); // Trigger fade-in
            }, 500); // Match this delay to the CSS transition time (0.5s)
        }, 10000); // Update every 10 seconds

        return () => clearInterval(intervalId);
    }, []);

    const displayedPhotos = photos.slice(currentIndex, currentIndex + 6);
    console.log(currentIndex, displayedPhotos);
    return (
        <>
            <div className="w-full mx-auto p-6">
                <h2 className="text-xl font-semibold text-center mb-4 text-primary">{title}</h2>
                <p className="text-sm text-primary/60 text-justify">
                    {description}
                </p>
            </div>
            <div className='flex justify-center w-full'>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-4 md:p-6 mx-auto">
                {displayedPhotos.map((photo) => {
                    return (
                        <>
                            <div className={`flex gap-2 w-full flex-wrap photo-container ${fade ? 'animate-flip-up' : ''}`} key={photo.id}>
                                <img src={photo.src.portrait} alt={photo.alt} className="w-80 h-80 rounded-md border border-primary " />
                            </div>
                        </>
                    );
                })}
            </div>
            </div>
        </>
    );
}

/* unplash */
// const getPhotos = () => {
//     axios
//         .get('https://api.unsplash.com/photos/random', {
//             params: { count: 6 },
//             headers: { Authorization: `Client-ID ${accessKey}` }
//         })
//         .then(response => {
//             console.log(response.data);
//             setPhotos(response.data);
//             // Handle the photo data here
//         })
//         .catch(error => console.error('Error fetching photo:', error));
// }
