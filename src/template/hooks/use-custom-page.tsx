import React from 'react';

/**
 * Loads a MDX custom page from its slug
 */
export default function useCustomPage(
  slug: string,
): (() => React.ReactElement) | null {
  function importAll(requireContext: __WebpackModuleApi.RequireContext) {
    const moduleIds = requireContext.keys();
    return moduleIds.map((key) => {
      return { key, module: requireContext(key) };
    });
  }

  // Import all *.page.mdx files
  const pages = importAll(require.context('../', false, /.*\.page\.mdx$/));

  // Get correct page from slug
  const page = pages.find(({ key }) => key === `./${slug}.page.mdx`);
  if (page) {
    return page.module.default;
  }

  return null;
}
