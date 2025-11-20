# Abhishek Pathak Portfolio Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Abhishek Pathak - Full-Stack Web Developer Portfolio

### 1.2 Website Description
A futuristic, immersive, and premium portfolio website showcasing the work and skills of Full-Stack Web Developer Abhishek Pathak. The site features cutting-edge animations, 3D elements, and smooth scrolling interactions.

### 1.3 Technology Stack
- React + Vite + TailwindCSS
- GSAP for micro & macro animations
- GSAP ScrollTrigger for scroll-driven motion
- Locomotive Scroll for smooth parallax scrolling
- Spline for 3D integration
- Phosphor Icons (light weight)
- Fully responsive across all devices

## 2. Loading Animation & Preloader

### 2.1 Preloader Features
- Fullscreen preloader with centered animated text:'Abhishek Pathak'\n- GSAP-driven progress bar filling from 0% to 100%\n- After completion:\n  + Progress bar fades out
  + Preloader scales down and fades away
  + Website content fades in smoothly
- Premium, smooth, and high-tech feel

### 2.2 Animation Code Reference
```javascript
gsap.to('.progress-bar', {
  width: '100%',
  duration: 2,
  ease: 'power2.out',
  onComplete: () => {
    gsap.to('.preloader', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      onComplete: () => {
        document.querySelector('.preloader').style.display = 'none';\n      }
    });
  }
});\n```

## 3. Website Sections

### 3.1 Homepage / Hero Section
\n#### Content\n- Large animated headline: 'Hi, I'm Abhishek — Full-Stack Web Developer'
- Subtitle with glowing 'Hire Me' CTA button
\n#### Background Elements
- Fullscreen Spline 3D model embed: `<iframe src='https://my.spline.design/orb-fbGp9hFeP42G7XmmRYxfFc53/' frameborder='0' width='100%' height='100%'></iframe>`
- Floating neon orbs with GSAP yoyo motion
\n#### Animations
- Headline: opacity0 → 1, y50 → 0, blur → 0
- CTA button: glowing hover pulse effect
- Spline model fades in from the right
- Glowing elements float with repeat animations

#### Floating Orb Animation Code
```javascript
gsap.to('.glow-orb', {
  y: -20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});
```

### 3.2 About Section
\n#### Layout
**Left Side:**
- Profile image (profile.png) inside glowing circular frame
- Hover effect: subtle lift & rotate\n\n**Right Side:**
- Short bio\n- Skills grid displaying: HTML, CSS, JavaScript, React, Node.js, MongoDB, GSAP\n- Phosphor icons (light weight)\n
#### Animations
- Section fade with blur-to-clear transition
- Image slides in from the left
- Skill icons appear with stagger effect

### 3.3 Projects Section

#### Desktop Layout
- Horizontal bento-style scroll layout
- 6 glassmorphic project cards
\n#### Card Content
- Project images: project-3.png, project-5.png, project-6.png (and 3 additional project images)
- Project title\n- Short description
- Tech stack icons
- Glowing CTA button

#### Hover Effects
- Card lifts upward\n- Neon glow border intensifies
\n#### Animations
- GSAP + ScrollTrigger: cards animate with fade/scale/y stagger
- Locomotive Scroll interaction
\n#### Mobile Behavior
- Cards become vertical stack\n- Draggable/swipeable slider functionality

### 3.4 Contact Section

#### Form Fields
- Name input
- Email input
- Message textarea\n\n#### Styling
- Glassmorphic input fields
- Glowing focus effect on active inputs
- Social icons: GitHub, LinkedIn\n\n#### Animations
- Input fields slide in from left
- Send button pulses on hover
\n### 3.5 Footer

#### Content
- Mini navigation links
- Social media icons
- Background with floating glowing particles

#### Animations\n- GSAP fade and slide-up transition
\n## 4. Responsive Design

### 4.1 Mobile Adaptations
- Hero and About sections stack vertically\n- Spline 3D model scales smoothly
- Projects become swipeable carousel
- Fluid typography with adjusted text sizes

### 4.2 Mobile Navigation Bar (Mandatory)
- **Position:** Fixed at bottom of screen
- **Behavior:** Sticky with glassmorphic styling
- **Design:** Rounded top corners with glowing border
- **Layout:** Centered icons\n- **Active State:** Neon glow on active section
- **Animation:** Smooth slide-up when appearing
- **Compatibility:** Works seamlessly with Locomotive Scroll

## 5. Animation Strategy

### 5.1 Animation Tools & Techniques
- GSAP ScrollTrigger for scroll-based motion
- Locomotive Scroll for silky-smooth parallax effects
- GSAP Timelines for chained animations
- Methods: from(), fromTo(), stagger\n- Blur-to-clear transitions throughout

### 5.2 Spinner/Loader\n- Animated loader appears on website refresh
- Smooth loading experience
\n## 6. Design System

### 6.1 Typography
- Font Family: Inter\n- Weight: Light with minimal letter spacing
\n### 6.2 Icons
- Icon Library: Phosphor Icons (light weight)
\n### 6.3 Color Palette
- Primary Colors: Blues, violets, neon gradients
- Accent: Glowing neon effects on interactive elements

### 6.4 Visual Style
- Glassmorphic cards with frosted glass effect
- Soft shadows for depth
- Glowing edges on interactive elements
-Neumorphic glow effect on buttons
- Overall aesthetic: futuristic, clean, glowing, premium

### 6.5 Design Elements
- Rounded corners on cards and containers
- Neon border highlights on hover states
- Floating particle effects in background
- Smooth gradient transitions
\n## 7. Reference Images

### 7.1 Design Reference
- reference.png: Visual aesthetic reference for neon, glowing, modern elegance
\n### 7.2 Profile Image
- profile.png: Developer profile photo for About section

### 7.3 Project Images
- project-3.png: Project showcase image
- project-5.png: Project showcase image
- project-6.png: Project showcase image