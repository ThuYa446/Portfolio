import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frontend Developer Portfolio');

  readonly about = {
    name: 'Your Name',
    role: 'Frontend Developer & UI Designer',
    summary:
      'I build elegant, performance-focused web experiences with Angular, responsive design systems, and a strong eye for detail. I enjoy turning creative ideas into polished, conversion-ready interfaces.',
    location: 'Based in your city',
    email: 'your.email@example.com',
    phone: '+00 000 000 000'
  };

  readonly stats = [
    { label: 'Projects', value: '8+' },
    { label: 'Years', value: '2+' },
    { label: 'Focus', value: 'UI/UX' },
    { label: 'Stack', value: 'Angular' }
  ];

  readonly highlights = [
    'Responsive, accessible UI development',
    'Modern design systems and motion polish',
    'Component-driven architecture with Angular',
    'Strong collaboration with product and design teams'
  ];

  readonly skills = [
    'Angular',
    'TypeScript',
    'HTML5',
    'CSS3 / SCSS',
    'Responsive Design',
    'Git',
    'Figma',
    'Performance Optimization'
  ];

  readonly experience = [
    {
      title: 'Frontend Developer',
      company: 'Freelance / Personal Projects',
      period: '2024 – Present',
      description: 'Designed and developed portfolio, landing pages, and UI-rich web experiences with a modern aesthetic.'
    },
    {
      title: 'Web Designer / Frontend Focus',
      company: 'Creative Portfolio Work',
      period: '2023 – 2024',
      description: 'Created visually compelling interfaces, reusable components, and user-first experience flows.'
    }
  ];

  readonly projects = [
    {
      title: 'Modern Portfolio Site',
      description: 'A sleek personal brand site tailored for opportunities in web design and frontend development.'
    },
    {
      title: 'Responsive Landing Page',
      description: 'A high-converting UI concept with strong typography, visual hierarchy, and smooth interactions.'
    }
  ];
}
