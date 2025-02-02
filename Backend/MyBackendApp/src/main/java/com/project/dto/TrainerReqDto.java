package com.project.dto;

import com.project.pojos.Gender;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class TrainerReqDto {

	// for register/login authentication
	private int statusCode;
	private String error;
	private String message;
	private String token;
	private String refreshToken;
	private String expirationTime;
	private String role;

	private String name;

	private String email;

	private String password;

	private int age;

	private String experience;

	private Gender gender;

//	private String status;
//	
//	private String role;
}
