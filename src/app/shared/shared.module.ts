import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { DashboardHeaderComponent } from "../components/dashboard/dashboard-header/dashboard-header.component";
import { DashboardSidemenuComponent } from "../components/dashboard/dashboard-sidemenu/dashboard-sidemenu.component";
import { BasicInputComponent } from "../components/commons/input/basic-input/basic-input.component";
import { SelectInputComponent } from "../components/commons/input/select-input/select-input.component";
import { MultiSelectComponent } from "../components/commons/input/multi-select/multi-select.component";
import { RadioInputComponent } from "../components/commons/input/radio/radio-input/radio-input.component";
import { RadioOptionComponent } from "../components/commons/input/radio/radio-option/radio-option.component";
import { TextareaInputComponent } from "../components/commons/input/textarea-input/textarea-input.component";
import { ButtonLinkComponent } from "../components/commons/button-link/button-link.component";
import { ButtonOutlineComponent } from "../components/commons/button-outline/button-outline.component";
import { ButtonPrimaryComponent } from "../components/commons/button-primary/button-primary.component";
import { CardComponent } from "../components/commons/card/card.component";
import { ConfirmDialogComponent } from "../components/commons/dialogs/confirm-dialog/confirm-dialog.component";
import { FormComponent } from "../components/commons/form/form.component";
import { ModalComponent } from "../components/commons/modal/modal.component";
import { ChatsComponent } from "../components/commons/chats/chats.component";
import { MultiImagesComponent } from "../components/commons/input/multi-images/multi-images.component";
import { TableComponent } from "../components/commons/table/table.component";

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardSidemenuComponent,
    BasicInputComponent,
    SelectInputComponent,
    MultiSelectComponent,
    RadioInputComponent,
    RadioOptionComponent,
    TextareaInputComponent,
    ButtonLinkComponent,
    ButtonOutlineComponent,
    ButtonPrimaryComponent,
    CardComponent,
    ConfirmDialogComponent,
    FormComponent,
    ModalComponent,
    ChatsComponent,
    MultiImagesComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    DashboardHeaderComponent,
    DashboardSidemenuComponent,
    BasicInputComponent,
    SelectInputComponent,
    MultiSelectComponent,
    RadioInputComponent,
    RadioOptionComponent,
    TextareaInputComponent,
    ButtonLinkComponent,
    ButtonOutlineComponent,
    ButtonPrimaryComponent,
    CardComponent,
    ConfirmDialogComponent,
    FormComponent,
    ModalComponent,
    ChatsComponent,
    MultiImagesComponent,
    TableComponent,
  ]
})
export class SharedModule { }
