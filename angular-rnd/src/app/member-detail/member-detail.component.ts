import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Member } from '../clazz/member';
import { GenderEnum } from '../clazz/gender-enum';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [DatePipe]
})
export class MemberDetailComponent implements OnInit {

  member: Member;
  genderOpts = GenderEnum;
  genderKeys = Object.keys;
  submitted = false;
  formGroup: FormGroup;
  isNew = false;
  isView = false;
  isEdit = false;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { }


  ngOnInit() {
    var today = new Date();
    var bYear = Number(this.datePipe.transform(today, 'yyyy'));
    var bMonth = Number(this.datePipe.transform(today, 'MM'));
    var bDate = Number(this.datePipe.transform(today, 'dd'));
    this.formGroup = this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: [{'year':bYear, 'month': bMonth, 'day': bDate}, Validators.required]
    });

    var id = this.route.snapshot.params['id'];
    this.isNew = this.route.snapshot.params['action'] == 'add';
    this.isView = this.route.snapshot.params['action'] == 'view';
    this.isEdit = this.route.snapshot.params['action'] == 'edit';

    if (!this.isNew && !this.isView && !this.isEdit) this.router.navigate(['/member']);

    if (id > 0 && !this.isNew) {
      this.memberService.getMember(id).subscribe((member) => {
        bYear = Number(this.datePipe.transform(member.birthdate, 'yyyy'));
        bMonth = Number(this.datePipe.transform(member.birthdate, 'MM'));
        bDate = Number(this.datePipe.transform(member.birthdate, 'dd'));
        this.formGroup = this.formBuilder.group({
            id: [member.id, Validators.required],
            name: [member.name, Validators.required],
            gender: [member.gender, Validators.required],
            birthdate: [{'year':bYear, 'month': bMonth, 'day': bDate}, Validators.required]
          });
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.formGroup.invalid) { return; }

      var bYear = Number(this.formGroup.value.birthdate.year);
      var bMonth = Number(this.formGroup.value.birthdate.month);
      var bDate = Number(this.formGroup.value.birthdate.day);
      var bthDate = new Date(bYear, bMonth-1, bDate);
      var birthdate = this.datePipe.transform(bthDate, 'yyyy-MM-dd');
      console.log(birthdate);
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value))

      this.member = new Member();
      this.member.name = this.formGroup.value.name;
      this.member.gender = this.formGroup.value.gender;
      this.member.birthdate = birthdate;
      console.log(this.member);
      
      if (this.isEdit) {
        this.member.id = this.formGroup.value.id;
        this.memberService.updateMember(this.member.id, this.member).subscribe((result) => {
          this.router.navigate(['/member'], 
            {queryParams: { success: result!=undefined, update: this.isEdit }});
        });
      } else if (this.isNew) {
        this.memberService.addMember(this.member).subscribe((result) => {
          this.router.navigate(['/member'], 
            {queryParams: { success: result!=undefined, update: this.isEdit }});
        });
      }
  }

}