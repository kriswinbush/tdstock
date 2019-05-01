import { Component, OnInit } from '@angular/core';
import { StepState } from "@covalent/core/steps";
import { FormBuilder } from "@angular/forms";
import { StoryStoreService } from "../../services/story-store.service";
@Component({
  selector: 'app-root-analyst',
  templateUrl: './root-analyst.component.html',
  styleUrls: ['./root-analyst.component.scss']
})
export class RootAnalystComponent {

  stepForm = this.fb.group({
    symbol: [''],
    title: [''],
    summary: [''],
    storyFiles: ['']
  });

  constructor(public fb: FormBuilder, public storyStore: StoryStoreService) { }

  onSubmit() {
    console.log(this.stepForm.value);
    let form = this.stepForm.value;
    form.storyFiles = "https://placekitten.com/g/200/200";
    this.stepForm.reset();
    this.storyStore.addStory(form);
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

}
