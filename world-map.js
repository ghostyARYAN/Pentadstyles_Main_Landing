/**
 * World Map Visualization
 * Adapts React/Motion concept to Vanilla JS + SVG
 */

// Simplified World Map Path (Equirectangular Projection)
// This is a low-poly representation for visual purpose
const WORLD_PATH = "M760.3,184.7c-2.4-1.9-4.8-2.9-7-2.9c-2.3,0-4.6,0.9-6.3,2.4c-2.2-0.7-3.9-2.3-4.8-4.5c-0.2-1.9,0.3-3.8,1.6-5.4 c-2.3-0.9-4.7-0.9-6.7,0c-2,0.9-3.5,2.6-4.3,4.8c-1.8-0.9-3.3-2.5-4.2-4.4c-0.3-2,0.2-4,1.4-5.7c-0.1-0.1-0.2-0.1-0.4-0.1 c-2.8,1.4-5.3,3.5-7.3,6.2c-0.3-0.9-0.9-1.7-1.7-2.3c-2.2-1.7-5.1-1.9-7.5-0.7c-1.6,0.8-2.7,2.3-3.3,4c-1.8,0.2-3.4,1.1-4.7,2.5 c-1.3,1.4-1.9,3.3-1.8,5.2c-3.1-0.2-5.7,1.8-6.8,4.6c-0.6-0.3-1.3-0.5-2-0.5c-2.9,0-5.4,1.8-6.3,4.5c-2.2-2.1-5.3-3-8.3-2.6 c-0.6-2-2.2-3.6-4.2-4.3c-2-0.7-4.2-0.3-5.9,1c-1.6-2-4-3.1-6.6-3.1c-0.4,0-0.8,0-1.2,0.1c-1.2-2.3-3.6-3.8-6.2-3.8 c-1.6,0-3.1,0.5-4.4,1.5c-1.1-1.8-3.1-2.9-5.2-2.9c-0.8,0-1.6,0.2-2.4,0.5c-1.3-3.1-4.4-5.1-7.8-5.1c-0.6,0-1.1,0.1-1.7,0.2 c-2.1-4.8-6.9-7.8-12.1-7.8c-1.2,0-2.4,0.2-3.5,0.5c-1.5-2.2-4-3.5-6.7-3.5c-0.7,0-1.3,0.1-2,0.3c-1.7-1.8-4-2.8-6.5-2.8 c-2.5,0-4.8,1-6.5,2.8c-1.7-1.8-4-2.8-6.5-2.8c-2.5,0-4.8,1-6.5,2.8c-1.7-1.8-4-2.8-6.5-2.8c-3.2,0-6,1.6-7.7,4.1 c-2.5-1.9-5.6-2.6-8.7-1.9c-0.1-2.9-2.2-5.4-5.1-5.9c-2.9-0.5-5.8,1.2-7,4c-0.9-0.5-2-0.7-3-0.7c-3.3,0-6,2.7-6,6 c0,1,0.3,2,0.7,2.9c-2.7,1.4-4.2,4.3-3.7,7.4c-0.6,0.5-1.2,1-1.6,1.7c-1.6-0.9-3.5-1-5.2-0.3c-1.7,0.7-3,2.2-3.6,3.9 c-3.2,1-5.2,4.1-4.9,7.4c-1.6,1.4-2.4,3.5-2,5.6c0.4,2.1,2,3.8,4,4.4c0.2,2.2,2.1,3.9,4.3,3.9c0.2,0,0.5,0,0.7-0.1 c0.1,0.7,0.4,1.4,0.8,2c-1.2,1.3-1.8,3.1-1.5,4.9c0.2,1.2,0.8,2.3,1.7,3.1c-1.3,2.5-0.9,5.5,1.1,7.6c-1,1.1-1.6,2.6-1.5,4.1 c0,0.1,0,0.2,0,0.4c-1.7,1-2.9,2.8-2.9,4.9c0,1.5,0.6,3,1.6,4c-0.5,1.1-0.7,2.3-0.5,3.6c-0.2,0-0.4-0.1-0.6-0.1 c-3.6,0-6.5,2.9-6.5,6.5c0,1.8,0.7,3.4,1.9,4.6c-0.3,0.6-0.5,1.2-0.5,1.9c0,2.1,1.6,3.9,3.7,4c-0.2,0.6-0.3,1.3-0.3,1.9 c0,3.3,2.7,6,6,6c0.5,0,1-0.1,1.5-0.2c0.8,2.3,2.8,4.1,5.3,4.5c0.4,2.2,2.3,3.9,4.6,3.9c0.2,0,0.4,0,0.6,0c0.3,3,2.8,5.3,5.9,5.3 c0.3,0,0.7,0,1-0.1c1,2,3.1,3.4,5.4,3.4c0.6,0,1.2-0.1,1.8-0.3c0.1,0.1,0.1,0.3,0.2,0.4c0.8,2.3,3,3.9,5.5,3.9c0.8,0,1.5-0.1,2.2-0.4 c0.8,1.4,2.3,2.3,3.9,2.3c0.6,0,1.1-0.1,1.7-0.4c1.1,1.5,2.9,2.3,4.7,2.3c0.8,0,1.6-0.2,2.3-0.5c1.1,1.8,3.1,2.9,5.2,2.9 c1.2,0,2.4-0.4,3.4-1.1c1.2,1.6,3.1,2.6,5.1,2.6c0.6,0,1.2-0.1,1.8-0.3c1,1.6,2.7,2.6,4.6,2.6c0.4,0,0.8,0,1.2-0.1 c0.2,0.4,0.5,0.7,0.8,1l3.5,3c-0.5,1-0.8,2.2-0.8,3.4c0,3.9,3,7.1,6.8,7.4c1.2,3.3,4.3,5.7,8,5.7c1.3,0,2.5-0.3,3.6-0.8 c1.4,2,3.7,3.2,6.2,3.2c0.3,0,0.6,0,0.9-0.1c1.5,3.3,4.8,5.6,8.7,5.6c0.2,0,0.4,0,0.7,0c1.3,1.8,3.4,3,5.7,3c1.7,0,3.2-0.6,4.4-1.6 c1.1,0.2,2.3,0.4,3.4,0.4c6.3,0,11.8-3.4,14.9-8.5c2.4,1.4,5.2,2.3,8.1,2.3c2.9,0,5.7-0.8,8.1-2.3c3.1,5.1,8.7,8.5,14.9,8.5 c1.5,0,3-0.2,4.4-0.6c1.6,1.4,3.8,2.3,6.1,2.3c4.1,0,7.6-2.8,8.7-6.6c1.4,0.6,3,1,4.6,1c5.9,0,10.8-4.2,11.9-9.8 c1.7-1.1,3.7-1.8,5.8-1.8c0.7,0,1.3,0.1,2,0.2c0.2,2.2,2,3.9,4.2,3.9c0.5,0,1-0.1,1.4-0.2c1.3,1.9,3.5,3.2,5.9,3.2 c0.5,0,1-0.1,1.5-0.2c0.2,0.4,0.5,0.8,0.7,1.2c1.6,2.1,4.1,3.4,6.9,3.4c0.5,0,1-0.1,1.5-0.2c1.6,2.4,4.4,4,7.4,4 c0.8,0,1.5-0.1,2.2-0.3c1.9,2.9,5.2,4.8,8.8,4.8c1.6,0,3.1-0.4,4.5-1.1c1.5,1.9,3.8,3.2,6.4,3.2c1.2,0,2.4-0.3,3.4-0.8 c1.5,1.7,3.8,2.8,6.2,2.8c1.8,0,3.5-0.6,4.8-1.6c1.8,1.9,4.3,3.1,7.1,3.1c1.4,0,2.8-0.3,4-0.9c0.8,0.3,1.6,0.5,2.5,0.5 c3.4,0,6.2-2.3,7-5.4c1.2,0.6,2.6,0.9,4,0.9c4.2,0,7.7-2.9,8.7-6.8c1,0.4,2.1,0.6,3.3,0.6c4.5,0,8.3-3.4,8.9-7.8c0,0,0,0,0-0.1 c1.6,0.9,3.5,1.3,5.4,1.3c2.9,0,5.6-1.1,7.6-3c2,1.9,4.7,3,7.6,3c2,0,3.8-0.5,5.5-1.4c1.1,0.5,2.4,0.8,3.7,0.8 c3.8,0,7.1-2.4,8.3-5.8c0.3,0.1,0.6,0.1,0.9,0.1c3.1,0,5.6-2.5,5.6-5.6c0-0.3,0-0.7-0.1-1c2,0.6,4.1,1,6.3,1c4.5,0,8.5-1.5,11.7-4.1 c1.3,0.7,2.8,1.1,4.3,1.1c2.2,0,4.2-0.8,5.8-2.2c1.6,1.4,3.6,2.2,5.8,2.2c5,0,9-4.1,9-9c0,0,0,0,0-0.1c0.9,0.5,1.9,0.7,3,0.7 c3.2,0,5.9-2.5,6-5.7c0.6-0.1,1.2-0.2,1.8-0.4c1.1,0.8,2.4,1.3,3.9,1.3c3.5,0,6.4-2.8,6.5-6.3c0.6-0.3,1.3-0.5,2-0.5 c2.1,0,4,1.5,4.6,3.6c0.6,1.9,2.4,3.3,4.4,3.3c0.4,0,0.7,0,1.1-0.1c1,2.8,3.7,4.8,6.9,4.8c1.4,0,2.8-0.4,3.9-1.1 c1.5,2.1,3.9,3.4,6.7,3.4c1.5,0,2.9-0.4,4.2-1c0.9,0.8,2,1.2,3.2,1.2C990,344.4,992.8,342,993.4,338.9z";

