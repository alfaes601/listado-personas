import { ListadoPersonasPage } from './app.po';

describe('listado-personas App', function() {
  let page: ListadoPersonasPage;

  beforeEach(() => {
    page = new ListadoPersonasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
