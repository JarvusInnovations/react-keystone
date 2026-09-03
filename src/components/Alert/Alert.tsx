import React from 'react';

export interface KeystoneAlertProps {
  /**
   * Alert variant
   * @default 'info'
   */
  variant?: 'info' | 'warning' | 'error';

  /**
   * Alert type - global (full-width) or in-page (contained).
   * `local` is the KDS 2.0.1 name for `in-page` and is still accepted.
   * @default 'in-page'
   */
  type?: 'global' | 'in-page' | 'local';

  /**
   * Alert title
   */
  title?: React.ReactNode;

  /**
   * Alert message content
   */
  children: React.ReactNode;

  /**
   * Show close button (only for in-page alerts)
   * @default false
   */
  closeable?: boolean;

  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Class prefixes for the contained alert. KDS 2.0.2 renamed `kds-alert-local*`
 * to `kds-alert-in-page*`; both are emitted so a page styled by either KDS
 * 2.0.1 or 2.0.2 renders correctly. The 2.0.1 names will be dropped in the
 * next major.
 */
const IN_PAGE_PREFIXES = ['kds-alert-in-page', 'kds-alert-local'];
const GLOBAL_PREFIXES = ['kds-alert-global'];

/**
 * KeystoneAlert component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneAlert variant="info" title="Notice">
 *   This is an informational message.
 * </KeystoneAlert>
 * <KeystoneAlert type="global" variant="warning" title="Warning">
 *   Important system notification.
 * </KeystoneAlert>
 * ```
 */
export const KeystoneAlert = ({
  variant = 'info',
  type = 'in-page',
  title,
  children,
  closeable = false,
  onClose,
  className = ''
}: KeystoneAlertProps) => {
  const isGlobal = type === 'global';
  const prefixes = isGlobal ? GLOBAL_PREFIXES : IN_PAGE_PREFIXES;

  // Build alert classes following KDS pattern
  const alertClasses = [
    'kds-alert',
    ...prefixes,
    ...prefixes.map(prefix => `${prefix}-${variant}`),
    className
  ]
    .filter(Boolean)
    .join(' ');

  const getIcon = () => {
    if (!isGlobal) {
      if (variant === 'info') {
        return <i className="ri-information-2-line" aria-hidden="true" />;
      }
      if (variant === 'warning') {
        return <i className="ri-alert-line" aria-hidden="true" />;
      }
      if (variant === 'error') {
        return <i className="ri-error-warning-line" aria-hidden="true" />;
      }
    }
    return null;
  };

  const titleClassName = prefixes.map(prefix => `${prefix}-title`).join(' ');
  const messageClassName = prefixes.map(prefix => `${prefix}-message`).join(' ');

  return (
    <div className={alertClasses} role="alert">
      {!isGlobal && getIcon()}
      <div className="kds-alert-content">
        {title && <p className={titleClassName}>{title}</p>}
        <div className={messageClassName}>{children}</div>
      </div>
      {!isGlobal && closeable && (
        <button
          className="kds-alert-dismiss-button"
          aria-label="Close"
          title="Close"
          onClick={onClose}
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

KeystoneAlert.displayName = 'KeystoneAlert';
