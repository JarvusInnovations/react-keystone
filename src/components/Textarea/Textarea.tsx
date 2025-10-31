import React from 'react';

export interface KeystoneTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label text for the textarea
   */
  label?: React.ReactNode;

  /**
   * Helper or error text below the textarea
   */
  helpText?: React.ReactNode;

  /**
   * Visual state variant
   * @default 'default'
   */
  variant?: 'default' | 'warning' | 'error';

  /**
   * Optional character counter text (e.g., "0/500")
   */
  counterText?: React.ReactNode;
}

/**
 * KeystoneTextarea component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneTextarea label="Comments" placeholder="Enter your comments" />
 * <KeystoneTextarea label="Description" helpText="Required field" variant="error" />
 * ```
 */
export const KeystoneTextarea = React.forwardRef<HTMLTextAreaElement, KeystoneTextareaProps>(
  ({ label, helpText, counterText, variant = 'default', disabled = false, className = '', id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const labelId = `${textareaId}-label`;
    const helpTextId = `${textareaId}-help-text`;

    const hasIcon = variant === 'warning' || variant === 'error';

    // Build textarea classes following KDS pattern
    const textareaClasses = [
      'kds-textarea',
      variant === 'warning' && 'kds-textarea-warning',
      variant === 'error' && 'kds-textarea-error',
      className
    ]
      .filter(Boolean)
      .join(' ');

    // Build help text classes
    const helpTextClasses = [
      'kds-label-text-alt',
      variant === 'warning' && 'kds-text-warning',
      variant === 'error' && 'kds-text-error'
    ]
      .filter(Boolean)
      .join(' ');

    const getIcon = () => {
      if (variant === 'warning') {
        return <i className="kds-icon kds-text-warning ri-alert-fill" aria-label="Warning icon" />;
      }
      if (variant === 'error') {
        return <i className="kds-icon kds-text-error ri-error-warning-fill" aria-label="Error icon" />;
      }
      return null;
    };

    const textarea = (
      <textarea
        ref={ref}
        id={textareaId}
        className={textareaClasses}
        disabled={disabled}
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={helpText ? helpTextId : undefined}
        aria-invalid={variant === 'error' ? true : undefined}
        {...props}
      />
    );

    return (
      <label className="kds-form-control">
        {(label || counterText) && (
          <div className="kds-label">
            {label && (
              <span id={labelId} className="kds-label-text">
                {label}
              </span>
            )}
            {counterText && (
              <span className="kds-label-text-alt">
                {counterText}
              </span>
            )}
          </div>
        )}

        {hasIcon ? (
          <div className="kds-input-icon">
            {textarea}
            {getIcon()}
          </div>
        ) : (
          textarea
        )}

        {helpText && (
          <div className="kds-label">
            <span id={helpTextId} className={helpTextClasses}>
              {helpText}
            </span>
          </div>
        )}
      </label>
    );
  }
);

KeystoneTextarea.displayName = 'KeystoneTextarea';
