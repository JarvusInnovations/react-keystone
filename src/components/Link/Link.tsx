import React from 'react';

export interface KeystoneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link variant
   * @default 'inline'
   */
  variant?: 'inline' | 'standalone';

  /**
   * Link size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Link content
   */
  children: React.ReactNode;
}

/**
 * KeystoneLink component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneLink href="#" variant="inline">Click here</KeystoneLink>
 * <KeystoneLink href="#" variant="standalone">Learn More</KeystoneLink>
 * ```
 */
export const KeystoneLink = React.forwardRef<HTMLAnchorElement, KeystoneLinkProps>(
  ({ variant = 'inline', size = 'md', children, className = '', ...props }, ref) => {
    // Build link classes following KDS pattern
    const linkClasses = [
      'kds-link',
      `kds-link-${variant}`,
      `kds-link-${size}`,
      className
    ]
      .filter(Boolean)
      .join(' ');

    // Standalone variant includes icon
    if (variant === 'standalone') {
      return (
        <a ref={ref} className={linkClasses} role="link" {...props}>
          <span>{children}</span>
          <i className="ri-arrow-right-line" />
        </a>
      );
    }

    // Inline variant (default)
    return (
      <a ref={ref} className={linkClasses} role="link" {...props}>
        {children}
      </a>
    );
  }
);

KeystoneLink.displayName = 'KeystoneLink';
