'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function RouterAnimationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('🔄 Route changed to:', pathname);
    
    const fixPageTransitionAnimations = () => {
      // Wait for Next.js page transition to complete
      setTimeout(() => {
        // Method 1: Trigger scroll events to activate intersection observers
        window.dispatchEvent(new Event('scroll'));
        
        // Method 2: Force a tiny scroll (more reliable)
        const currentScroll = window.scrollY;
        window.scrollTo(0, currentScroll + 1);
        setTimeout(() => window.scrollTo(0, currentScroll), 10);
        
        // Method 3: Force reflow on potential animated sections
        const sections = document.querySelectorAll('section, main, [data-animate]');
        sections.forEach(section => {
          void (section as HTMLElement).offsetHeight; // Trigger reflow
        });
        
        console.log('🎯 Animations triggered for route:', pathname);
      }, 300); // Match this with your page transition timing
    };

    fixPageTransitionAnimations();

    // Also fix animations when page fully loads (for direct visits)
    const handleLoad = () => {
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
      }, 500);
    };

    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]);

  return null;
}