import { TransformRouteKindKeyPipe } from './transform-route-kind-key.pipe';

xdescribe('TransformRouteKindKeyPipe', () => {

  let pipe: TransformRouteKindKeyPipe;

  beforeEach(() => {
    pipe = new TransformRouteKindKeyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform('into')).toBeDefined();
  });

  it('should return "Najkrótsza" for value equal "shortest"', () => {
    const result = pipe.transform('shortest');
    expect(result).toEqual('Najkrótsza');
  });

  it('should return "Najszybsza" for value equal "fastest"', () => {
    const result = pipe.transform('fastest');
    expect(result).toEqual('Najszybsza');
  });

  it('should return "Eko" for value equal "eko"', () => {
    const result = pipe.transform('eko');
    expect(result).toEqual('Eko');
  });

  it('should return "Najtańsza" for value equal "cheapest"', () => {
    const result = pipe.transform('cheapest');
    expect(result).toEqual('Najtańsza');
  });

  it('should return "Użytkownika" for value equal "user"', () => {
    const result = pipe.transform('user');
    expect(result).toEqual('Użytkownika');
  });

  it('should return undefined for another value', () => {
    const result = pipe.transform('undefined route');
    expect(result).toEqual(undefined);
  });

  it('should return undefined for null value', () => {
    const result = pipe.transform(null);
    expect(result).toEqual(undefined);
  });
});
