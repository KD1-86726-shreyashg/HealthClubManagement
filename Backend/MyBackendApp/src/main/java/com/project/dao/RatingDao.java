package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.pojos.Rating;

public interface RatingDao extends JpaRepository<Rating, Long> {

}
