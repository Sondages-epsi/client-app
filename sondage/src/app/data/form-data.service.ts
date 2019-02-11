import { Injectable } from '@angular/core';

import { FormData, Personal, Address } from './form-data.model';
import { Answer } from './answers';

import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FormDataService {
  private formData: FormData = new FormData();
  private isPersonalFormValid = false;
  private isWorkFormValid = false;
  private isAddressFormValid = false;

  constructor(
    private workflowService: WorkflowService,
    private http: HttpClient
  ) {}

  getQuestions() {
    const myHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.get('http://localhost:3002/survey', { headers: myHeader });
  }

  getAnswers() {
    const myHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.get<Array<Answer>>('http://localhost:3002/answer', {
      headers: myHeader
    });
  }

  postAnswers(question: string, answer: string) {
    const body = {
      user: Math.random(),
      question: question,
      answer: answer
    };
    return this.http.post('http://localhost:3002/answer', body);
  }

  getPersonal(): Personal {
    // Return the Personal data
    const personal: Personal = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email
    };
    return personal;
  }

  setPersonal(data: Personal) {
    // Update the Personal data only when the Personal Form had been validated successfully
    this.isPersonalFormValid = true;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email;
    // Validate Personal Step in Workflow
    this.workflowService.validateStep(STEPS.personal);
  }

  getWork(): string {
    // Return the work type
    return this.formData.work;
  }

  setWork(data: string) {
    // Update the work type only when the Work Form had been validated successfully
    this.isWorkFormValid = true;
    this.formData.work = data;
    // Validate Work Step in Workflow
    this.workflowService.validateStep(STEPS.work);
  }

  getAddress(): Address {
    // Return the Address data
    const address: Address = {
      street: this.formData.street,
      city: this.formData.city,
      state: this.formData.state,
      zip: this.formData.zip
    };
    return address;
  }

  setAddress(data: Address) {
    // Update the Address data only when the Address Form had been validated successfully
    this.isAddressFormValid = true;
    this.formData.street = data.street;
    this.formData.city = data.city;
    this.formData.state = data.state;
    this.formData.zip = data.zip;
    // Validate Address Step in Workflow
    this.workflowService.validateStep(STEPS.adress);
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Reset the workflow
    this.workflowService.resetSteps();
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return (
      this.isPersonalFormValid && this.isWorkFormValid
      // &&
      // this.isAddressFormValid
    );
  }
}
