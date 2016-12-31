import { ViceBlogTestPage } from './app.po';

describe('vice-blog-test App', function() {
  let page: ViceBlogTestPage;

  beforeEach(() => {
    page = new ViceBlogTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
