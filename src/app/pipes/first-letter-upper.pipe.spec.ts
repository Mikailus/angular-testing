import { FirstLetterUpperPipe } from './first-letter-upper.pipe';

describe('FirstLetterUpperPipe', () => {
  let pipe: FirstLetterUpperPipe;

  beforeEach(() => {
    pipe = new FirstLetterUpperPipe();
  });

  it('should be defined', () => {
    expect(pipe).toBeTruthy();
  });

  it('should value be defined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe(null);
  });

  it('should value return null', () => {
    const result = pipe.transform(null);
    expect(result).toBe(null);
  });

  it('should change first letter to Upper', () => {
    const info: string = 'information to test';
    const result: string = pipe.transform(info);
    expect(result).toEqual('Information to test');
  });
});
