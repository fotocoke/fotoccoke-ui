import { MaterialDesignModule } from './fc-mat.module';

describe('MaterialDesignModule', () => {
  let materialDesignModule: MaterialDesignModule;

  beforeEach(() => {
    materialDesignModule = new MaterialDesignModule();
  });

  it('should create an instance', () => {
    expect(materialDesignModule).toBeTruthy();
  });
});
