"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface ImageSliderProps {
    images: string[];
}

const ISlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="relative flex h-[50vh] justify-center container mx-auto">
            <div className="w-[50%]  h-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full  flex-shrink-0">
                            <Image width={500} height={500} src={image} alt={`Image ${index}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>

                <button
                    className="absolute top-1/2 bg-red-600 left-0 transform -translate-y-1/2"
                    onClick={goToPreviousImage}
                    disabled={currentImageIndex === 0}
                >
                    Previous
                </button>

                <button
                    className="absolute top-1/2 bg-blue-600 right-0 transform -translate-y-1/2"
                    onClick={goToNextImage}
                    disabled={currentImageIndex === images.length - 1}
                >
                    Next
                </button>
            </div>

        </div>

    );
};

export default ISlider;
