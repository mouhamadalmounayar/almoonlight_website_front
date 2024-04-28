import { MarkedToHtmlPipe } from './marked-to-html.pipe';

describe('MarkedToHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new MarkedToHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
