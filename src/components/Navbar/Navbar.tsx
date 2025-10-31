import React from 'react';

export interface NavItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Nav item label
   */
  label: React.ReactNode;

  /**
   * Link URL
   */
  href?: string;

  /**
   * Click handler
   */
  onClick?: () => void;
}

export interface KeystoneNavbarProps {
  /**
   * Brand/logo content
   */
  brand?: React.ReactNode;

  /**
   * Navigation items
   */
  items: NavItem[];

  /**
   * Show search input
   * @default false
   */
  showSearch?: boolean;

  /**
   * Search placeholder text
   */
  searchPlaceholder?: string;

  /**
   * Search submit handler
   */
  onSearch?: (query: string) => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneNavbar component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneNavbar
 *   brand={<h3>My Site</h3>}
 *   items={[
 *     { id: '1', label: 'Home', href: '/' },
 *     { id: '2', label: 'About', href: '/about' }
 *   ]}
 *   showSearch
 * />
 * ```
 */
export const KeystoneNavbar = ({
  brand,
  items,
  showSearch = false,
  searchPlaceholder = 'Search',
  onSearch,
  className = ''
}: KeystoneNavbarProps) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const navbarClasses = ['kds-navbar', className].filter(Boolean).join(' ');

  const searchForm = showSearch && (
    <form method="get" onSubmit={handleSearchSubmit}>
      <div className="kds-search-input p-3">
        <label className="visually-hidden">Search</label>
        <input
          type="search"
          className="kds-text-input w-100"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="kds-button kds-button-filled">
          <span className="visually-hidden">Search</span>
          <i aria-hidden="true" className="ri-search-line" />
        </button>
      </div>
    </form>
  );

  return (
    <nav className={navbarClasses}>
      <div className="kds-navbar-header">
        {brand}
        {showSearch && <div className="d-none d-md-block">{searchForm}</div>}
        <button
          className="kds-navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>
      <ul className={`kds-nav${isOpen ? '' : ' d-none d-md-flex'}`}>
        {showSearch && <li className="kds-nav-item d-md-none">{searchForm}</li>}
        {items.map((item) => (
          <li key={item.id} className="kds-nav-item">
            <a
              href={item.href || '#'}
              className="kds-nav-link"
              onClick={item.href ? undefined : item.onClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

KeystoneNavbar.displayName = 'KeystoneNavbar';
