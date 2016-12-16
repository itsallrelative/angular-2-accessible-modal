import { AccessibleModalPage } from './app.po';

describe('accessible-modal App', function() {
  let page: AccessibleModalPage;

  beforeEach(() => {
    page = new AccessibleModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
