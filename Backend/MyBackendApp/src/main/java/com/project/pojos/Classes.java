package com.project.pojos;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public class Classes extends BaseClass {

	@Column(length = 50 , nullable = false , unique = true)
	private String name;
	
	@Column(nullable = false)
	private double price;
	
	@Column(length = 50 , nullable = false)
	private String time;
	
	@Column(nullable = false , columnDefinition = "varchar(10) DEFAULT 'ACTIVE'" , insertable = false)
	private String status;
	
	@ManyToOne
	@JoinColumn(name = "trainer_id")
	private Trainer trainerId;

	@OneToMany
	@JoinColumn(name = "classes_id")
	private List<User> userList = new ArrayList<>();
	
	public void addMembers(User user) {
		this.userList.add(user);
	}
		
}
