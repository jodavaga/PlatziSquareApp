import { PlatzisquareappPage } from './app.po';

describe('platzisquareapp App', () => {
  let page: PlatzisquareappPage;

  beforeEach(() => {
    page = new PlatzisquareappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
