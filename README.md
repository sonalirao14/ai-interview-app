# AI Interview App

## Overview

The **AI Interview App** is a demo mock interview platform that allows users to practice mock interviews with AI. The app presents a series of pre-defined mock questions and records answers in both audio and video formats. Before starting the interview, users need to grant permission for screen sharing, audio, and video access. The recorded answers are saved and the user moves on to the next question.

The app simulates a real-life interview experience, providing a useful tool for practicing interviews with AI.

## Features

- **Instruction Screen**: A screen that displays instructions to the user before starting the interview.
- **Permission Check Screen**: Requests browser permissions for screen sharing, audio, and video.
  - Uses `navigator.mediaDevices.getUserMedia()` to request audio and video permissions.
  - Uses `navigator.mediaDevices.getDisplayMedia()` for screen sharing.
- **Question Screen**: Displays questions with record answer option.
- **Answer Recording Screen**: Records the user's answers in audio and video formats, and sends the recorded chunks to an API.
- **Test Completion Screen**: Displays after all questions are answered, showing the interview completion status.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered applications with great performance and scalability.
- **Tailwind CSS**: A utility-first CSS framework that helps in building custom and responsive designs easily.
- **TypeScript**: A superset of JavaScript that adds static typing, enhancing development speed and reducing errors in large-scale applications.

## Installation

To run the project locally, follow these steps:

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Clone the repository

First, clone the repository to your local machine:

git clone https://github.com/sonalirao14/ai-interview-app.git
cd ai-interview-app

Install dependencies
Install the required dependencies:
npm install

Run the app locally
Start the development server by running:
npm run dev

This will start the app on http://localhost:3000.

## Access the application
Once the server is running, open your browser and go to http://localhost:3000 to begin the mock interview.

## Permissions
During the interview process, the app will request the following permissions:

# Audio: To capture the user's voice for answering questions.
# Video: To record the user's video for the interview.
# Screen Sharing: If enabled, the app will request permission to share your screen for a more immersive experience.
# Please grant the required permissions for the app to function properly.

## How It Works
# Instruction Screen: The app starts by displaying instructions on how to proceed with the interview.

# Permission Check Screen: The app prompts the user to allow access to their microphone, camera, and screen. These permissions are requested using the navigator.mediaDevices API.

# Question Screen: The app shows each question and plays the question's audio (if available).

# **Answer Recording Screen**: After each question, the user is given a chance to record their response in audio and video format. The recorded media chunks are sent to an API for saving.

#Test Completion Screen: Once all the questions have been answered, the app displays a completion screen with results or next steps.

## Conclusion:
This AI Interview App provides a great platform to practice interviews with AI, offering an interactive and realistic mock interview experience. The app utilizes Next.js, Tailwind CSS, and TypeScript for efficient development and a responsive, user-friendly interface.

