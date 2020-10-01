import { CelsiusToFarenheitPipe } from './celsius-to-farenheit.pipe';

describe('CelsiusToFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new CelsiusToFarenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
