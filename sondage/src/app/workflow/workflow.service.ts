import { Injectable } from '@angular/core';
import { STEPS } from './workflow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  private workflow = [
    { step: STEPS.personal, valid: false },
    { step: STEPS.work, valid: false },
    { step: STEPS.adress, valid: false },
    { step: STEPS.result, valid: false }
  ];

  validateStep(step: string) {
    // if the state is found, set the valid field to true
    let found = false;
    for (let index = 0; index < this.workflow.length; index++) {
      if (this.workflow[index].step === step) {
        found = this.workflow[index].valid = true;
      }
    }
  }

  resetSteps() {
    // Reset all steps in the workflow to be invalid
    this.workflow.forEach(element => {
      element.valid = false;
    });
  }

  getFirstInvalidStep(step: string) {
    // If all the previous steps are validated return blank
    // otherwise, return the first invalid step
    let found = false;
    let valid = true;
    let redirectToStep = '';
    for (
      let index = 0;
      index < this.workflow.length && !found && valid;
      index++
    ) {
      let item = this.workflow[index];
      if (item.step === step) {
        found = true;
        redirectToStep = '';
      } else {
        valid = item.valid;
        redirectToStep = item.step;
      }
    }
    return redirectToStep;
  }
}
