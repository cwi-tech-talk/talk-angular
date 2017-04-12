import { TalkAngularPage } from './app.po';

describe('talk-angular App', () => {
  let page: TalkAngularPage;

  beforeEach(() => {
    page = new TalkAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
