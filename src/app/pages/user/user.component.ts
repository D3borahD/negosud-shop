import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../core/services/token.service";
import {User} from "../../core/models/user.model";
import {Observable, Subject, takeUntil} from "rxjs";
import {UserService} from "../../core/services/user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  private destroy$!: Subject<boolean>
  public currentUser: User | undefined




  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>()

     this.tokenService.user$.pipe(
       takeUntil(this.destroy$)
     )
      .subscribe(
      (user) => {
        this.currentUser = user
       // console.log('je suis dans le component USER : ', this.currentUser)
      }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }





}
