import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name:
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ?? process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret:
    process.env.CLOUDINARY_API_SECRET ?? process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

interface SignatureRequestBody {
  paramsToSign?: Record<string, string | number | boolean>;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SignatureRequestBody;

    const apiSecret =
      process.env.CLOUDINARY_API_SECRET ?? process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

    if (!body?.paramsToSign || !apiSecret) {
      return NextResponse.json({ error: "Missing signature payload" }, { status: 400 });
    }

    const signature = cloudinary.utils.api_sign_request(body.paramsToSign, apiSecret);

    return NextResponse.json({ signature });
  } catch {
    return NextResponse.json({ error: "Failed to generate signature" }, { status: 500 });
  }
}
