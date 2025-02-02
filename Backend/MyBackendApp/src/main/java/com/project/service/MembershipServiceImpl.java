package com.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.MembershipDao;
import com.project.dto.ApiResponse;
import com.project.dto.MembershipReqDto;
import com.project.dto.MembershipTypeDto;
import com.project.dto.MembershipUpdateDto;
import com.project.pojos.Membership;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class MembershipServiceImpl implements MembershipService {

	@Autowired
	private MembershipDao membershipDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addNewMembership(MembershipReqDto memReqDto) {
		
		Membership mem = mapper.map(memReqDto, Membership.class);
		
		if(memReqDto.getType().equals("MONTHLY")) {
			mem.setDuration("1 MONTHS");
		}
		else if(memReqDto.getType().equals("QUARTERLY")) {
			mem.setDuration("3 MONTHS");
		}
		else if(memReqDto.getType().equals("HALF_YEARLY")) {
			mem.setDuration("6 MONTHS");
		}
		else if(memReqDto.getType().equals("YEARLY")) {
			mem.setDuration("12 MONTHS");
		}
		mem.setStatus("ACTIVE");
		membershipDao.save(mem);
		
		return new ApiResponse("Membership Added SuccessFully");
	}
	
	@Override
	public List<Membership> getAllMemberships(String message) {
		List<Membership> membershipList = membershipDao.findByStatus(message);
		return membershipList;
	}
	
	@Override
	public ApiResponse softDeleteMembership(Long membershipId) {
		
		Membership memShip = membershipDao.findById(membershipId).orElseThrow(()-> new RuntimeException("Invalid Membership Id"));
		
		if(memShip != null) {
			memShip.setStatus("INACTIVE");
			return new ApiResponse("Membership Deleted Successfully");
		}
		return new ApiResponse("Deletion Unsuccessfully");
	}
	
	@Override
	public ApiResponse updateMembership(Long membershipId, MembershipUpdateDto memUpdateDto) {
		Membership mem = membershipDao.findById(membershipId).orElseThrow(() -> new RuntimeException("Invalid MemberShipId"));
		
		if(mem != null) {
			mem.setPrice(memUpdateDto.getPrice());
			return new ApiResponse("Updated Successfully");
		}
		return new ApiResponse("Inavlid MembershipId");
	}
	
	@Override
	public List<MembershipTypeDto> getMembershipType() {
		List<MembershipTypeDto> mList = membershipDao.findAll().stream()
				.map(mem -> mapper.map(mem, MembershipTypeDto.class)).collect(Collectors.toList());
		
		return mList;
	}
	
}
