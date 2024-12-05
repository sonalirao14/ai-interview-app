"use client";
import { useEffect, useRef} from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Clock, Building } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  const videoRef=useRef<HTMLVideoElement|null>(null);
  useEffect(() => {
  let stream: MediaStream | null = null;

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((currentStream) => {
      stream = currentStream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      console.log("Camera granted");
    })
    .catch((e) => {
      console.error("Camera access denied", e);
    });

  return () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };
}, []);
  return (
    <>
    <div className="container mx-auto px-4 py-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">Trainee Interview</h1>
      <div className="flex gap-4">
      <div className="flex items-center gap-2 bg-[#ff7043] text-white py-2 px-4 rounded-lg shadow-lg border-6 border-black">
            <Building className="w-5 h-5 text-orange-500" />
            <span>Zeko</span>
          </div>
          <div className="flex items-center gap-2 bg-[#ff5252] text-white py-2 px-4 rounded-lg shadow-lg border border-white">
            <Clock className="w-5 h-5 text-red-500" />
            <span>26 Minutes</span>
          </div>
      </div>
    </div>

    <Card className="bg-[#1e2538] border-none p-4">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full rounded-lg"
              ></video>
            </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Instructions</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-400">
              <li>1.  Ensure stable internet and choose a clean, quiet location.</li>
              <li>
                2.  Permission for access of camera, microphone, entire screen
                sharing is required.
              </li>
              <li>3.  Be in professional attire and avoid distractions.</li>
              <li>
                4.  Give a detailed response, providing as much information as you
                can.
              </li>
              <li>
                5.  Answer the question with examples and projects you have worked
                on.
              </li>
            </ol>

            <div className="bg-[#252b3b] p-4 rounded-lg">
              <Link href="#">
                Click here to try a mock interview with Avya, our AI
                interviewer, and build your confidence before the main
                interview!
              </Link>
            </div>
          </div>
        </div>

      
        <Button
          asChild
          className="w-full font-l-bold text-gray-400"
        >
          <Link href="/permissions">Start Now</Link>
        </Button>
      </div>
    </Card>
  </div>
  </>
  );
}  