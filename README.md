# AI Summarizer

## Overview

AI Summarizer is a Progressive Web Application (PWA) that utilizes Generative AI to provide concise and meaningful text summaries. Built with React (Vite) for the frontend, Express.js for the backend, and Ngrok for tunneling, the project aims to offer an efficient and user-friendly experience for text summarization.

## Features

*   **🌐 Offline Support:** PWA functionality for seamless usage.
*   **✨ AI-Powered Summarization:** Uses Gemini AI for accurate and fast text summaries.
*   **⚡ Fast & Lightweight:** Optimized with Vite and Bootstrap for a smooth UI experience.
*   **🔒 Upcoming Enhancements:** User authentication & database integration to store past summaries.
*   **📡 Ngrok Integration:** Enables remote access to the local development environment.

## Tech Stack

*   **Frontend:** React (Vite), TypeScript, Bootstrap
*   **Backend:** Express.js, TypeScript
*   **AI Model:** Google Gemini API
*   **Tunneling:** Ngrok
*   **Package Management:** npm

## Installation & Setup

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/ai-summarizer.git
    cd ai-summarizer
    ```

2.  **Install Dependencies:**

    ```bash
    cd ui && npm install
    cd ../backend && npm install
    ```

3.  **Set Up Ngrok (Optional for Remote Access):**

    ```bash
    ngrok start --all
    ```

4.  **Start the Backend:**

    ```bash
    cd backend
    npm run dev
    ```

5.  **Start the Frontend:**

    ```bash
    cd ui
    npm run dev
    ```

6.  **Access the App:**

    *   Visit `http://localhost:5173` for local usage.
    *   If using Ngrok, use the forwarded URL displayed in the terminal.

## Contribution Guidelines

We welcome contributions! 🚀

### How to Contribute

1.  Fork the repository.
2.  Create a new branch for your feature.
3.  Make your changes and commit them.
4.  Push the branch to your forked repository.
5.  Open a pull request describing your changes.

## Upcoming Features 🚀

*   User Authentication (JWT-based login & signup)
*   Database Integration (MongoDB/PostgreSQL to store summaries)
*   Multi-language Support
*   Dark Mode for better accessibility

## Issues & Support

*   Found a bug? Report it via [GitHub Issues](https://github.com/yourusername/ai-summarizer/issues).
*   Need help? Feel free to reach out!

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed!