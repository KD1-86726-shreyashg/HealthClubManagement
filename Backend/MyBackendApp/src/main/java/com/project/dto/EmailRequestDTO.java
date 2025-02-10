package com.project.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class EmailRequestDTO {

	private String email;
	private String msg;
	private int otp;

	
}
