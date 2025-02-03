package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.pojos.WorkoutPlan;

public interface WorkoutDao extends JpaRepository<WorkoutPlan, Long> {

}
