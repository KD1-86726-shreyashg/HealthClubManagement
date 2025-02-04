package com.project.pojos;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class User extends BaseClass implements UserDetails {

	@Column(length = 30, nullable = false)
	private String name;

	@Column(length = 50, nullable = false, unique = true)
	private String email;

	@Column(length = 200, nullable = false)
	private String password;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(nullable = false)
	private int age;

	@Column(nullable = false)
	private double height;

	@Column(nullable = false)
	private double weight;

	@Column(columnDefinition = "varchar(10) DEFAULT 'MEMBER'" , insertable = false , nullable = false)
	private String role;

	@Column(columnDefinition = "varchar(10) DEFAULT 'ACTIVE'" , insertable = false , nullable = false)
	private String status;

	
	@ManyToOne
	@JoinColumn(name = "membership_id")
	private Membership membershipId;

	@ManyToOne
	@JoinColumn(name = "trainer_id")
	private Trainer personalTrainerId;
	
	@ManyToOne
	@JoinColumn(name = "workout_plan_id")
	private WorkoutPlan workoutPlanId;
	
	@ManyToOne
	@JoinColumn(name = "diet_plan_id")
	private DietPlan dietPlanId;

//	@ManyToOne
//	@JoinColumn(name = "class_id")
//	private Classes classId;
	
	
	// spring security related methods.
	
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
