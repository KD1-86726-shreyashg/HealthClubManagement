package com.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.pojos.Classes;

public interface ClassesDao extends JpaRepository<Classes, Long> {

	List<Classes> findByStatus(String message);

//	public List<Classes> findByStatus("ACTIVE");

	
}
