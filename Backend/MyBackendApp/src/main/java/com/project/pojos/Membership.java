package com.project.pojos;

import java.awt.Window.Type;

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
public class Membership extends BaseClass {

	@Enumerated(EnumType.STRING)
	private MembershipType type;
	
	@Column(nullable = false)
	private String duration;
	
	@Column(nullable = false , unique = true)
	private double price;
	
	@Column(nullable = false , columnDefinition = "varchar(20) DEFAULT 'ACTIVE'" , insertable = false)
	private String status;
}
