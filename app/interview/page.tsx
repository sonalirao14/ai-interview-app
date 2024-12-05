"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Play, Square } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Interview() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const questions = [
    "Tell me about yourself.",
    "What specific projects or internships have you been involved in that relate to marketing, and what roles did you play in those experiences?",
    "Describe a time when you faced a challenging problem at work. How did you handle it?",
    "What strategies do you use to prioritize tasks when managing multiple projects?",
    // Add all remaining 26 questions here...
  ];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        console.log("Recording stopped, blob created:", blob);

       
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setIsAnswering(false);
        } else {
          router.push("/completion");
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setIsAnswering(true);
    } catch (err) {
      console.error("Error starting recording:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-[#1e2538] border-none p-8">
        <div className="grid gap-6">
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-[#252b3b] rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Question {currentQuestionIndex + 1}/{questions.length}
              </h2>
              <p>{questions[currentQuestionIndex]}</p>
            </div>

            <div className="flex justify-center gap-4">
              {!isAnswering ? (
                <Button
                  onClick={startRecording}
                  className="bg-[#7c3aed] hover:bg-[#6d28d9]"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Answer
                </Button>
              ) : (
                <Button onClick={stopRecording} variant="destructive">
                  <Square className="w-4 h-4 mr-2" />
                  Stop Recording
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
