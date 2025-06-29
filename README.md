# CareConnect

A multilingual healthcare platform that connects patients with doctors. Built with React and TypeScript, supporting Arabic, English, Spanish, and Mandarin.

## Features

- 🌍 **Multilingual Support**: Arabic, English, Spanish, and Mandarin
- 👨‍⚕️ **Doctor Directory**: Browse and filter doctors by specialty and language
- 💬 **Chat Interface**: Interactive chat for patient-doctor communication
- 📱 **Responsive Design**: Mobile-first design with modern UI
- 🔍 **Smart Filtering**: Filter doctors by language and specialty
- 📋 **Doctor Profiles**: Detailed doctor information and booking

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Routing**: React Router DOM
- **Styling**: Custom CSS with utility classes (Tailwind-inspired)
- **Icons**: Custom SVG icon components
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd careconnect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   └── figma/           # UI components
│       ├── ui/          # Reusable UI components
│       └── ...          # Feature-specific components
├── styles/
│   └── globals.css      # Global styles
└── App.tsx              # Main app component with routing
```

## Deployment

This project is configured for easy deployment on Netlify:

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 