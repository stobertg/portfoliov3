import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  
  const onScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (typeof window === "undefined") return 500;
  return scrollPos;
};

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export const smoothScrollTo = (selector:any) => {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}

type ProgressCallback = (progress: number) => void;

export const preloadImages = (imageUrls: string[], onProgress?: ProgressCallback): Promise<void> => {
  let loadedImagesCount = 0;

  return new Promise((resolve, reject) => {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImagesCount++;
        onProgress?.((loadedImagesCount / imageUrls.length) * 100);
        if (loadedImagesCount === imageUrls.length) {
          resolve()
        }
      }
      img.onerror = reject
    })
  })
}

export const useImagePreloader = (imageUrls: string[]) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadImages(imageUrls, setProgress).then(() => {
      setIsLoaded(true);
    });
  }, [imageUrls]);

  return { progress, isLoaded };
}
