import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})


export class ProfileComponent implements OnInit {

  @Input()
  public userId: number = 0
  public fullName: string = ''
  public email: string = ''
  public phoneNumber: string = ''

  constructor(private router: Router, private _snackBar: MatSnackBar, private userService: UserService) {
  }

  ngOnInit(): void {

    if(this.userId){
      this.userService.getUserProfile(this.userId).subscribe((data: any) => {
        console.log(data)
        this.userId = data.user.userId
        this.fullName = data.user.fullName
        this.email = data.user.email
        this.phoneNumber = data.user.phoneNumber
      }, error => {
        this._snackBar.open("Failed to fetch profile", '', {
          duration: 1000
        })
      })
    } else {
      this.userService.getProfile().subscribe((data: any) => {
        console.log(data)
        this.userId = data.user.userId
        this.fullName = data.user.fullName
        this.email = data.user.email
        this.phoneNumber = data.user.phoneNumber
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
