import { Component, OnInit } from '@angular/core';
import { RubricaService } from 'src/app/services/rubrica.service'
import { Rubrica } from 'src/app/models/rubrica';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';

@Component({
  selector: 'app-rubrica-add',
  templateUrl: './rubrica-add.component.html',
  styleUrls: ['./rubrica-add.component.css']
})
export class RubricaAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private rubricaService: RubricaService, private modalService: NgbModal, private formBuilder: FormBuilder) { }
  rubrica:Rubrica;
  ngOnInit() {
    this.rubrica = new Rubrica();  
    this.registerForm = this.formBuilder.group({
      codigo: [this.rubrica.codigo, [Validators.required, Validators.minLength(3)]],
      titulo: [this.rubrica.titulo, Validators.required],
      item_1: [this.rubrica.item_1, Validators.required],
      item_2: [this.rubrica.item_2, Validators.required],
      item_3: [this.rubrica.item_3, Validators.required],
      item_4: [this.rubrica.item_4, Validators.required],
      item_5: [this.rubrica.item_5, Validators.required],
      item_6: [this.rubrica.item_6, Validators.required],
      item_7: [this.rubrica.item_7, Validators.required],
      item_8: [this.rubrica.item_8, Validators.required],
      item_9: [this.rubrica.item_9, Validators.required],
      item_10: [this.rubrica.item_10, Validators.required],
      item_11: [this.rubrica.item_11, Validators.required],
      item_12: [this.rubrica.item_12, Validators.required],
      item_13: [this.rubrica.item_13, Validators.required],
      item_14: [this.rubrica.item_14, Validators.required],
      item_15: [this.rubrica.item_15, Validators.required],
      item_16: [this.rubrica.item_16, Validators.required],
      item_17: [this.rubrica.item_17, Validators.required],
      item_18: [this.rubrica.item_18, Validators.required],
      item_19: [this.rubrica.item_19, Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  create() {
    this.rubrica = this.registerForm.value;

    this.rubricaService.post(this.rubrica).subscribe(c => {
        if (c != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'SUCCESS!! :-)';
        }
    });
  }

  
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.create();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  
}
