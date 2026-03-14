import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router App" },
    { name: "description", content: "Learn more about our application" },
  ];
}

export default function About() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif", lineHeight: 1.8 }}>
      <h1>About Us</h1>
      <p>
        Welcome to our React Router application. This is a modern web application
        built with React Router v7, Vite, and TypeScript.
      </p>
      <h2>Our Mission</h2>
      <p>
        We're dedicated to creating exceptional web experiences that are fast,
        accessible, and user-friendly.
      </p>
      <h2>Technology Stack</h2>
      <ul>
        <li>React Router v7</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
      </ul>
    </div>
  );
}
