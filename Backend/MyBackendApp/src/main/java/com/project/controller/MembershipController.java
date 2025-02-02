package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.MembershipReqDto;
import com.project.dto.MembershipUpdateDto;
import com.project.pojos.Membership;
import com.project.service.MembershipService;

@RestController
@RequestMapping
@CrossOrigin("*")
public class MembershipController {

	@Autowired
	private MembershipService memService;
	

	@PostMapping("/addMembership")
	public ResponseEntity<?> addMembership(@RequestBody MembershipReqDto memReqDto){
		return ResponseEntity.status(HttpStatus.OK).body(memService.addNewMembership(memReqDto));
	}
	
	@GetMapping("/getMembership")
	public ResponseEntity<?> getMemberships(){
		String message = "ACTIVE";
		List<Membership> memList = memService.getAllMemberships(message);
		if(memList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("NO MEMBERSHIPS");
		}
		return ResponseEntity.ok(memList);
	}
	
	@PutMapping("/deleteMembership/{membershipId}")
	public ResponseEntity<?> deleteMembership(@PathVariable Long membershipId){
		return ResponseEntity.status(HttpStatus.OK).body(memService.softDeleteMembership(membershipId));
	}
	
//	@PutMapping("/updateMembership/{membershipId}")
//	public ResponseEntity<?> updateMembership(@PathVariable Long membershipId , @RequestBody MembershipUpdateDto memUpdateDto){
//		return ResponseEntity.status(HttpStatus.OK).body(memService.updateMembership(membershipId , memUpdateDto));
//	}
	
	@PutMapping("/updateMembership/{membershipId}")
	public ResponseEntity<?> updateMembership(@PathVariable Long membershipId , @RequestBody MembershipUpdateDto memUpdateDto){
		return ResponseEntity.status(HttpStatus.OK).body(memService.updateMembership(membershipId, memUpdateDto));
	}
	
//	@GetMapping("/getMembershipType")
//	public ResponseEntity<?> getMembershipType(){
//		List<MembershipTypeDto> mList = memService.getMembershipType();
//		return ResponseEntity.ok(mList);
//	}
}
