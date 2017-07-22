import { RajatResumePage } from './app.po';

describe('rajat-resume App', () => {
  let page: RajatResumePage;

  beforeEach(() => {
    page = new RajatResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
