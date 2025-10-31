import React from 'react';

export interface KeystoneAlertProps {
  /**
   * Alert variant
   * @default 'info'
   */
  variant?: 'info' | 'warning' | 'error';

  /**
   * Alert type - global (full-width) or local (contained)
   * @default 'local'
   */
  type?: 'global' | 'local';

  /**
   * Alert title
   */
  title?: React.ReactNode;

  /**
   * Alert message content
   */
  children: React.ReactNode;

  /**
   * Show close button (only for local alerts)
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
  type = 'local',
  title,
  children,
  closeable = false,
  onClose,
  className = ''
}: KeystoneAlertProps) => {
  // Build alert classes following KDS pattern
  const alertClasses = [
    'kds-alert',
    type === 'global' ? 'kds-alert-global' : 'kds-alert-local',
    type === 'global' ? `kds-alert-global-${variant}` : `kds-alert-local-${variant}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const getIcon = () => {
    if (type === 'local') {
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

  const titleClassName = type === 'global' ? 'kds-alert-global-title' : 'kds-alert-local-title';
  const messageClassName = type === 'global' ? 'kds-alert-global-message' : 'kds-alert-local-message';

  return (
    <div className={alertClasses} role="alert">
      {type === 'local' && getIcon()}
      <div className="kds-alert-content">
        {title && <p className={titleClassName}>{title}</p>}
        <p className={messageClassName}>{children}</p>
      </div>
      {type === 'local' && closeable && (
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
