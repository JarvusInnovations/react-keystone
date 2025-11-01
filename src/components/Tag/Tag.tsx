import React from 'react';
import './Tag.css';

export interface KeystoneTagProps {
  /**
   * Tag color variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';

  /**
   * Tag content
   */
  children: React.ReactNode;

  /**
   * Show close button
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback when close button is clicked
   */
  onDismiss?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneTag component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneTag variant="primary">Label</KeystoneTag>
 * <KeystoneTag variant="success" dismissible onDismiss={() => console.log('dismissed')}>
 *   Success
 * </KeystoneTag>
 * ```
 */
export const KeystoneTag = ({
  variant = 'primary',
  children,
  dismissible = false,
  onDismiss,
  className = ''
}: KeystoneTagProps) => {
  // Build tag classes following KDS pattern
  const tagClasses = [
    'kds-tag',
    `kds-tag-${variant}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={tagClasses}>
      <span>{children}</span>
      {dismissible && (
        <button className="kds-icon-button" onClick={onDismiss}>
          <i className="ri-close-line" />
        </button>
      )}
    </div>
  );
};

KeystoneTag.displayName = 'KeystoneTag';
