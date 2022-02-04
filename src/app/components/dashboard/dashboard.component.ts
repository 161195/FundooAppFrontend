import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { refresh } from "src/app/utility/util";
import { Router } from '@angular/router';



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
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
 
 

  constructor(private formBuilder: FormBuilder,private user: UserService,private route:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
   
  }
  
  //for sidenav open close with fixed icons
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
  //to navigate to notes list page
  Notes(){
    this.route.navigateByUrl('dashboard/notes')
  }
  //to navigate to trash listpage
  Trash(){
    this.route.navigateByUrl('dashboard/trash')
  }
  //to navigate to archive listpage
  Archive(){
    this.route.navigateByUrl('dashboard/archive')
  }
  
}
