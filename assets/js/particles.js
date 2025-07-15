/**
 * Particles Animation for The GDevelopers Website
 * Creates a network of connected points in the hero section background
 */
class ParticlesAnimation {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        
        // Default options
        this.options = {
            particleCount: options.particleCount || 60,
            particleColor: options.particleColor || '#4f46e5',
            lineColor: options.lineColor || 'rgba(79, 70, 229, 0.15)',
            particleRadius: options.particleRadius || 3,
            lineWidth: options.lineWidth || 1,
            lineDistance: options.lineDistance || 150,
            speed: options.speed || 1
        };
        
        this.width = this.canvas.width = this.canvas.offsetWidth;
        this.height = this.canvas.height = this.canvas.offsetHeight;
        
        this.mousePosition = {
            x: this.width / 2,
            y: this.height / 2
        };
        
        this.init();
    }
    
    init() {
        // Create particles
        for (let i = 0; i < this.options.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: Math.random() * this.options.speed * 2 - this.options.speed,
                vy: Math.random() * this.options.speed * 2 - this.options.speed,
                radius: Math.random() * this.options.particleRadius + 1,
                color: this.options.particleColor,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
        
        // Setup mouse listener
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mousePosition = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.width = this.canvas.width = this.canvas.offsetWidth;
            this.height = this.canvas.height = this.canvas.offsetHeight;
        });
        
        // Start animation
        this.animate();
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Update and draw particles
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Move particles
            p.x += p.vx;
            p.y += p.vy;
            
            // Bounce off edges
            if (p.x < 0 || p.x > this.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.height) p.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
            this.ctx.fillStyle = `rgba(${this.hexToRgb(p.color)}, ${p.opacity})`;
            this.ctx.fill();
            
            // Connect particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < this.options.lineDistance) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.options.lineColor;
                    this.ctx.lineWidth = this.options.lineWidth;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
            
            // Connect to mouse
            const dx = p.x - this.mousePosition.x;
            const dy = p.y - this.mousePosition.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < this.options.lineDistance * 1.5) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.options.lineColor;
                this.ctx.lineWidth = this.options.lineWidth;
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mousePosition.x, this.mousePosition.y);
                this.ctx.stroke();
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    hexToRgb(hex) {
        // Remove # if present
        hex = hex.replace(/^#/, '');
        
        // Parse hex
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        
        return `${r}, ${g}, ${b}`;
    }
}

// Initialize particles when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const particlesCanvas = document.getElementById('particles-canvas');
    if (particlesCanvas) {
        const particles = new ParticlesAnimation('particles-canvas', {
            particleCount: 80,
            lineDistance: 120
        });
    }
}); 