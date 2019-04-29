import { Component, OnInit } from '@angular/core';
import { StepState } from "@covalent/core/steps";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root-analyst',
  templateUrl: './root-analyst.component.html',
  styleUrls: ['./root-analyst.component.scss']
})
export class RootAnalystComponent implements OnInit {

  stepForm = this.fb.group({
    symbol: [''],
    title: [''],
    summary: [''],
    storyFiles: ['']
  });

  constructor(public fb: FormBuilder) { }

  onSubmit() {
    console.log(this.stepForm.value);
  }

  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }

  ngOnInit() {
  }

  submitStockStory(form) {
    console.log("submitted")
    console.log(form);
  }

}
