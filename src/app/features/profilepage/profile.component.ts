import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user-service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})


export class ProfileComponent implements OnInit{

  @Input()
  public studentId: number = 0
  public fullName: string = ''
  public email: string = ''

  constructor(private router: Router, private _snackBar: MatSnackBar, private userService: UserService) {
  }

  ngOnInit(): void {

    if(this.studentId){
      this.userService.getStudentProfile(this.studentId).subscribe((data: any) => {
        console.log(data)
        this.fullName = data.user.fullName
        this.email = data.user.email
      }, error => {
        this._snackBar.open("Failed to fetch profile", '', {
          duration: 1000
        })
      })
    } else {
      this.userService.getProfile().subscribe((data: any) => {
        console.log(data)
        this.fullName = data.user.fullName
        this.email = data.user.email
      }, error => {
        this._snackBar.open("Failed to fetch profile", '', {
          duration: 1000
        })
      })
    }

  }

  logout() :void {
    this.router.navigate(['sidebar']);
  }

}
