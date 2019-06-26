import { TestBed } from '@angular/core/testing';

import { StoryStoreService } from './story-store.service';

describe('StoryStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryStoreService = TestBed.get(StoryStoreService);
    expect(service).toBeTruthy();
  });
});
