package com.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.pojos.Membership;

public interface MembershipDao extends JpaRepository<Membership, Long> {

	List<Membership> findByStatus(String message);

}
