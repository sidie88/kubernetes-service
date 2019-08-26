package com.cxrus.rnd.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.cxrus.rnd.dto.MemberDto;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "tbl_member")
public class Member implements Serializable {

	/**
	 * @author dimassulistyono
	 */
	private static final long serialVersionUID = 3553718394272950574L;

	@Id
	@GeneratedValue
	private Long id;

	private String name;
	
	private String gender;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private Date birthdate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	
	public Member() {
		super();
	}

	public Member(MemberDto dto) {
		super();
		this.name = dto.getName();
		this.gender = dto.getGender();
		this.birthdate = dto.getBirthdate();
	}
	
	public Member parse(MemberDto dto) {
		this.name = dto.getName();
		this.gender = dto.getGender();
		this.birthdate = dto.getBirthdate();
		return this;
	}
	
	@Override
	public String toString() {
		return "Invoice [id=" + id + ", name=" + name + ", gender=" + gender + ", birthdate=" + birthdate + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((birthdate == null) ? 0 : birthdate.hashCode());
		result = prime * result + ((gender == null) ? 0 : gender.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Member other = (Member) obj;
		if (birthdate == null) {
			if (other.birthdate != null)
				return false;
		} else if (!birthdate.equals(other.birthdate))
			return false;
		if (gender == null) {
			if (other.gender != null)
				return false;
		} else if (!gender.equals(other.gender))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
}