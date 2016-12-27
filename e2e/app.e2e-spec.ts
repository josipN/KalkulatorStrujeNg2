import { Ng2CalcPage } from './app.po';

describe('ng2-calc App', function() {
  let page: Ng2CalcPage;

  beforeEach(() => {
    page = new Ng2CalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
