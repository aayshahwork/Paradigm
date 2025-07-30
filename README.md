# Paradigm Consulting Website

A modern, responsive website for Paradigm, Berkeley's premier student consulting organization. Built with React and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with Berkeley brand colors
- **Modular Components**: Well-organized, reusable React components
- **Smooth Navigation**: Fixed header with smooth scrolling to sections
- **Contact Form**: Interactive contact form for client inquiries
- **Team Showcase**: Highlighting team members and their expertise
- **Client Testimonials**: Showcasing successful client partnerships

## Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Organization overview with key values and principles
3. **Services**: Comprehensive list of consulting services offered
4. **Clients**: Client testimonials and success stories
5. **Team**: Team member profiles with roles and expertise
6. **Contact**: Contact form and business information
7. **Footer**: Additional links and social media

## Technology Stack

- **React 19**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **Inter Font**: Clean, professional typography

## Getting Started

### Prerequisites

- Node.js (v20.14.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd paradigm
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Services.jsx       # Services section
│   ├── Clients.jsx        # Clients section
│   ├── Team.jsx           # Team section
│   ├── Contact.jsx        # Contact section
│   └── Footer.jsx         # Footer component
├── App.jsx                # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles and Tailwind imports
```

## Customization

### Colors

The website uses Berkeley brand colors defined in `tailwind.config.js`:

- `berkeley-blue`: #003262 (Primary brand color)
- `berkeley-gold`: #FDB515 (Accent color)

### Content

Each component contains sample content that can be easily customized:

- Team member information in `Team.jsx`
- Service offerings in `Services.jsx`
- Client testimonials in `Clients.jsx`
- Contact information in `Contact.jsx`

### Styling

The website uses Tailwind CSS classes for styling. You can modify the design by:

- Updating Tailwind classes in component files
- Adding custom CSS in `index.css`
- Modifying the Tailwind configuration in `tailwind.config.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:

- Email: contact@paradigm-berkeley.org
- Phone: (510) 555-0123
