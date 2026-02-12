# Study Buddy Hub

**Study Buddy Hub** is a student-led platform designed to enhance academic success at Sefako Makgatho Health Sciences University (SMU). It provides peer mentorship, tutoring connections, and access to essential study materials.

## Features

- **Resource Repository**: Easy access to study materials for various schools (Science & Tech, Medicine, Pharmacy, etc.) via Google Drive integrations.
- **Kutlwano Book Club**: A community for reading enthusiasts to join sessions and workshops.
- **Tutoring Services**: A platform to request peer tutors for specific modules.
- **Announcements & AI**: Weekly study tips and an AI-powered study assistant (Gemini) to help with academic questions.

## Project Setup

### Prerequisites

- Node.js & npm installed
- A Google Cloud API Key (for Gemini AI)
- A Gmail App Password (for email notifications)

### Installation

1.  **Clone the repository**
    ```sh
    git clone <YOUR_GIT_URL>
    cd study-buddy-hub
    ```

2.  **Install Frontend Dependencies**
    ```sh
    npm install
    ```

3.  **Setup Backend (For Emails & AI)**
    - Navigate to the backend folder (create one if it doesn't exist, see instructions below).
    - `cd backend`
    - `npm install express nodemailer cors dotenv @google/generative-ai`
    - Create a `.env` file in the `backend` folder:
      ```env
      EMAIL_PASSWORD=your_gmail_app_password
      GEMINI_API_KEY=your_gemini_api_key
      ```

### Running the Application

1.  **Start the Backend Server**
    ```sh
    cd backend
    node server.js
    ```

2.  **Start the Frontend Development Server**
    ```sh
    # In a new terminal window, inside the root folder
    npm run dev
    ```

## Technologies Used

- **Frontend**: Vite, React, TypeScript, Tailwind CSS, shadcn-ui
- **Backend**: Node.js, Express
- **AI**: Google Gemini API
- **Email**: Nodemailer

## License

© 2026 Study Buddy SMU. All rights reserved.
