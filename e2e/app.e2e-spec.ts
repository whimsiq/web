import { WhimPage } from './app.po';

describe('whim App', function() {
  let page: WhimPage;

  beforeEach(() => {
    page = new WhimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
