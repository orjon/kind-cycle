# Kind Cycle

A React-based web application for community sharing and sustainability.

## 🌐 Production

Live website location: [https://kindcycle.uk/](https://kindcycle.uk/)

## 🌐 Development

Live dev location: [https://kind-cycle.vercel.app/](https://kind-cycle.vercel.app/)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kind-cycle
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## 🏃‍♂️ How to Run

### Development Mode

To start the development server with hot reload:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Production Preview

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 🏗️ How to Build

### Production Build

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be generated in the `dist/` directory.

### Build for Deployment

The project is configured for deployment on Vercel. The build process automatically:

1. Compiles TypeScript to JavaScript
2. Bundles and optimizes assets
3. Generates static files ready for deployment
4. Push to main branch for Dev deployment

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS
- **Internationalization**: i18next
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── content/       # Content and data
├── locales/       # Internationalization files
├── styles/        # SCSS stylesheets
└── types/         # TypeScript type definitions
```

## 🌍 Internationalization

The application supports multiple languages including English, Spanish, French, Polish, Portuguese, Turkish, Bengali, and Akan.

## 📱 Features

- Multi-language support
- Responsive design
- Category-based navigation
- Location-specific content
- QR code integration
- Community organization listings
