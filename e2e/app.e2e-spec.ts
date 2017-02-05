import { TiempocompartidomvPage } from './app.po';

describe('tiempocompartidomv App', function() {
  let page: TiempocompartidomvPage;

  beforeEach(() => {
    page = new TiempocompartidomvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
