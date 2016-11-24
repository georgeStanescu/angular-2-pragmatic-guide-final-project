import { NgPragmaticGuideFinalProjectPage } from './app.po';

describe('ng-pragmatic-guide-final-project App', function() {
  let page: NgPragmaticGuideFinalProjectPage;

  beforeEach(() => {
    page = new NgPragmaticGuideFinalProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
