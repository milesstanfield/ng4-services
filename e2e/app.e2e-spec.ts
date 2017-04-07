import { AngularServicesPage } from './app.po';

describe('angular-services App', () => {
  let page: AngularServicesPage;

  beforeEach(() => {
    page = new AngularServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aserv works!');
  });
});
