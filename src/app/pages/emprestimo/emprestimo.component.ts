import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmprestimoService } from 'src/app/service/emprestimo.service';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {
  
  profileForm: FormGroup;
  
  emprestimo: EmprestimoComponent;
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(
    private service: EmprestimoService,
    private fb: FormBuilder,    
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    
  }

}
