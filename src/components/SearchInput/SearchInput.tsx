import React from 'react';

export interface KeystoneSearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text (visually hidden but accessible)
   * @default 'Search'
   */
  label?: string;

  /**
   * Button label (visually hidden but accessible)
   * @default 'Search'
   */
  buttonLabel?: string;

  /**
   * Handler for search button click
   */
  onSearch?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneSearchInput component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneSearchInput placeholder="Search..." onSearch={() => console.log('search')} />
 * ```
 */
export const KeystoneSearchInput = React.forwardRef<HTMLInputElement, KeystoneSearchInputProps>(
  ({ label = 'Search', buttonLabel = 'Search', onSearch, className = '', ...props }, ref) => {
    // Build search input classes
    const searchInputClasses = ['kds-search-input', className].filter(Boolean).join(' ');

    return (
      <div className={searchInputClasses}>
        <label className="visually-hidden">{label}</label>
        <input
          ref={ref}
          type="search"
          className="kds-text-input"
          placeholder={props.placeholder || 'Search'}
          {...props}
        />
        <button
          type="button"
          className="kds-button kds-button-filled"
          onClick={onSearch}
        >
          <span className="visually-hidden">{buttonLabel}</span>
          <i aria-hidden="true" className="ri-search-line" />
        </button>
      </div>
    );
  }
);

KeystoneSearchInput.displayName = 'KeystoneSearchInput';
