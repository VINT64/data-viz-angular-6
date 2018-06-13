import { QtsModule } from './qts.module';

describe('QtsModule', () => {
  let qtsModule: QtsModule;

  beforeEach(() => {
    qtsModule = new QtsModule();
  });

  it('should create an instance', () => {
    expect(qtsModule).toBeTruthy();
  });
});
