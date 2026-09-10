import { useEffect } from 'react';

/**
 * @typedef {Object} SEOProps
 * @property {string} title - Page Title (max 60 chars recommended)
 * @property {string} description - Meta Description (max 155-160 chars recommended)
 * @property {string} [canonical] - Canonical URL
 * @property {string} [ogType='website'] - Open Graph Type
 * @property {string} [ogImage] - Open Graph Image URL
 * @property {Object|Array} [jsonLd] - Schema.org JSON-LD structured data object(s)
 * @property {boolean} [noIndex=false] - If true, sets robots to noindex, nofollow
 */

/**
 * Dynamic SEO Component to update document head attributes for client-side rendering & crawlers.
 * @param {SEOProps} props
 */
export default function SEO({
  title,
  description,
  canonical = 'https://2hmfinance.com/',
  ogType = 'website',
  ogImage = 'https://2hmfinance.com/images/og-share-2hmfinance.jpg',
  jsonLd,
  noIndex = false
}) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tags
    const setMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update link tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    if (description) {
      setMetaTag('meta[name="description"]', 'name', 'description', description);
    }
    setMetaTag(
      'meta[name="robots"]',
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    // 3. Canonical Link
    if (canonical) {
      setLinkTag('canonical', canonical);
    }

    // 4. Open Graph Tags
    if (title) {
      setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    }
    if (description) {
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    }
    if (canonical) {
      setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical);
    }
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    if (ogImage) {
      setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    }

    // 5. Twitter Card Tags
    if (title) {
      setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }
    if (description) {
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }
    if (ogImage) {
      setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    }

    // 6. JSON-LD Dynamic Injection
    const scriptId = 'seo-json-ld';
    let scriptTag = document.getElementById(scriptId);
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic script tag on component unmount if needed
    };
  }, [title, description, canonical, ogType, ogImage, jsonLd, noIndex]);

  return null;
}
