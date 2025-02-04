package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.AdminReqDto;
import com.project.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@PostMapping("/addAdmin")
	public ResponseEntity<?> addAdmin(@RequestBody AdminReqDto adminDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(adminService.addAdmin(adminDto));
	}
	
//	@GetMapping("/profile/{adminId}")
//	public ResponseEntity<?> getAdmin(@PathVariable Long adminId){
//
//		return ResponseEntity.status(HttpStatus.OK).body(adminService.getAdmin(adminId));
//	}
}
