"use client";
import {CldUploadButton} from "next-cloudinary";

export default function Cloudinary() {
    
    return(
        <CldUploadButton
      options={{ multiple: true }}
      uploadPreset="ml_default"
      onSuccess={(result) => {
        // Handle success, e.g., save URL to state or database
        console.log(result);
      }}
    >
      Upload Images
    </CldUploadButton>
  );
}