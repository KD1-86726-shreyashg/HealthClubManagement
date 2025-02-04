package com.project.service;

import com.project.dto.AdminReqDto;
import com.project.dto.AdminRespDto;
import com.project.dto.ApiResponse;

public interface AdminService {

	ApiResponse addAdmin(AdminReqDto adminDto);

//	AdminRespDto getAdmin(Long adminId);

}
