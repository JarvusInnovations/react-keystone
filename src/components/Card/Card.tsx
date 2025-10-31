import React from 'react';

export interface KeystoneCardProps {
  /**
   * Card title
   */
  title?: React.ReactNode;

  /**
   * Card body content
   */
  children: React.ReactNode;

  /**
   * Optional image URL for top of card
   */
  imageUrl?: string;

  /**
   * Alt text for image
   */
  imageAlt?: string;

  /**
   * Optional icon for icon variant (RemixIcon class name)
   */
  icon?: string;

  /**
   * Size of icon
   * @default 'lg'
   */
  iconSize?: 'sm' | 'md' | 'lg';

  /**
   * Optional tag content for header
   */
  tag?: React.ReactNode;

  /**
   * Tag color variant
   */
  tagVariant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';

  /**
   * Optional date text for header
   */
  date?: string;

  /**
   * Link text
   */
  linkText?: string;

  /**
   * Link URL
   */
  linkHref?: string;

  /**
   * Show icon in link
   * @default true
   */
  linkIcon?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneCard component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneCard title="Card Title">
 *   Card content here
 * </KeystoneCard>
 * <KeystoneCard
 *   title="Featured"
 *   tag="New"
 *   tagVariant="primary"
 *   linkText="Learn More"
 *   linkHref="#"
 * >
 *   Description text
 * </KeystoneCard>
 * ```
 */
export const KeystoneCard = ({
  title,
  children,
  imageUrl,
  imageAlt = '',
  icon,
  iconSize = 'lg',
  tag,
  tagVariant = 'primary',
  date,
  linkText,
  linkHref,
  linkIcon = true,
  className = ''
}: KeystoneCardProps) => {
  // Build card classes
  const cardClasses = ['kds-card', className].filter(Boolean).join(' ');

  const hasHeader = tag || date;

  return (
    <div className={cardClasses}>
      {imageUrl && (
        <img className="kds-card-img-top" src={imageUrl} alt={imageAlt} />
      )}

      <div className="kds-card-body">
        {icon && (
          <div className={`kds-icon-object kds-icon-object-${iconSize}`} aria-label={`${icon} icon`}>
            <i className={icon} />
          </div>
        )}

        {hasHeader && (
          <div className="kds-card-header">
            {tag && (
              <span className={`kds-tag kds-tag-${tagVariant}`}>{tag}</span>
            )}
            {date && (
              <span className="kds-label kds-label-md kds-text-normal">{date}</span>
            )}
          </div>
        )}

        {title && <h3 className="kds-card-title">{title}</h3>}

        <p className="kds-card-text">{children}</p>

        {linkText && linkHref && (
          <a href={linkHref} className="kds-card-labeled-link" role="link" aria-label={linkText}>
            <span>{linkText}</span>
            {linkIcon && <i className="ri-arrow-right-line" />}
          </a>
        )}
      </div>
    </div>
  );
};

KeystoneCard.displayName = 'KeystoneCard';
