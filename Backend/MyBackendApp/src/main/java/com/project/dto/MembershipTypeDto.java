package com.project.dto;

import com.project.pojos.MembershipType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class MembershipTypeDto {

	private Long id;
	private MembershipType type;
}
