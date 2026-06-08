import { useEffect, useState } from "react";

// Keys used in localStorage
export const HERO_IMAGE_KEY = "munna_profile_image_hero";
export const ABOUT_IMAGE_KEY = "munna_profile_image_about";

/**
 * Resizes and compresses an uploaded image via canvas, converting it to an optimized
 * Web-ready JPEG Base64 string that fits perfectly inside localStorage (usually <40kb).
 */
export function compressAndStoreImage(
  file: File,
  key: string,
  onComplete: (base64: string) => void,
  onError: (error: string) => void
) {
  if (!file.type.startsWith("image/")) {
    onError("Selected file is not an image. Please drag/upload a PNG, JPG, or WEBP.");
    return;
  }

  const reader = new FileReader();
  reader.onerror = () => onError("Error reading file.");
  reader.onload = (event) => {
    const dataUrl = event.target?.result as string;
    
    const img = new Image();
    img.onerror = () => onError("Failed to load image structure.");
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;
      
      const MAX_RESOLUTION = 500; // Optimal profile size resolution
      
      if (width > height) {
        if (width > MAX_RESOLUTION) {
          height = Math.round((height * MAX_RESOLUTION) / width);
          width = MAX_RESOLUTION;
        }
      } else {
        if (height > MAX_RESOLUTION) {
          width = Math.round((width * MAX_RESOLUTION) / height);
          height = MAX_RESOLUTION;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        onError("Could not initialize rendering context.");
        return;
      }
      
      // Draw and export as compressed JPEG (0.75 quality)
      ctx.drawImage(img, 0, 0, width, height);
      try {
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.75);
        localStorage.setItem(key, compressedBase64);
        onComplete(compressedBase64);
      } catch (e) {
        onError("Data compression limit exceeded. Please upload a smaller image.");
      }
    };
    img.src = dataUrl;
  };
  reader.readAsDataURL(file);
}

/**
 * Custom React hook to simplify listing, reading, and updating the images.
 */
export function useProfileImage(key: string, type: "hero" | "about") {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      setImage(stored);
    }
  }, [key]);

  const updateImage = (file: File, onSuccess?: () => void, onFailure?: (err: string) => void) => {
    compressAndStoreImage(
      file,
      key,
      (base64) => {
        setImage(base64);
        if (onSuccess) onSuccess();
      },
      (err) => {
        if (onFailure) onFailure(err);
      }
    );
  };

  const removeImage = () => {
    localStorage.removeItem(key);
    setImage("");
  };

  return { image, updateImage, removeImage };
}
