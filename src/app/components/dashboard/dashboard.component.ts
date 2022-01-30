import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { refresh } from "src/app/utility/util";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardForm!: FormGroup;
  submitted = true;
  isMenuOpen=true;
  contentMargin=200;

  constructor(private formBuilder: FormBuilder,private user: UserService) {
  }

  ngOnInit(): void {
  }
  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=50;
    }
    else{
      this.contentMargin=400;
    }
  }
  refreshButton() {
    refresh();
  }

}
