import React from 'react';
import * as TablerIcons from '@tabler/icons-react';

interface IconPlaceholderProps extends React.SVGProps<SVGSVGElement> {
  lucide?: string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
}

// Only the tabler library is bundled; the other names are accepted so the
// icon-library picker can round-trip them without leaking onto the <svg>.
const tablerIcons = TablerIcons as unknown as Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined
>;

export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
  lucide: _lucide,
  tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...props
}) => {
  if (tabler) {
    const IconComponent = tablerIcons[tabler];
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
