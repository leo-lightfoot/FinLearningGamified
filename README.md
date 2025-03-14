# CreditScore Game (MONEYWISE)

A React-based game designed to teach financial literacy and credit management through interactive decision-making scenarios.

[Link to live game](https://moneywisedemo.netlify.app/)

## Table of Contents
- [Project Overview](#project-overview)
- [Technical Stack](#technical-stack)
- [Core Features](#core-features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Note for Windows Users](#note-for-windows-users)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This application is an interactive game that helps users learn about financial literacy, credit management, and responsible financial decision-making. Players progress through various real-life scenarios while managing their credit power and savings.

## Technical Stack

- React
- React Router (v6)
- MobX for state management
- CSS Transitions for animations
- Google Analytics integration

## Core Features

- Credit Power tracking
- Savings management
- Sequential decision-based gameplay
- Interactive scenarios
- Progress tracking

## Project Structure


├── public/
\n│ ├── index.html # Entry point HTML
\n│ ├── favicon.ico # Site favicon
\n│ └── manifest.json # Web app manifest
\n├── src/
\n│ ├── app.js # Main application component
\n│ ├── components/ # Reusable UI components
\n│ ├── pages/ # Game scenario components
\n│ ├── store/ # MobX state management
\n│ ├── styles/ # CSS styles
\n│ ├── images/ # Image assets
\n│ └── fonts/ # Custom fonts

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/leo-lightfoot/FinLearningGamified.git
   cd FinLearningGamified
   ```

2. **Install Dependencies**:
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

## Running the Project

To start the development server, run:
```bash
npm start
```
This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Note for Windows Users

If you are attempting to run the deploy task, make sure to run the following command to allow Git to bump up the file character limit to 4096:
```bash
git config --system core.longpaths true
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
