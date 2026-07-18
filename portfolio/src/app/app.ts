import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Thuya Oo | Frontend Developer Portfolio');

  readonly about = {
    name: 'Thuya Oo',
    role: 'Frontend Developer & UI Designer',
    summary:
      'I create refined, responsive web experiences with Angular, TypeScript, and a strong focus on clean frontend architecture. I enjoy translating design ideas into polished, performant interfaces that feel modern, accessible, and user-centered.',
    location: 'Yangon, Myanmar',
    email: 'Available on request',
    phone: 'Available on request'
  };

  readonly stats = [
    { label: 'Projects', value: '5+' },
    { label: 'Years', value: '2+' },
    { label: 'Focus', value: 'UI/UX' },
    { label: 'Stack', value: 'Angular' }
  ];

  readonly highlights = [
    'Responsive, accessible frontend development',
    'Modern design systems and visual polish',
    'Component-driven Angular architecture',
    'Clear collaboration with product and design teams'
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
      description: 'Built portfolio sites, landing pages, and polished UI-driven web experiences with a modern, conversion-focused approach.'
    },
    {
      title: 'Web Designer / Frontend Focus',
      company: 'Creative Portfolio Work',
      period: '2023 – 2024',
      description: 'Created reusable interface components, responsive layouts, and visually compelling user experiences for digital products and personal branding.'
    }
  ];

  readonly projects = [
    {
      title: 'Personal Portfolio',
      description: 'A refined personal brand website showcasing frontend skills, design sensibility, and polished user experience.'
    },
    {
      title: 'Responsive Landing Experience',
      description: 'A conversion-ready landing page concept with clear visual hierarchy, consistent spacing, and smooth interactions.'
    },
    {
      title: 'Design System Concepts',
      description: 'Reusable UI patterns and component-driven layouts created for scalable, maintainable frontend implementation.'
    }
  ];
}
