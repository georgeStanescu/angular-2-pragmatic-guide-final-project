import { CanDeactivate } from "@angular/router";
import { IFormComponent } from "./";

export class PreventUnsavedChangesGuard implements CanDeactivate<IFormComponent> {
  
  canDeactivate(component: IFormComponent) {
    if (component.hasUnsavedChanges()) {
      return confirm("This page has unsaved changes. Are you sure you want to leave it?");
    }

    return true;
  }
}
