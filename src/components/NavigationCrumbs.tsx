'use client';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function NavigationCrumbs() {
  const pathname = usePathname();

  const links = pathname.split('/');
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((el) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${el}`}>{el}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
