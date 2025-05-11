# Home Automation Demo Website

Welcome to the Home Automation Demo Website! This is a simple web application where you can control a simulated light bulb using voice commands. The system uses speech recognition technology to understand commands such as "Turn on the light" and "Turn off the light."

This project was originally a first-year college project in which I developed a virtual assistant to control an LED light using an Arduino Uno. Unfortunately, due to software issues, I lost the original code, but I recreated a working demo to showcase the project.

## Features

- **Voice-controlled Bulb**: Control the light bulb by saying "Turn on the light" or "Turn off the light."
- **Microphone Indicator**: See when the microphone is actively recording.
- **Bulb Status**: The bulb changes color based on voice commands (yellow when turned on, black when turned off).

## Setup

To run this project locally, follow the steps below:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later) installed on your machine.
- A modern web browser (Chrome, Firefox, etc.).
- An active internet connection for API calls.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/home-automation-demo.git
cd home-automation-demo
```

### 2. Install dependencies

Run the following command to install all necessary packages:
```bash
npm install
```

### 3. Configure API Key

- Sign up for an account at AssemblyAI.

- Create a new API key in your AssemblyAI account.

- Create a .env file in the root directory of the project and add the following line:

```bash
ASSEMBLYAI_API_KEY=your-api-key-here
```

### 4. Run the application

After setting up the API key, you can start the application with:
```bash
node server.js
```
The server will run on http://localhost:3000. Open this URL in your browser to interact with the demo.

### 5. Using the Demo
Once the app is running:

- Click the "Start Recording" button to begin recording your voice.

- Say "Turn on the light" to turn the bulb yellow.

- Say "Turn off the light" to turn the bulb back to black.

- You will see a mic status indicator telling you when the mic is recording.

## Contributing
1. Feel free to fork this repository and make changes! If you want to contribute, please follow these steps:

2. Fork the repository.

3. Create a new branch (git checkout -b feature/your-feature).

4. Make your changes and commit them (git commit -am 'Add new feature').

5. Push to the branch (git push origin feature/your-feature).

6. Create a new Pull Request.

## License
This project is open-source and available under the MIT License.

