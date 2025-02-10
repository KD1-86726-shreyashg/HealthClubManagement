package com.project.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Feedback extends BaseClass {

	@Column(nullable = false)
	private int stars;
	
	@Column(length = 500 , nullable = false)
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "trainer_id")
	private Trainer trainerId;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User userId;
}
