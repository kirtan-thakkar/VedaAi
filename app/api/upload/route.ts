import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name:
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ?? process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret:
        process.env.CLOUDINARY_API_SECRET ?? process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No such file exists" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const base64Image = Buffer.from(arrayBuffer).toString("base64");
        const datauri = `data:${file.type};base64,${base64Image}`;

        const uploadResult = await cloudinary.uploader.upload(datauri, {
            folder: "user_uploads",
        });

        return NextResponse.json({
            url: uploadResult.secure_url,
            message: "image uploaded successfully",
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            {
                error: "Failed to upload image",
                message,
            },
            { status: 500 }
        );
    }
}