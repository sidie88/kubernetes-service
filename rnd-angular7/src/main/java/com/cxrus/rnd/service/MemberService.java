package com.cxrus.rnd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cxrus.rnd.dto.MemberDto;
import com.cxrus.rnd.model.Member;
import com.cxrus.rnd.repository.MemberRepository;

@Service
public class MemberService {

	@Autowired
	private MemberRepository memberRepository;

	public MemberRepository getMemberRepository() {
		return memberRepository;
	}
	
	public Member addMember(MemberDto dto) {
		Member member = new Member(dto);
		return getMemberRepository().save(member);
	}
	
	public Member updateMember(Long id, MemberDto dto) {
		Member member = getMemberRepository().getOne(id);
		member.parse(dto);
		return getMemberRepository().save(member);
	}
}
