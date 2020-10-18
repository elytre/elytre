import selectBrowserLanguage from './select-browser-language';

describe('selectBrowserLanguage', () => {
  it('returns "fr" if available', () => {
    expect(
      selectBrowserLanguage(['zh-CN', 'fr-FR', 'fr', 'en-US', 'en', 'it']),
    ).toBe('fr');
  });

  it('returns "en" if available', () => {
    expect(selectBrowserLanguage(['zh-CN', 'en-US', 'fr-FR'])).toBe('en');
  });

  it('returns "en" by default', () => {
    expect(selectBrowserLanguage(['zh-CN'])).toBe('en');
  });
});
