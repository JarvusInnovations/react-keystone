export interface BreadcrumbItem {
  /**
   * Text to display
   */
  label: string;

  /**
   * Link URL (omit for current page)
   */
  href?: string;

  /**
   * Whether this is the current page
   */
  current?: boolean;
}

export interface KeystoneBreadcrumbProps {
  /**
   * Breadcrumb items
   */
  items: BreadcrumbItem[];

  /**
   * Mobile variant (back button style)
   * @default false
   */
  mobile?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneBreadcrumb component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneBreadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Products', href: '/products' },
 *   { label: 'Current Page', current: true }
 * ]} />
 * ```
 */
export const KeystoneBreadcrumb = ({
  items,
  mobile = false,
  className = ''
}: KeystoneBreadcrumbProps) => {
  // Build breadcrumb classes
  const breadcrumbClasses = ['kds-breadcrumb', className].filter(Boolean).join(' ');

  // Mobile variant shows only back button with current page
  if (mobile && items.length > 0) {
    const currentItem = items[items.length - 1];
    return (
      <nav className={breadcrumbClasses} aria-label="Breadcrumb">
        <ol>
          <li className="kds-breadcrumb-item">
            <i className="ri-arrow-left-line" />
            <a href={currentItem.href || '#'} aria-current="page">
              {currentItem.label}
            </a>
          </li>
        </ol>
      </nav>
    );
  }

  // Desktop variant shows full breadcrumb trail
  return (
    <nav className={breadcrumbClasses} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isCurrent = item.current || index === items.length - 1;
          const itemClasses = [
            'kds-breadcrumb-item',
            isCurrent && 'kds-breadcrumb-current'
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <li key={index} className={itemClasses}>
              {isCurrent ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

KeystoneBreadcrumb.displayName = 'KeystoneBreadcrumb';
