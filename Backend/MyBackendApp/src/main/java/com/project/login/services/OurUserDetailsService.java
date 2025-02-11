package com.project.loginuser.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.dao.AdminDao;
import com.project.dao.TrainerDao;
import com.project.dao.UserDao;
import com.project.pojos.Admin;
import com.project.pojos.Trainer;
import com.project.pojos.User;

@Service
public class OurUserDetailsService implements UserDetailsService {

	@Autowired
	private UserDao usersRepo;

	@Autowired
	private AdminDao adminDao;

	@Autowired
	private TrainerDao trainerDao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = usersRepo.findByEmail(username).orElse(null);
		if (user != null)
			return user;
		
		Trainer trainer = trainerDao.findByEmail(username).orElse(null);
		if (trainer != null)
			return trainer;
		
		Admin admin = adminDao.findByEmail(username).orElse(null);
		if (admin != null)
			return admin;
		
		return null;

	}
	
	
	

}
