# GSAP Animations Setup Complete! 🎉

GSAP (GreenSock Animation Platform) has been installed and integrated into your website.

## ✅ What's Been Done

1. **Installed GSAP** - `npm install gsap`
2. **Added to Hero component** - Title, subtitle, and buttons now animate with GSAP
3. **Combined with AOS** - Both animation libraries work together

## 🎨 GSAP in Hero Component

```typescript
import { gsap } from 'gsap';
import { useRef } from 'react';

const ctx = gsap.context(() => {
  gsap.from(titleRef.current, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
}, heroRef);
```

## 📝 How to Add GSAP Animations

### Basic Setup

```typescript
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const Component = () => {
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });
    }, containerRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  return (
    <div ref={containerRef}>
      <div ref={elementRef}>Animated content</div>
    </div>
  );
};
```

## 🎭 GSAP Animation Types

### gsap.from()
Animates FROM the specified values TO the current state
```typescript
gsap.from(element, {
  opacity: 0,
  y: 50,
  duration: 1,
});
```

### gsap.to()
Animates FROM current state TO the specified values
```typescript
gsap.to(element, {
  opacity: 0,
  y: -50,
  duration: 1,
});
```

### gsap.fromTo()
Animates FROM one state TO another
```typescript
gsap.fromTo(element, 
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1, duration: 1 }
);
```

## 🎯 Common GSAP Properties

### Position
- `x` - Horizontal position
- `y` - Vertical position
- `z` - Depth (3D)

### Transform
- `scale` - Size (1 = 100%)
- `scaleX`, `scaleY` - Scale on specific axis
- `rotation` - Rotate in degrees
- `rotationX`, `rotationY`, `rotationZ` - 3D rotation

### Appearance
- `opacity` - Transparency (0-1)
- `autoAlpha` - Opacity + visibility
- `backgroundColor` - Color
- `color` - Text color

### Timing
- `duration` - Animation length in seconds
- `delay` - Wait before starting
- `ease` - Easing function
- `stagger` - Delay between multiple elements

## 🎨 Easing Functions

### Power Eases
- `power1.out`, `power2.out`, `power3.out`, `power4.out`
- `power1.in`, `power2.in`, `power3.in`, `power4.in`
- `power1.inOut`, `power2.inOut`, `power3.inOut`, `power4.inOut`

### Special Eases
- `elastic.out` - Bouncy effect
- `back.out` - Overshoot effect
- `bounce.out` - Bouncing effect
- `circ.out` - Circular motion
- `expo.out` - Exponential

## 🚀 Advanced Features

### Timeline
Chain multiple animations
```typescript
const tl = gsap.timeline();
tl.from('.title', { opacity: 0, y: 50 })
  .from('.subtitle', { opacity: 0, y: 30 }, '-=0.5')
  .from('.button', { opacity: 0, scale: 0 });
```

### Stagger
Animate multiple elements with delay
```typescript
gsap.from('.cards', {
  opacity: 0,
  y: 50,
  stagger: 0.2, // 0.2s delay between each
  duration: 1,
});
```

### ScrollTrigger
Trigger animations on scroll
```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.from('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 100,
});
```

## 💡 Implementation Examples

### Hero Section (Already Implemented)
```typescript
gsap.from(titleRef.current, {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
});
```

### Service Cards
```typescript
useEffect(() => {
  gsap.from('.service-card', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
  });
}, []);
```

### Stats Counter with GSAP
```typescript
gsap.to(counterRef.current, {
  innerHTML: 100,
  duration: 2,
  snap: { innerHTML: 1 },
  ease: 'power1.out',
});
```

### Hover Animation
```typescript
const handleMouseEnter = (e) => {
  gsap.to(e.currentTarget, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
  });
};

const handleMouseLeave = (e) => {
  gsap.to(e.currentTarget, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
  });
};
```

### Parallax Effect
```typescript
gsap.to('.parallax', {
  y: -100,
  scrollTrigger: {
    trigger: '.parallax',
    scrub: true,
  },
});
```

## 🎯 Recommended GSAP Usage by Section

### Hero
- Title: `gsap.from()` with `y: 50, opacity: 0`
- Subtitle: Delayed `gsap.from()`
- Buttons: Staggered `gsap.from()`
- Stats: Counter animation

### Services
- Cards: `stagger` animation
- Icons: `rotation` or `scale` on hover
- Text: `opacity` fade in

### About
- Image: `scale` and `opacity`
- Text: `x` slide in
- Timeline: Sequential animations

### Case Studies
- Cards: `flip` or `rotationY`
- Images: `scale` on hover
- Text: `y` slide up

### Testimonials
- Videos: `scale` animation
- Cards: `stagger` with `y`
- Quotes: `opacity` fade

### Contact
- Form: `x` slide from right
- Info cards: `x` slide from left
- Stats: Counter animation

### Footer
- Logo: `scale` animation
- Links: `stagger` fade in
- Social icons: `rotation` on hover

## 🔧 GSAP + AOS Together

You can use both libraries:
- **AOS**: For scroll-triggered animations (simple)
- **GSAP**: For complex, interactive animations

```tsx
<div 
  data-aos="fade-up"  // AOS for scroll
  onMouseEnter={handleGSAPHover}  // GSAP for interaction
>
  Content
</div>
```

## 🎨 Best Practices

1. **Use gsap.context()** - For proper cleanup
2. **Cleanup with revert()** - Prevent memory leaks
3. **Use refs** - For React components
4. **Combine with AOS** - Use GSAP for interactions, AOS for scroll
5. **Performance** - Use `will-change` CSS for animated properties

## 📱 Performance Tips

1. **Animate transforms** - `x, y, scale, rotation` (GPU accelerated)
2. **Avoid animating** - `width, height, top, left` (CPU intensive)
3. **Use autoAlpha** - Instead of opacity + visibility
4. **Batch animations** - Use timeline for multiple elements
5. **Kill animations** - Clean up on unmount

## 🚀 Advanced Plugins

### ScrollTrigger
```bash
npm install gsap
```

```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### ScrollSmoother
Smooth scrolling experience

### SplitText
Animate text character by character

### MorphSVG
Morph between SVG shapes

### DrawSVG
Animate SVG stroke drawing

## 💻 Quick Start Template

```typescript
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const AnimatedComponent = () => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Your animations here
      gsap.from(elementRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={containerRef}>
      <div ref={elementRef}>
        Animated Content
      </div>
    </div>
  );
};
```

## 🎉 Your Website Now Has:

1. **AOS** - Scroll-triggered animations
2. **GSAP** - Advanced, interactive animations
3. **Counter animations** - Smooth number counting
4. **Hero animations** - Professional entrance effects

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)
- [GSAP Ease Visualizer](https://greensock.com/ease-visualizer/)
- [GSAP Forum](https://greensock.com/forums/)

Happy animating! 🎨✨
