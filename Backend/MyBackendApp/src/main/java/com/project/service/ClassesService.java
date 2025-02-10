package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.ClassesReqDto;
import com.project.dto.ClassesRespDto;
import com.project.pojos.Classes;

public interface ClassesService {

	ApiResponse addClass(ClassesReqDto classesReqDto);

	List<ClassesRespDto> getClasses(String message);

	ApiResponse deleteClasses(Long classesId);

	ApiResponse updateClasses(Long classesId ,ClassesReqDto classesReqDto);

}
