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

##Install dependencies
Install the required dependencies:
