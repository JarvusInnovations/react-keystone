import React from 'react';

export interface MenuItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Menu item label
   */
  label: React.ReactNode;

  /**
   * Optional icon (RemixIcon class name)
   */
  icon?: string;

  /**
   * Link URL
   */
  href?: string;

  /**
   * Click handler (for non-link items)
   */
  onClick?: () => void;
}

export interface KeystoneMenuListProps {
  /**
   * Array of menu items
   */
  items: MenuItem[];

  /**
   * ARIA label for the menu
   * @default 'Menu'
   */
  ariaLabel?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneMenuList component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneMenuList items={[
 *   { id: '1', label: 'Home', icon: 'ri-home-line', href: '/' },
 *   { id: '2', label: 'About', icon: 'ri-information-line', href: '/about' }
 * ]} />
 * ```
 */
export const KeystoneMenuList = ({
  items,
  ariaLabel = 'Menu',
  className = ''
}: KeystoneMenuListProps) => {
  const menuClasses = ['kds-menu-list', className].filter(Boolean).join(' ');

  return (
    <ul className={menuClasses} role="menu" aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item.id} role="none">
          <a
            href={item.href || '#'}
            className="kds-menu-item"
            role="menuitem"
            tabIndex={0}
            onClick={item.href ? undefined : item.onClick}
          >
            {item.icon && (
              <i className={`kds-icon ${item.icon}`} aria-hidden="true" />
            )}
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

KeystoneMenuList.displayName = 'KeystoneMenuList';
