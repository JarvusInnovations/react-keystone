import React from 'react';

export type TypographyVariant =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'headline-lg'
  | 'headline-md'
  | 'headline-sm'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'body-lg'
  | 'body-md'
  | 'label-lg'
  | 'label-md'
  | 'label-sm';

export type TypographyWeight = 'bold' | 'semibold' | 'medium' | 'normal';

export interface KeystoneTypographyProps {
  /**
   * Typography variant
   * @default 'body-md'
   */
  variant?: TypographyVariant;

  /**
   * Font weight
   */
  weight?: TypographyWeight;

  /**
   * Text transform to uppercase
   * @default false
   */
  uppercase?: boolean;

  /**
   * Add letter spacing (for titles)
   * @default false
   */
  spacing?: boolean;

  /**
   * Underline text
   * @default false
   */
  underline?: boolean;

  /**
   * HTML element to render as
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

  /**
   * Content
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneTypography component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneTypography variant="display-lg">Large Display Text</KeystoneTypography>
 * <KeystoneTypography variant="headline-md" weight="bold">Headline</KeystoneTypography>
 * <KeystoneTypography variant="title-sm" uppercase spacing>Title</KeystoneTypography>
 * ```
 */
export const KeystoneTypography = ({
  variant = 'body-md',
  weight,
  uppercase = false,
  spacing = false,
  underline = false,
  as,
  children,
  className = ''
}: KeystoneTypographyProps) => {
  // Parse variant to get base class and size
  const [base, size] = variant.split('-') as [string, string];

  // Determine default element based on variant
  const defaultElement = base === 'display' || base === 'headline' ? 'h2' : 'p';
  const Element = as || defaultElement;

  // Build typography classes
  const typographyClasses = [
    `kds-${base}`,
    `kds-${base}-${size}`,
    weight && `kds-text-${weight}`,
    uppercase && 'kds-text-uppercase',
    spacing && `kds-text-spacing-${size}`,
    underline && 'kds-text-underline',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return <Element className={typographyClasses}>{children}</Element>;
};

KeystoneTypography.displayName = 'KeystoneTypography';
