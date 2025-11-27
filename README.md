# ATM Web Application

A modern, responsive ATM simulation with network resilience features that works smoothly on any network condition, including restricted or low-bandwidth environments.

## 🌟 Features

### 🔐 Authentication System
- **Public Access**: No PIN required for initial access
- **Demo Accounts**:
  - Username: `demo123` | PIN: `1234` (Balance: $1,000)
  - Username: `alice` | PIN: `5678` (Balance: $2,500)
- **Biometric Support**: Fingerprint authentication setup available

### 💰 Core Banking Features
- **Balance Inquiry**: Check current account balance
- **Cash Deposits**: Add funds to account with transaction recording
- **Cash Withdrawals**: Remove funds with security verification
- **Transaction History**: View all account activities with timestamps
- **PIN Management**: Change account PIN securely

### 🎨 User Interface Highlights
- **Glass Morphism Design**: Modern frosted glass effects
- **Animated Gradients**: Smooth color transitions and visual feedback
- **Responsive Layout**: Works on mobile, tablet, and desktop
- **Intuitive Navigation**: Clear menu structure and button hierarchy

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌍 Deployment Options

### GitHub Pages (Automatic Deployment)
This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://[username].github.io/[repository-name]/`

### Manual GitHub Pages Deployment
```bash
# Install gh-pages package (already included in devDependencies)
# Deploy to GitHub Pages
npm run deploy
```

### Environment Configuration
For GitHub Pages deployment, no special environment variables are required. The application is configured to work with relative paths.

## 📁 Project Structure
```
project/
├── src/              # Source code
│   ├── components/   # React components
│   ├── contexts/     # React context providers
│   ├── services/     # API service files
│   ├── types/        # TypeScript interfaces
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main App component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── public/           # Static assets
├── dist/             # Built files (generated)
├── vite.config.ts    # Vite configuration
└── README.md         # This file
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run deploy` - Deploy to GitHub Pages

### Technologies Used
- **Frontend**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes.

---
*Built with ❤️ using modern web technologies*