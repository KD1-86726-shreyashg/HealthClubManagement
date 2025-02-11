package com.project.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.project.pojos.Gender;
import com.project.pojos.User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class LoginUserDTO {
	private Long id;
	private int statusCode;
	private String error;
	private String message;
	private String token;
	private String refreshToken;
	private String expirationTime;
	private String name;
	private String role;
	private String email;
	private String password;
	private int age;
	private int height;
	private int weight;
	private Gender gender;
	private Long membershipId;
	private Long personalTrainerId;
	private User ourUsers;
	private List<User> ourUsersList;

}
