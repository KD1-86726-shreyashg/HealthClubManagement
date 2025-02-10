package com.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.ClassesDao;
import com.project.dao.TrainerDao;
import com.project.dto.ApiResponse;
import com.project.dto.ClassesReqDto;
import com.project.dto.ClassesRespDto;
import com.project.pojos.Classes;
import com.project.pojos.Trainer;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ClassesServiceImpl implements ClassesService {

	@Autowired
	private ClassesDao classesDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private TrainerDao trainerDao;

	@Override
	public ApiResponse addClass(ClassesReqDto classesReqDto) {

		Trainer trainer = trainerDao.findById(classesReqDto.getTrainerId())
				.orElseThrow(() -> new RuntimeException("Invalid Trainer Id"));

		if (trainer != null) {

			Classes c = mapper.map(classesReqDto, Classes.class);
			c.setTrainerId(trainer);
			c.setStatus("ACTIVE");

			classesDao.save(c);
			return new ApiResponse("Classes Added Successfully");
		}

		return new ApiResponse("Cant Add Class Because trainer is not Unavailable");
	}

	@Override
	public List<ClassesRespDto> getClasses(String message) {
		List<ClassesRespDto> classesList = classesDao.findByStatus(message).stream().map(classes -> {
			ClassesRespDto cDto = mapper.map(classes, ClassesRespDto.class);

			if (classes.getTrainerId() != null) {
				cDto.setTrainerName(classes.getTrainerId().getName());
			}
			
			return cDto;
		}).collect(Collectors.toList());
		return classesList;

	}

	@Override
	public ApiResponse deleteClasses(Long classesId) {
		Classes c = classesDao.findById(classesId).orElseThrow(() -> new RuntimeException("Invalid Class Id"));

		if (c != null) {
			c.setStatus("INACTIVE");
			return new ApiResponse("Delete Successfully");
		}
		return new ApiResponse("Invalid Class Id");
	}

	@Override
	public ApiResponse updateClasses(Long classesId, ClassesReqDto classesReqDto) {
		Classes c = classesDao.findById(classesId).orElseThrow(() -> new RuntimeException("Invalid ClassesId"));

		c.setName(classesReqDto.getName());
		c.setTime(classesReqDto.getTime());
		c.setPrice(classesReqDto.getPrice());

		return new ApiResponse("Updated SuccessFully");
	}
}
