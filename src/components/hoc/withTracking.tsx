// src/components/hoc/withTracking.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/lib/gtm';

export function withTracking<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithTrackingWrapper(props: T) {
    const pathname = usePathname();

    useEffect(() => {
      trackPageView(pathname);
    }, [pathname]);

    return <WrappedComponent {...props} />;
  };
}