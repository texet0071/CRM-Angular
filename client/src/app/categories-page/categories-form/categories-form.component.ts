import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../shared/services/categories.service";
import {of, switchMap} from "rxjs";
import {MaterialService} from "../../shared/classes/material.service";
import {getErrorMessage} from "../../shared/classes/utils";

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  form: FormGroup
  isNew = true

  constructor(private route: ActivatedRoute,
              private categotiesService: CategoriesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.categotiesService.getById(params['id'])
            }
            return  of(null)
          }
        )
      )
      .subscribe(
        category => {
          if(category){
            this.form.patchValue({
              name: category.name
            })
            MaterialService.updateTextInput()
          }
          this.form.enable()
        },
        error => MaterialService.toast(getErrorMessage(error))
      )
  }

  onSubmit() {

  }
}
