package com.project.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.pojos.Admin;
import com.project.pojos.User;

public interface AdminDao extends JpaRepository<Admin, Long> {
	Optional<Admin> findByEmail(String email);
}
