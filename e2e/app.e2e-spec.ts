import { XroadFacePage } from './app.po';

describe('xroad-face App', function() {
  let page: XroadFacePage;

  beforeEach(() => {
    page = new XroadFacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
