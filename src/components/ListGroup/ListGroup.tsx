import React from 'react';

export interface ListGroupItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Item label/title
   */
  label: React.ReactNode;

  /**
   * Optional pretitle text
   */
  pretitle?: string;

  /**
   * Optional help/description text
   */
  helpText?: string;

  /**
   * Optional start icon (RemixIcon class name)
   */
  startIcon?: string;

  /**
   * Link URL
   */
  href?: string;

  /**
   * Click handler (for non-link items)
   */
  onClick?: () => void;
}

export interface KeystoneListGroupProps {
  /**
   * Array of list items
   */
  items: ListGroupItem[];

  /**
   * Icon to display at end of each item
   * @default 'ri-arrow-right-line'
   */
  endIcon?: string;

  /**
   * Use two-column layout
   * @default false
   */
  twoColumn?: boolean;

  /**
   * Additional CSS classes for container
   */
  className?: string;
}

/**
 * KeystoneListGroup component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneListGroup items={[
 *   {
 *     id: '1',
 *     label: 'Item 1',
 *     pretitle: 'Category',
 *     helpText: 'Description text',
 *     startIcon: 'ri-file-line',
 *     href: '/item-1'
 *   }
 * ]} />
 * ```
 */
export const KeystoneListGroup = ({
  items,
  endIcon = 'ri-arrow-right-line',
  twoColumn = false,
  className = ''
}: KeystoneListGroupProps) => {
  const containerClasses = [
    'kds-list-group-container',
    twoColumn && 'kds-list-group-two-column',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      <ul className="kds-list-group">
        {items.map((item) => {
          const content = (
            <>
              {item.startIcon && (
                <i data-list-item-type="start-adornment" className={item.startIcon} />
              )}
              <div className="kds-list-group-item-content">
                {item.pretitle && (
                  <span className="kds-list-group-item-pretitle">{item.pretitle}</span>
                )}
                <span>{item.label}</span>
                {item.helpText && (
                  <p className="kds-list-group-item-help-text">{item.helpText}</p>
                )}
              </div>
              {endIcon && (
                <i data-list-item-type="end-adornment" className={endIcon} />
              )}
            </>
          );

          return (
            <li key={item.id} className="kds-list-group-item">
              {item.href ? (
                <a href={item.href}>{content}</a>
              ) : (
                <button type="button" onClick={item.onClick}>
                  {content}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

KeystoneListGroup.displayName = 'KeystoneListGroup';
