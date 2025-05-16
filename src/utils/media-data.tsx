import photo1 from '../assets/img/photo1.jpg';
import photo2 from '../assets/img/photo2.jpg';
import photo3 from '../assets/img/photo3.jpg';
import photo4 from '../assets/img/photo4.jpg';

import video1 from '../assets/img/video.mp4';
import video2 from '../assets/img/video2.mp4';
import video3 from '../assets/img/video3.mp4';
import video4 from '../assets/img/video4.mp4';
import video5 from '../assets/img/video5.mp4';
import video7 from '../assets/img/video7.mp4';
import video8 from '../assets/img/video8.mp4';
import { GalleryItem } from '../components/custom-components/Gallery.tsx';

export interface MediaItem {
    src: string;
    type: "image" | "video";
}


export const mediaItems: MediaItem[] = [
    { src: photo1, type: "image" },
    { src: video1, type: "video" },
    { src: photo2, type: "image" },
    { src: video2, type: "video" },
    { src: photo3, type: "image" },
    { src: video3, type: "video" },
    { src: video4, type: "video" },
    { src: video5, type: "video" },
    { src: photo2, type: "image" },
    { src: photo4, type: "image" },
    { src: video7, type: "video" },
    { src: video8, type: "video" },
    { src: photo3, type: "image" }
]
export const galleryItems1: GalleryItem[] = [
    { src: photo1, type: "image" },
    { src: photo2, type: "image" },
    { src: photo3, type: "image" }
];

export const galleryItems2: GalleryItem[] = [
    { src: video1, type: "video" },
    { src: video2, type: "video" },
    { src: video3, type: "video" }
];
