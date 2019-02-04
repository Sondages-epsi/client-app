import { TestBed, async, inject } from '@angular/core/testing';

import { WorkflowGuardGuard } from './workflow-guard.guard';

describe('WorkflowGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowGuardGuard]
    });
  });

  it('should ...', inject([WorkflowGuardGuard], (guard: WorkflowGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
