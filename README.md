# MAA Website - React i18n Learning Project

This project is a comprehensive learning exercise focused on implementing **react-i18next** for internationalization in a React application. The website showcases "MAA" (Meta Architecture), a fictional industrial architecture firm, while demonstrating best practices for multi-language support.

## 🎯 Learning Objectives

This project was created to learn and implement:

- **react-i18next** setup and configuration
- **Context-based language management** with React Context API
- **Dynamic translation switching** across all components
- **Persistent language preferences** using localStorage
- **Professional translation file organization**
- **Multi-language UI/UX patterns**

## 🌍 Multi-Language Features

### Supported Languages
- **English** (en) - Default language
- **Portuguese** (pt) - Complete translation

### Language Switching
- **Navbar Language Selector**: Globe icon with dropdown in top navigation
- **Footer Language Selector**: Traditional language switcher in footer
- **Synchronized State**: Both selectors work together seamlessly
- **Persistent Preferences**: Language choice saved in localStorage

### Translation Coverage
- Complete website content translated
- Navigation menus and buttons
- Hero section and call-to-actions
- About section with tabs (Story, Mission, Vision)
- Services descriptions and features
- Project portfolio content
- Footer navigation and copyright

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Hero.tsx         # Main hero section
│   ├── Navbar.tsx       # Navigation with language selector
│   ├── Partners.tsx     # Partner logos section
│   ├── AboutSection.tsx # Company information with tabs
│   ├── ServicesSection.tsx # Services showcase
│   ├── ProjectsSection.tsx # Project portfolio
│   ├── CTASection.tsx   # Call-to-action section
│   ├── Footer.tsx       # Footer with language selector
│   └── ui/              # Reusable UI components
├── contexts/
│   └── LanguageContext.tsx # Language state management
├── i18n/                # Internationalization setup
│   ├── index.ts         # i18n configuration
│   └── locales/         # Translation files
│       ├── en.json      # English translations
│       └── pt.json      # Portuguese translations
├── pages/               # Page components
└── App.tsx              # Main app with routing
```

## 🚀 Technology Stack

- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 7.0.0** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing
- **react-i18next** - Internationalization
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **Axios** - HTTP client for dynamic images

## 📦 Key Dependencies

```json
{
  "react-i18next": "^15.0.0",
  "i18next": "^23.0.0",
  "react": "^19.1.0",
  "react-router-dom": "^6.30.1",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.400.0",
  "axios": "^1.6.0"
}
```

## 🛠️ Setup and Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd omaa-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 i18n Implementation Details

### Configuration (`src/i18n/index.ts`)
```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: { en, pt },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });
```

### Language Context (`src/contexts/LanguageContext.tsx`)
- Global language state management
- localStorage persistence
- Dropdown state management
- Language switching functionality

### Translation Files
- **Structured JSON format** for easy maintenance
- **Nested keys** for organized content
- **Professional translations** for both languages

## 🎨 Design Features

- **Modern, professional design** for industrial architecture firm
- **Responsive layout** for all device sizes
- **Dynamic images** from Unsplash API
- **Smooth animations** and transitions
- **Accessible design** with proper semantic HTML

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Flexible grid layouts** for different screen sizes
- **Touch-friendly** language selectors
- **Optimized typography** for readability

## 🔧 Development Notes

### Language Switching Implementation
- Uses React Context for global state
- Synchronized between navbar and footer
- Instant language switching without page reload
- Persistent user preferences

### Component Architecture
- Modular component structure
- Reusable UI components with shadcn/ui
- Type-safe implementation with TypeScript
- Clean separation of concerns

### Performance Considerations
- Lazy loading of translation files
- Optimized image loading with fallbacks
- Efficient state management
- Minimal bundle size impact

## 🎓 Learning Outcomes

This project demonstrates:

1. **Complete i18n setup** from scratch
2. **Context-based state management** for language
3. **Professional translation workflow**
4. **User experience considerations** for multi-language sites
5. **Best practices** for internationalization in React
6. **Real-world implementation** patterns

## 📄 License

This project is created for educational purposes to learn react-i18next implementation.

---

**Note**: This is a learning project showcasing react-i18next implementation. The MAA company and content are fictional and created for demonstration purposes.