export class WorldMap {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            color: options.color || '#4CAF50',
            width: 800,
            height: 400,
            ...options
        };

        this.init();
    }

    project(lat, lng) {
        // Simple Equirectangular projection
        const x = (lng + 180) * (this.options.width / 360);
        const y = ((-1 * lat) + 90) * (this.options.height / 180);
        return { x, y };
    }

    init() {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("viewBox", `0 0 ${this.options.width} ${this.options.height}`);
        this.svg.style.width = "100%";
        this.svg.style.height = "100%";
        this.svg.style.filter = "drop-shadow(0 0 20px rgba(76, 175, 80, 0.2))";

        // Background Map
        const mapPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        mapPath.setAttribute("d", WORLD_PATH);
        mapPath.setAttribute("fill", "rgba(255, 255, 255, 0.05)");
        mapPath.setAttribute("stroke", "rgba(255, 255, 255, 0.1)");
        this.svg.appendChild(mapPath);

        this.container.appendChild(this.svg);
    }

    addConnection(start, end, delay = 0) {
        const p1 = this.project(start.lat, start.lng);
        const p2 = this.project(end.lat, end.lng);

        // Control point for curve (quadratic bezier)
        // We lift the curve in Y direction based on distance to simulate arc
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2 - (dist * 0.2); // Curve height

        const pathData = `M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`;

        // Connection Path
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathData);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "url(#gradient-line)");
        path.setAttribute("stroke-width", "1");
        path.setAttribute("stroke-dasharray", "4,4"); // Aceternity style dotted line
        path.style.opacity = "0.4";

        // Animated Dot
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "3"); // Slightly larger dot
        dot.setAttribute("fill", "#fff");
        dot.style.filter = "drop-shadow(0 0 5px #fff)"; // Glow effect

        const animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
        animateMotion.setAttribute("dur", "3s"); // Slower, smoother animation
        animateMotion.setAttribute("repeatCount", "indefinite");
        animateMotion.setAttribute("path", pathData);
        animateMotion.setAttribute("begin", `${delay}s`);

        dot.appendChild(animateMotion);

        // Start/End Points
        this.addPoint(p1.x, p1.y);
        this.addPoint(p2.x, p2.y);

        this.svg.appendChild(path);
        this.svg.appendChild(dot);
    }

    addPoint(x, y) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "1.5");
        circle.setAttribute("fill", this.options.color);
        circle.style.opacity = "0.8";
        this.svg.appendChild(circle);

        // Pulse effect
        const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pulse.setAttribute("cx", x);
        pulse.setAttribute("cy", y);
        pulse.setAttribute("r", "1.5");
        pulse.setAttribute("fill", "none");
        pulse.setAttribute("stroke", this.options.color);
        pulse.style.opacity = "0";

        const anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        anim.setAttribute("attributeName", "r");
        anim.setAttribute("from", "1.5");
        anim.setAttribute("to", "6");
        anim.setAttribute("dur", "2s");
        anim.setAttribute("repeatCount", "indefinite");

        const animOp = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animOp.setAttribute("attributeName", "opacity");
        animOp.setAttribute("from", "0.8");
        animOp.setAttribute("to", "0");
        animOp.setAttribute("dur", "2s");
        animOp.setAttribute("repeatCount", "indefinite");

        pulse.appendChild(anim);
        pulse.appendChild(animOp);
        this.svg.appendChild(pulse);
    }

    addDefs() {
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        gradient.id = "gradient-line";
        gradient.setAttribute("x1", "0%");
        gradient.setAttribute("y1", "0%");
        gradient.setAttribute("x2", "100%");
        gradient.setAttribute("y2", "0%");

        const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop1.setAttribute("offset", "0%");
        stop1.setAttribute("stop-color", "transparent");

        const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop2.setAttribute("offset", "50%");
        stop2.setAttribute("stop-color", this.options.color);

        const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop3.setAttribute("offset", "100%");
        stop3.setAttribute("stop-color", "transparent");

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        gradient.appendChild(stop3);
        defs.appendChild(gradient);
        this.svg.prepend(defs);
    }
}
