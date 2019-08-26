import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Member } from '../clazz/member';
import { MemberService } from '../service/member.service';
import { Alert } from '../clazz/alert';
import { AlertEnum } from '../clazz/alert-enum';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: Member[] = [];
  hasParams: boolean;
  isSuccess: boolean;
  isUpdate: boolean;
  alert: Alert;

  dtSettings: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.memberService.getAllMembers().subscribe((members) => {
      this.members = members;
      this.dtTrigger.next();
    });

    this.dtSettings = {
      searching: false,
      ordering: true,
      // processing: true,
      // serverSide: true,
      pagingType: 'full_numbers',
      // ajax: {
      //   url : 'http://localhost:8080/getMembersDataTable',
      //   data : { 'param1': 'param1' }
      // },
      // columnDefs: [
      //   { data: 'id', orderable: true, 'targets': [0] },
      //   { data: 'name', orderable: true, 'targets': [1] },
      //   { data: 'gender', orderable: true, 'targets': [2] },
      //   { data: 'birthdate', orderable: true, 'targets': [3] }
      // ]
    };

    // var oTable = $('#table-member').DataTable(this.dtSettings);

    this.route.queryParams.subscribe(params => {
      this.isSuccess = params.success;
      this.isUpdate = params.update;
      this.hasParams = this.isSuccess != undefined && this.isUpdate != undefined;
      if (this.hasParams) {
        this.alert = new Alert();
        if (this.isSuccess == true) {
          this.alert.type = AlertEnum.SUCCESS;
          console.log(this.isUpdate);
          if (this.isUpdate == true) {
            this.alert.message = 'Success update member';
          } else {
            this.alert.message = 'Success create new member';
          }
        } else {
          this.alert.type = AlertEnum.DANGER;
          console.log(this.isUpdate);
          if (this.isUpdate == true) {
            this.alert.message = 'Failed update member';
          } else {
            this.alert.message = 'Failed create new member';
          }
        }
      }
    });
  }

delete (id: number) {
  if (confirm('Are you sure delete this member?')) {
    this.memberService.deleteMember(id).subscribe(res => {
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
  }
}

close(alert: Alert) {
  this.hasParams = false;
  this.isSuccess = false;
  this.isUpdate = false;
  this.alert = new Alert();
  this.router.navigate(['/member']);
}

}
