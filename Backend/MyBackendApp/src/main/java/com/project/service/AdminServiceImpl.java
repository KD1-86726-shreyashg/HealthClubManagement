package com.project.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.AdminDao;
import com.project.dto.AdminReqDto;
import com.project.dto.ApiResponse;
import com.project.pojos.Admin;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDao adminDao;
	
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public ApiResponse addAdmin(AdminReqDto adminDto) {
		Admin admin = mapper.map(adminDto, Admin.class);
		
		adminDao.save(admin);
		
		return new ApiResponse("Admin Registered Succesffuly");
	}
}
