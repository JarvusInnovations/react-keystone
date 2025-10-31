export interface FooterLink {
  /**
   * Link text
   */
  label: string;

  /**
   * Link URL
   */
  href: string;
}

export interface FooterSection {
  /**
   * Section title
   */
  title: string;

  /**
   * Array of links in this section
   */
  links: FooterLink[];
}

export interface KeystoneFooterProps {
  /**
   * Logo image URL
   */
  logoUrl?: string;

  /**
   * Logo alt text
   */
  logoAlt?: string;

  /**
   * Footer link sections
   */
  sections?: FooterSection[];

  /**
   * Copyright text
   * @default 'Copyright © {year} Commonwealth of Pennsylvania. All rights reserved.'
   */
  copyrightText?: React.ReactNode;

  /**
   * Copyright banner links (e.g., Accessibility, Privacy, etc.)
   */
  copyrightLinks?: FooterLink[];

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneFooter component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneFooter
 *   logoUrl="/logo.svg"
 *   sections={[
 *     {
 *       title: 'Resources',
 *       links: [
 *         { label: 'About', href: '/about' },
 *         { label: 'Contact', href: '/contact' }
 *       ]
 *     }
 *   ]}
 *   copyrightLinks={[
 *     { label: 'Accessibility', href: '/accessibility' },
 *     { label: 'Privacy', href: '/privacy' }
 *   ]}
 * />
 * ```
 */
export const KeystoneFooter = ({
  logoUrl,
  logoAlt = 'Logo',
  sections = [],
  copyrightText,
  copyrightLinks = [],
  className = ''
}: KeystoneFooterProps) => {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `Copyright © ${currentYear} Commonwealth of Pennsylvania. All rights reserved.`;

  const footerClasses = ['kds-footer', className].filter(Boolean).join(' ');

  return (
    <footer className={footerClasses}>
      <div className="d-flex flex-wrap justify-content-between gap-5 px-2">
        {logoUrl && (
          <div>
            <img className="kds-footer-logo" src={logoUrl} alt={logoAlt} />
          </div>
        )}

        {sections.length > 0 && (
          <div className="d-flex flex-wrap gap-5">
            {sections.map((section, index) => (
              <ul key={index} className="list-unstyled">
                <li className="pb-2 kds-title kds-title-sm kds-text-bold kds-text-uppercase kds-text-spacing-sm">
                  {section.title}
                </li>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2">
                    <a href={link.href} className="kds-label kds-label-lg">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}
      </div>

      <div className="kds-footer-copyright-banner px-2">
        <p className="kds-footer-copyright-banner-text">
          {copyrightText || defaultCopyright}
        </p>
        {copyrightLinks.length > 0 && (
          <ul className="kds-footer-copyright-banner-links">
            {copyrightLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};

KeystoneFooter.displayName = 'KeystoneFooter';
