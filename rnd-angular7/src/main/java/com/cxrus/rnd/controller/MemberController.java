package com.cxrus.rnd.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cxrus.rnd.dto.DataTables;
import com.cxrus.rnd.dto.MemberDto;
import com.cxrus.rnd.model.Member;
import com.cxrus.rnd.service.MemberService;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class MemberController {

	@Autowired
	private MemberService memberService;

	@GetMapping("/getMembers")
	public List<Member> getMembers() {
		return memberService.getMemberRepository().findAll();
	}

	@GetMapping("/getMember/{id}")
	public Member getMember(@PathVariable Long id) {
		Member member = memberService.getMemberRepository().findOne(id);
		return member;
	}

	@PostMapping("/addMember")
	public Member addMember(@RequestBody @Valid MemberDto member) {
		return memberService.addMember(member);
	}

	@PutMapping("/updateMember/{id}")
	public Member updateMember(@PathVariable Long id, @RequestBody @Valid MemberDto member) {
		return memberService.updateMember(id, member);
	}

	@DeleteMapping("/deleteMember/{id}")
	public void deleteMember(@PathVariable Long id) {
		memberService.getMemberRepository().delete(id);
	}

	@GetMapping("/getMembersDataTable")
	public DataTables<Member> getMembersDataTable(HttpServletRequest request, HttpServletResponse response) {

		Integer start = (Integer) request.getAttribute("start");
		if (start == null) start = 0;
		Integer length = (Integer) request.getAttribute("length");
		if (length == null || length == 0) length = 10;
		Integer orderColumn = (Integer) request.getAttribute("order/[0/]/[column/]");
		if (orderColumn == null) orderColumn = 0;
		String orderDir = (String) request.getAttribute("order[0][dir]");

		DataTables<Member> dataTables = new DataTables<>();

		Long recordCount = Long.valueOf(memberService.getMemberRepository().findAll().size());
		List<Member> members = memberService.getMemberRepository().findAll();

		dataTables.setAaData(members);
		dataTables.setiTotalDisplayRecords(recordCount);
		dataTables.setiTotalRecords(recordCount);
//		dataTables.setsEcho(sEcho);
//		dataTables.setsColumns(sColumns);
//		dataTables.setiSortingCols(iSortingCols);
		dataTables.setiSortColumnIndex(orderColumn);
		dataTables.setsSortDirection(orderDir);

		return dataTables;
	}
}
