import { AngularSimpleFormPage } from './app.po';

describe('angular-simple-form App', () => {
  let page: AngularSimpleFormPage;

  beforeEach(() => {
    page = new AngularSimpleFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
