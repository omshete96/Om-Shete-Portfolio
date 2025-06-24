# Om Shete - Professional Portfolio Website

## Overview

This is a full-stack portfolio application for Om Shete, a Computer Engineering student at Nutan Maharashtra Institute of Engineering and Technology, Pune. Built with React and Node.js, featuring a modern design with Tailwind CSS and shadcn/ui components. The portfolio showcases skills in Full Stack Development, AI/ML, competitive programming achievements, and professional internship experiences.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas for request/response validation

### Development Architecture
- **Monorepo Structure**: Shared types and schemas between client/server
- **Hot Reloading**: Vite HMR for frontend, tsx for backend development
- **Build Process**: Separate build steps for client (Vite) and server (esbuild)

## Key Components

### Frontend Components
- **Navigation**: Responsive navbar with smooth scrolling
- **Hero Section**: Animated landing area with call-to-action buttons
- **About Section**: Personal introduction with downloadable resume
- **Skills Section**: Categorized skill display with progress indicators
- **Portfolio Section**: Project showcase with technology tags
- **Experience Section**: Timeline of professional experience
- **Contact Section**: Form with real-time validation and submission

### Backend Components
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Detailed API request logging for development

### Shared Components
- **Schema Definitions**: Zod schemas for contact messages
- **Type Definitions**: TypeScript interfaces shared between client/server
- **Validation Logic**: Centralized validation rules

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation feedback
2. Frontend validates using shared Zod schema
3. Form data sent to `/api/contact` endpoint
4. Backend validates and stores message
5. Success/error response returned to frontend
6. User receives feedback via toast notification

### Content Management
- Static content rendered from component data
- Dynamic styling with Tailwind CSS variables
- Responsive design with mobile-first approach
- Smooth animations triggered by viewport intersection

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Animation**: Framer Motion for smooth transitions
- **Data Fetching**: TanStack Query for server state
- **Form Management**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **Routing**: Wouter for lightweight routing
- **Styling**: Tailwind CSS with class-variance-authority

### Backend Dependencies
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Session Store**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for request validation
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild for building
- **Development**: Replit-specific plugins for development environment
- **Type Checking**: TypeScript compiler

## Deployment Strategy

### Development Environment
- Runs on port 5000 with Vite development server
- Hot module replacement for frontend changes
- Auto-restart for backend changes via tsx
- PostgreSQL 16 module for database support

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server to `dist/index.js`
3. **Static Assets**: Vite handles asset optimization and bundling
4. **Environment**: Production mode with optimized builds

### Deployment Configuration
- **Platform**: Replit with autoscale deployment
- **Database**: PostgreSQL with Drizzle migrations
- **Port Configuration**: External port 80 maps to internal port 5000
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Changelog

- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.