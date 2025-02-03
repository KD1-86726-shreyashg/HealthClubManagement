package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.pojos.DietPlan;

public interface DietDao extends JpaRepository<DietPlan, Long> {

}
