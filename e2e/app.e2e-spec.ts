import { WebNewPage } from './app.po';

describe('web-new App', () => {
  let page: WebNewPage;

  beforeEach(() => {
    page = new WebNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
