import React from 'react';
import './Tag.css';
import { tagClasses, type KeystoneTagVariant } from './tagClasses';

export interface KeystoneTagProps {
  /**
   * Tag color variant. Accepts the KDS 2.0.2 color names (`blue`, `gray`,
   * `green`, `red`, `yellow`) and their KDS 2.0.1 semantic equivalents
   * (`primary`, `secondary`, `success`, `error`, `warning`).
   * @default 'primary'
   */
  variant?: KeystoneTagVariant;

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
 * <KeystoneTag variant="blue">Label</KeystoneTag>
 * <KeystoneTag variant="green" dismissible onDismiss={() => console.log('dismissed')}>
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
  const classes = [tagClasses(variant), className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
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
