package com.project.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.pojos.Feedback;
import com.project.pojos.Trainer;

public interface FeedbackDao extends JpaRepository<Feedback, Long> {
    
    @Query("SELECT f FROM Feedback f WHERE f.trainerId = :trainerId")
    
    List<Feedback> findByTrainerId(@Param("trainerId") Long trainerId);

}
