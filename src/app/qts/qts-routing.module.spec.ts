import { QtsRoutingModule } from './qts-routing.module';

describe('QtsRoutingModule', () => {
  let qtsRoutingModule: QtsRoutingModule;

  beforeEach(() => {
    qtsRoutingModule = new QtsRoutingModule();
  });

  it('should create an instance', () => {
    expect(qtsRoutingModule).toBeTruthy();
  });
});
