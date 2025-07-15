/**
 * The GDevelopers - Search Functionality (Team Directory)
 * Handles site-wide search capabilities with proper relative paths
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Search script loaded (team directory)');
    
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchClose = document.getElementById('search-close');
    const searchForm = document.getElementById('search-form');
    
    console.log('Search elements:', {
        searchToggle: !!searchToggle,
        searchOverlay: !!searchOverlay,
        searchInput: !!searchInput,
        searchResults: !!searchResults,
        searchClose: !!searchClose,
        searchForm: !!searchForm
    });
    
    // Enhanced search data with more content and keywords
    const searchData = [
        // Projects
        {
            title: "SmartHealth App",
            description: "A health monitoring application with AI-driven insights and personalized recommendations.",
            keywords: "mobile app development healthcare AI artificial intelligence monitoring health",
            url: "../projects/project1.html",
            type: "project"
        },
        {
            title: "EcoTrack Platform",
            description: "A sustainability platform that helps organizations track and reduce their environmental impact.",
            keywords: "web development sustainability environment dashboard tracking eco-friendly",
            url: "../projects/project2.html",
            type: "project"
        },
        {
            title: "DevConnect",
            description: "A collaboration tool for developers with real-time code sharing and communication features.",
            keywords: "developer tool collaboration code sharing real-time communication",
            url: "../projects/project3.html",
            type: "project"
        },
        
        // Blog posts
        {
            title: "The Future of Web Development in 2023",
            description: "Exploring emerging trends and technologies shaping the future of web development.",
            keywords: "web development trends future technologies emerging",
            url: "../blog/post1.html",
            type: "blog"
        },
        {
            title: "Building Scalable APIs with Node.js",
            description: "Best practices and architecture patterns for building robust and scalable APIs.",
            keywords: "node.js API development backend scalability architecture patterns",
            url: "../blog/post2.html",
            type: "blog"
        },
        {
            title: "Optimizing React Applications for Performance",
            description: "Techniques and tools to improve the performance of your React applications.",
            keywords: "react performance optimization techniques tools frontend",
            url: "../blog/post3.html",
            type: "blog"
        },
        
        // Pages
        {
            title: "About Us",
            description: "Learn more about The GDevelopers team and our mission.",
            keywords: "team mission about us developers community",
            url: "../index.html#about",
            type: "page"
        },
        {
            title: "Our Services",
            description: "Explore the comprehensive software development services we offer.",
            keywords: "services software development web mobile backend cloud",
            url: "../index.html#services",
            type: "page"
        },
        {
            title: "Contact Us",
            description: "Get in touch with The GDevelopers team.",
            keywords: "contact email phone location message",
            url: "../index.html#contact",
            type: "page"
        },
        
        // Team members
        {
            title: "Ayush Kumar",
            description: "Founder & Lead Developer at The GDevelopers",
            keywords: "founder lead developer team member",
            url: "index.html",
            type: "team"
        },
        {
            title: "Chanchal Saini",
            description: "Partner & Senior Developer at The GDevelopers",
            keywords: "partner senior developer backend team member",
            url: "index.html",
            type: "team"
        },
        {
            title: "Vikram Singh",
            description: "Mobile Developer at The GDevelopers",
            keywords: "mobile developer react native flutter team member",
            url: "index.html",
            type: "team"
        },
        {
            title: "Deepa Gupta",
            description: "DevOps Engineer at The GDevelopers",
            keywords: "devops engineer cloud infrastructure CI/CD team member",
            url: "index.html",
            type: "team"
        },
        {
            title: "Arjun Kumar",
            description: "Full Stack Developer at The GDevelopers",
            keywords: "full stack developer MERN cloud team member",
            url: "index.html",
            type: "team"
        },
        
        // Additional content
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android with modern design principles.",
            keywords: "mobile app development iOS Android cross-platform services",
            url: "../index.html#services",
            type: "service"
        },
        {
            title: "Web Development",
            description: "Responsive, user-friendly websites and web applications built with cutting-edge technologies.",
            keywords: "web development responsive website applications services",
            url: "../index.html#services",
            type: "service"
        },
        {
            title: "Backend Solutions",
            description: "Scalable server-side applications, APIs, and database solutions to power your products.",
            keywords: "backend server-side API database solutions services",
            url: "../index.html#services",
            type: "service"
        },
        {
            title: "Cloud Services",
            description: "Cloud-native applications and infrastructure management for optimal performance.",
            keywords: "cloud services infrastructure management applications",
            url: "../index.html#services",
            type: "service"
        }
    ];
    
    // Toggle search overlay
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            console.log('Search toggle clicked');
            e.preventDefault();
            searchOverlay.classList.add('active');
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        });
    }
    
    // Close search overlay
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            console.log('Search close clicked');
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                console.log('Escape key pressed');
                searchOverlay.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });
    }
    
    // Handle search
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            console.log('Search form submitted');
            e.preventDefault();
            performSearch();
        });
        
        // Live search as you type
        searchInput.addEventListener('input', debounce(function() {
            console.log('Search input changed:', searchInput.value);
            performSearch();
        }, 300));
    }
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        console.log('Performing search for:', query);
        
        if (query.length < 2) {
            searchResults.innerHTML = '<div class="search-message">Please enter at least 2 characters to search</div>';
            return;
        }
        
        // Improved search algorithm with relevance scoring
        const results = searchData.map(item => {
            // Calculate relevance score
            let score = 0;
            
            // Title match (highest weight)
            if (item.title.toLowerCase().includes(query)) {
                score += 10;
                // Exact title match or starts with query
                if (item.title.toLowerCase() === query || 
                    item.title.toLowerCase().startsWith(query + ' ')) {
                    score += 5;
                }
            }
            
            // Description match (medium weight)
            if (item.description.toLowerCase().includes(query)) {
                score += 5;
            }
            
            // Keywords match (good weight)
            if (item.keywords && item.keywords.toLowerCase().includes(query)) {
                score += 8;
                
                // Check if it's an exact keyword match
                const keywords = item.keywords.toLowerCase().split(' ');
                if (keywords.includes(query)) {
                    score += 3;
                }
            }
            
            return {
                ...item,
                score: score
            };
        }).filter(item => item.score > 0)
          .sort((a, b) => b.score - a.score);
        
        console.log('Search results:', results);
        
        // Display results
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-message">No results found for "' + query + '"</div>';
        } else {
            // Group results by type
            const groupedResults = {
                project: results.filter(item => item.type === 'project'),
                blog: results.filter(item => item.type === 'blog'),
                page: results.filter(item => item.type === 'page'),
                team: results.filter(item => item.type === 'team'),
                service: results.filter(item => item.type === 'service')
            };
            
            let resultsHTML = '';
            
            // Team members (show first on team page)
            if (groupedResults.team.length > 0) {
                resultsHTML += '<div class="search-category"><h3>Team Members</h3><ul>';
                groupedResults.team.forEach(item => {
                    resultsHTML += createResultItem(item, query);
                });
                resultsHTML += '</ul></div>';
            }
            
            // Projects
            if (groupedResults.project.length > 0) {
                resultsHTML += '<div class="search-category"><h3>Projects</h3><ul>';
                groupedResults.project.forEach(item => {
                    resultsHTML += createResultItem(item, query);
                });
                resultsHTML += '</ul></div>';
            }
            
            // Blog posts
            if (groupedResults.blog.length > 0) {
                resultsHTML += '<div class="search-category"><h3>Blog Posts</h3><ul>';
                groupedResults.blog.forEach(item => {
                    resultsHTML += createResultItem(item, query);
                });
                resultsHTML += '</ul></div>';
            }
            
            // Services
            if (groupedResults.service.length > 0) {
                resultsHTML += '<div class="search-category"><h3>Services</h3><ul>';
                groupedResults.service.forEach(item => {
                    resultsHTML += createResultItem(item, query);
                });
                resultsHTML += '</ul></div>';
            }
            
            // Pages
            if (groupedResults.page.length > 0) {
                resultsHTML += '<div class="search-category"><h3>Pages</h3><ul>';
                groupedResults.page.forEach(item => {
                    resultsHTML += createResultItem(item, query);
                });
                resultsHTML += '</ul></div>';
            }
            
            searchResults.innerHTML = resultsHTML;
        }
    }
    
    function createResultItem(item, query) {
        // Highlight the query in the title and description
        const highlightedTitle = highlightText(item.title, query);
        const highlightedDescription = highlightText(item.description, query);
        
        return `
            <li class="search-result-item">
                <a href="${item.url}">
                    <h4>${highlightedTitle}</h4>
                    <p>${highlightedDescription}</p>
                </a>
            </li>
        `;
    }
    
    function highlightText(text, query) {
        const regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    // Debounce function to limit how often a function is called
    function debounce(func, delay) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }
}); 