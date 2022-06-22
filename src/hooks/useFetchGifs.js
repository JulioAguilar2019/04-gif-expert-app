import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {

        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        //en emma script 6 si tenemos una variable que apunta al mismo nombre de una variable podemos dejar
        //solo el images
        images,
        isLoading
    }
}
