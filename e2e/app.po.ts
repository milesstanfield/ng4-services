import { browser, element, by } from 'protractor';

export class AngularServicesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aserv-root h1')).getText();
  }
}
