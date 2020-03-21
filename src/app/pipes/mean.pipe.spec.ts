import { MeanPipe } from './mean.pipe';

describe('MeanPipe', () => {
  let meanPipe: MeanPipe;

  beforeEach(() => {
    meanPipe = new MeanPipe();
  });

  it('should create an instance MeanPipe', () => {
    expect(meanPipe).toBeTruthy();
  });

  it('should return number for single number', () => {
    expect(meanPipe.transform(3)).toEqual(3);
  });

  it('should return undefined when array is empty', () => {
    expect(meanPipe.transform([])).toEqual(undefined);
  });

  it('should return null', () => {
    expect(meanPipe.transform(null)).toEqual(null);
  });

  it('should return mean value for an array of numbers', () => {
    expect(meanPipe.transform([2, 8, 23])).toEqual(11);
  });
});
