import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {Subject, takeUntil} from "rxjs";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private destroy$!: Subject<boolean>
  public currentUser: User | undefined

  constructor(private tokenService: TokenService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>()

    this.tokenService.user$.pipe(
      takeUntil(this.destroy$)
    )
      .subscribe(
        (user) => {
          this.currentUser = user
           console.log('je suis dans la NAVBAR : ', this.currentUser)
        }
      )
  }

  logout(): void {
    this.tokenService.clearToken()
    this.currentUser = undefined
  }
}
