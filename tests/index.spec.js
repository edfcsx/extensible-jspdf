import { expect } from 'chai';
import ExtensibleJsPDF from '../dist/index';

describe('ExtensibleJsPDF Library', () => {
  it('Should create a instance of ExtensibleJsPDF library', () => {
    const extensiblePdf = new ExtensibleJsPDF();
    expect(extensiblePdf).is.a.instanceof(ExtensibleJsPDF);
  });
});
