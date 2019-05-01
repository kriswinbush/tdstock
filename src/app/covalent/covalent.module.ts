import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentCommonModule } from '@covalent/core/common';

@NgModule({
  declarations: [],
  imports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentMessageModule,
    CovalentNotificationsModule,
    CovalentCommonModule

  ],
  exports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentMessageModule,
    CovalentNotificationsModule,
    CovalentCommonModule
  ]
})
export class CovalentModule { }
