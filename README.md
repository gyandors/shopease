# ShopEase - E-commerce Platform

A modern e-commerce platform built with Next.js, Firebase, and Tailwind CSS.

## Features

- 🔐 **Authentication System**

  - User registration and login
  - Firebase authentication integration

- 🛒 **Shopping Cart**

  - Add/remove products
  - View cart items
  - Protected checkout (requires authentication)

- 🎨 **Modern UI**
  - Responsive design
  - Clean and intuitive interface
  - Tailwind CSS styling

## Tech Stack

- **Frontend Framework**: Next.js 13+ (App Router)
- **Authentication**: Firebase Authentication
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 14+ and npm
- Firebase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gyandors/shopease.git
   cd shopease
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Authentication Flow

1. **User Registration**

   - Navigate to `/signup`
   - Enter email and password
   - Account created in Firebase

2. **User Login**

   - Navigate to `/login`
   - Enter credentials
   - Access protected routes
