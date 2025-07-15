# The GDevelopers

A modern, responsive community website for "The GDevelopers" team showcasing their projects, blog posts, and team information.

## Overview

This website serves as a platform for the developers of "The GDevelopers" team to interact, post blogs about their projects, share new launches, and connect with the community. The website is designed with a futuristic, professional, and modern UI/UX approach.

## Features

- **Homepage**: Introduction to The GDevelopers with sections showcasing services, featured projects, latest blog posts, team highlights, and testimonials.
- **Projects Page**: Display of all projects with filterable categories and detailed project information.
- **Blog Page**: Collection of blog posts from team members with categories and search functionality.
- **Team Page**: Information about team members, their roles, and expertise.
- **Contact Form**: Easy way for visitors to get in touch with the team.
- **Newsletter Subscription**: Allow visitors to subscribe for updates.
- **Dark Mode Toggle**: Switch between light and dark themes for better viewing experience.
- **Enhanced Search Functionality**: Advanced search with relevance scoring across all content types.
- **Responsive Design**: Optimized for all devices from mobile to desktop.
- **Modern UI/UX**: Clean, futuristic design with smooth animations and interactions.

## Tech Stack

- HTML5
- CSS3 (with custom properties, flexbox, and grid)
- JavaScript (vanilla)
- Font Awesome for icons
- Google Fonts
- Particles.js for interactive background effects
- Deployed on GitHub Pages

## Search Functionality

The website features a comprehensive search system that allows users to find content across the entire site:

- **Relevance-Based Results**: Search results are sorted by relevance score.
- **Content Categories**: Results are grouped by content type (Projects, Blog Posts, Team Members, Services, Pages).
- **Keyword Matching**: Enhanced with keywords for better search accuracy.
- **Highlighted Results**: Search terms are highlighted in results for better visibility.
- **Live Search**: Results update as you type for a better user experience.

## Founders

- **Ayush Kumar** - Founder & Lead Developer
- **Chanchal Saini** - Partner & Senior Developer

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/the-gdevelopers.git
   ```

2. Navigate to the project directory:
   ```
   cd the-gdevelopers
   ```

3. Open the project in your code editor to make any changes.

4. To view the website locally, you can use a simple HTTP server:
   ```
   npx http-server
   ```
   Then open your browser to `http://localhost:8080`

## Project Structure

```
the-gdevelopers/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── search.js
│   │   ├── particles.js
│   │   ├── project-filter.js
│   │   └── newsletter.js
│   └── images/
├── blog/
│   ├── index.html
│   ├── search.js
│   ├── post1.html
│   ├── post2.html
│   └── post3.html
├── projects/
│   ├── index.html
│   ├── search.js
│   ├── project1.html
│   ├── project2.html
│   └── project3.html
├── team/
│   ├── index.html
│   └── search.js
├── index.html
├── privacy-policy.html
├── terms-of-service.html
├── cookie-policy.html
└── README.md
```

## Deployment

This website is configured to be deployed on GitHub Pages. To deploy:

1. Push your changes to the `main` branch:
   ```
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. GitHub Actions will automatically deploy the site to GitHub Pages using the workflow defined in `.github/workflows/deploy.yml`.

3. Once deployed, the website will be available at `https://yourusername.github.io/the-gdevelopers/`.

## Customization

- **Images**: Replace the placeholder images in the `assets/images` directory with your own.
- **Content**: Update the content in the HTML files to reflect your team's information.
- **Colors**: Modify the color scheme by changing the CSS variables in the `assets/css/style.css` file.
- **Fonts**: Change the Google Fonts import in the HTML files and update the font family variables in CSS.
- **Search Data**: Update the search data in the search.js files to include your specific content.

## Recent Updates

- **Enhanced Search System**: Implemented advanced search functionality with relevance scoring and better content categorization.
- **Directory-Specific Search**: Created separate search implementations for each directory with proper relative paths.
- **Fixed Navigation Links**: Ensured all links work correctly throughout the site.
- **Added Missing Content Pages**: Created project and blog post pages that were previously missing.
- **Improved Dark Mode**: Enhanced dark mode styling for better contrast and readability.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [NITG License](LICENSE).

## Contact

For any questions or feedback, please reach out to:
- Email: info@thegdevelopers.com
- Location: 123 Innovation Street, Tech Valley
- Phone: +1 (555) 123-4567 