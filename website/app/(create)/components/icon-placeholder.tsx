import React from 'react';
import * as TablerIcons from '@tabler/icons-react';

interface IconPlaceholderProps extends React.SVGProps<SVGSVGElement> {
  lucide?: string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
}

export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}) => {
  if (tabler) {
    const IconComponent = (TablerIcons as any)[tabler];
    if (IconComponent) {
      return <IconComponent {...props} />;
    }
  }

  // Fallback icon if tabler icon is not found
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
};
