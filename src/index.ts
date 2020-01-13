import jsPDF from 'jspdf';

export default class ExtensibleJsPDF extends jsPDF {
  private y = 0;

  constructor(options: jsPDF, private styles: object) {
    super(options);
    this.setPageLimits();
  }

  private setPageLimits = () => {
    console.log('here', this.internal.getCurrentPageInfo());
  }
  
}