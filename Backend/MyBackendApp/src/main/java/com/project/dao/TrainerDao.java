package com.project.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.pojos.Trainer;
import com.project.pojos.User;

public interface TrainerDao extends JpaRepository<Trainer, Long> {

	List<Trainer> findByStatus(String message);

	Optional<Trainer> findByEmail(String email);
	
	@Query("SELECT u FROM User u WHERE u.personalTrainerId.id = :personalTrainerId")
	List<User> findByPersonalTrainerId(@Param("personalTrainerId") Long personalTrainerId);
}
