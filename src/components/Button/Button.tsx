import React from 'react';

export interface KeystoneButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'text';

  /**
   * Render as anchor tag instead of button
   * @default false
   */
  link?: boolean;

  /**
   * Show default right arrow icon (RemixIcon)
   * @default false
   */
  icon?: boolean;

  /**
   * Custom icon element (overrides default icon)
   */
  customIcon?: React.ReactNode;

  /**
   * Position of icon relative to text
   * @default 'right'
   */
  iconPosition?: 'left' | 'right';

  /**
   * URL for link variant (when link=true)
   */
  href?: string;

  /**
   * Content of the button
   */
  children: React.ReactNode;
}

/**
 * KeystoneButton component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneButton variant="filled">Submit</KeystoneButton>
 * <KeystoneButton variant="outlined" icon>Next</KeystoneButton>
 * <KeystoneButton link href="/home">Go Home</KeystoneButton>
 * ```
 */
export const KeystoneButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  KeystoneButtonProps
>(({
  variant = 'filled',
  link = false,
  icon = false,
  customIcon,
  iconPosition = 'right',
  href,
  className = '',
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  // Build class names following KDS pattern
  const classes = [
    'kds-button',
    `kds-button-${variant}`,
    className
  ].filter(Boolean).join(' ');

  // Determine which icon to show
  const iconElement = customIcon || (icon && <i className="ri-arrow-right-line" />);

  // Render content with icon positioning
  const content = iconElement ? (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  ) : children;

  // Render as anchor tag for link variant
  if (link) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      disabled={disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

KeystoneButton.displayName = 'KeystoneButton';
