import getMetaTagContent from './get-meta-tag-content';

describe('Footer', () => {
  beforeAll(() => {
    const metaTagWithName = document.createElement('meta');
    metaTagWithName.setAttribute('name', 'robots');
    metaTagWithName.setAttribute('content', 'nofollow');
    document.head.appendChild(metaTagWithName);

    const metaTagWithProperty = document.createElement('meta');
    metaTagWithProperty.setAttribute('property', 'og:title');
    metaTagWithProperty.setAttribute('content', 'Welcome to my site!');
    document.head.appendChild(metaTagWithProperty);
  });

  it("returns a meta tag's content by name", () => {
    // when
    const returnedContent = getMetaTagContent('robots');

    // then
    expect(returnedContent).toBe('nofollow');
  });

  it("returns a meta tag's content by property", () => {
    // when
    const returnedContent = getMetaTagContent('og:title');

    // then
    expect(returnedContent).toBe('Welcome to my site!');
  });

  it('returns null if meta tag does not exist', () => {
    // when
    const returnedContent = getMetaTagContent('description');

    // then
    expect(returnedContent).toBeNull();
  });
});
