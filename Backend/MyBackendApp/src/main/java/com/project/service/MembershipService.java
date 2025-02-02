package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.MembershipReqDto;
import com.project.dto.MembershipTypeDto;
import com.project.dto.MembershipUpdateDto;
import com.project.pojos.Membership;

public interface MembershipService {

	ApiResponse addNewMembership(MembershipReqDto memReqDto);

	List<Membership> getAllMemberships(String message);

	ApiResponse softDeleteMembership(Long membershipId);

	ApiResponse updateMembership(Long membershipId, MembershipUpdateDto memUpdateDto);

	List<MembershipTypeDto> getMembershipType();
}
