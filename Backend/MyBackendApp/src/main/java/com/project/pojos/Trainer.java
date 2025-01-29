package com.project.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Trainer extends BaseClass {

	@Column(length = 30 , nullable = false)
	private String name;
	
	@Column(length = 50 , nullable = false , unique = true)
	private String email;
	
	@Column(length = 50 , nullable = false)
	private String password;
	
	@Column(nullable = false)
	private int Age;
	
	private String experience;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(columnDefinition = "varchar(10) DEFAULT 'ACTIVE'" ,nullable = false , insertable = false)
	private String status;
	
	@Column(columnDefinition = "varchar(10) DEFAULT 'TRAINER'" , nullable = false  , insertable = false)
	private String role;
	
	
}
