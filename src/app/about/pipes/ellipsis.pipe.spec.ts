import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  const pipe = new EllipsisPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`transforms 'random' to 'random...'`, () => {
    expect(pipe.transform('random')).toBe('random...');
  })
});
