package com.project.pojos;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Admin extends BaseClass implements UserDetails {

	@Column(length = 30, nullable = false)
	private String name;

	@Column(length = 50, nullable = false, unique = true)
	private String email;

	@Column(length = 200, nullable = false)
	private String password;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(columnDefinition = "varchar(10) DEFAULT 'ADMIN'", nullable = false, insertable = false)
	private String role;

	@Column(columnDefinition = "varchar(10) DEFAULT 'ACTIVE'", nullable = false, insertable = false)
	private String status;

	// for login authorization
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of(new SimpleGrantedAuthority(role));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}
}
