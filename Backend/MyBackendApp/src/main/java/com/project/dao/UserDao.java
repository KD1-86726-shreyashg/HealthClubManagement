package com.project.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.dto.UserRespDto;
import com.project.pojos.User;

public interface UserDao extends JpaRepository<User, Long> {

	List<User> findByStatus(String message);
	Optional<User> findByEmail(String email);
	
//	@Query("select s from Student s where s.courseId.name=:name")
//
//	List<Student> findByCourseName(@Param("name") String name);
	
	
//	@Query("select u from User u where u.personalTrainerId=:trainerId AND u.status=:ACTIVE")
//	
//	List<UserRespDto> findUsersUnderTrainer(@Param("trainerId") Long trainerId);

//	List<User> findByTrainerId(Long personalTrainerId);

	@Query("SELECT u FROM User u WHERE u.personalTrainerId.id = :personalTrainerId")
	List<User> findByPersonalTrainerId(@Param("personalTrainerId") Long personalTrainerId);


	
}