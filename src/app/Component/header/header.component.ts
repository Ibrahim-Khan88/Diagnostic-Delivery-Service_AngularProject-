import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public id : any = "";
  hospitalTitle: string;
  hospitalImage: string = "../assets/medicalCollage/" + 1 + ".jpg";
  public hide : boolean = true;
  private currentUrl;

  medicalName: string[] = ['Khulna Medical Hospital', 'Shaheed Sheikh Abu Naser Specialised Hospital',
    'Khulna City Hospital', 'Islami Bank Hospital Khulna', 'Khulna Shishu Hospital', 'Gazi Medical College and Hospital']


    @Output() sideNavOpen: EventEmitter<string> = new EventEmitter<string>();

     @Output() sideNavClose: EventEmitter<string> = new EventEmitter<string>();
    

    sendNavOpenFun(){
      $(".sidebar").css({ 'left': 0 });
      $("#cancel").css({ 'left': 210 });
      this.sideNavOpen.next("Open");
    }

    sendNavCloseFun(){
      $(".sidebar").css({ 'left': -250 });
      $("#cancel").css({ 'left': -195 });
       this.sideNavClose.next("Close");
    }

  constructor(private router: Router,
    private localStoregeService: LocalStorageService) { }

  ngOnInit(): void {

    $(document).ready(function () {

      var x = $(".logo").position();

      var b = $(".logo").width();
     
      $("#menuIcon").css({ 'left': x.left + 170 });

      var y = $("#menuIcon").position();


      // // open
      // $("#btn").click(function () {
      //   $(".sidebar").css({ 'left': 0 });
      //   $("#cancel").css({ 'left': 210 });
      //   // $(".allContainer").css({ 'margin-left': 210 });
      //   // $("#report-info-popup").toggleClass("border-class");
      // });

      // // close
      // $("#cancel").click(function () {
      //   $(".sidebar").css({ 'left': -250 });
      //   $("#cancel").css({ 'left': -195 });
      //   // $("#report-info-popup").toggleClass("border-class");
      // });

    });

    // this.interactionService.headingTitle$.subscribe(
    //   id => {
    //     this.id = id
    //     this.hospitalTitle = this.medicalName[this.id - 1];
    //     this.hide = true;
    //   }
    // )

    if (window.location.href == 'http://localhost:4200/') {
      this.hide = false;
    }
  }

  simple(){

    if (window.location.href == 'http://localhost:4200/') {
      this.hide = false;
    }
    else{
      this.hide = true;
    }
    console.log("simple " + this.hide);
  }

  setReport() {
    this.sendNavCloseFun();
    this.router.navigate(['/adminreport']);
  }

  addInvestigationRequest() {
    this.sendNavCloseFun();
    this.router.navigate(['/adminpost']);
  }

  addInvestigation() {
    this.sendNavCloseFun();
    this.router.navigate(['/investigationadd']);
  }

  investigationList(){
    this.sendNavCloseFun();
    this.router.navigate(['/investigation']);
  }

  home() {
    this.sendNavCloseFun();
    this.router.navigate(['/investigationrequest/1']);
  }

  closeNav(){
    $(".sidebar").css({ 'left': -250 });
    $("#cancel").css({ 'left': -195 });
  }

}
