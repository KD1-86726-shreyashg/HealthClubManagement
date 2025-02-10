package com.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.TrainerDao;
import com.project.dto.ApiResponse;
import com.project.dto.TrainerNamesDto;
import com.project.dto.TrainerReqDto;
import com.project.dto.TrainerRespDto;
import com.project.dto.UpdateTrainerDto;
import com.project.pojos.Trainer;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TrainerServiceImpl implements TrainerService {
	
	@Autowired
	private TrainerDao trainerDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse addTrainer(TrainerReqDto trainerReqDto) {
		
		Trainer trainer = mapper.map(trainerReqDto, Trainer.class);
		
		trainerDao.save(trainer);
		trainer.setRole("TRAINER");
		trainer.setStatus("ACTIVE");
		
		return new ApiResponse("Trainer Added SuccessFully");
	}
	
	@Override
	public List<Trainer> getAllTrainers(String message) {
		List<Trainer> trainerList = trainerDao.findByStatus(message);
		
		return trainerList;
	}
	
	@Override
	public ApiResponse deleteTrainer(Long trainerId) {
		Trainer trainer = trainerDao.findById(trainerId).orElseThrow(()-> new RuntimeException("Invalid Trainer Id"));
		
		if(trainer != null) {
			trainer.setStatus("INACTIVE");
			return new ApiResponse("Trainer Delete SuccessFully");
		}
		return new ApiResponse("Invalid Trainer Id Entered");
	}
	
	@Override
	public ApiResponse updateTrainer(Long id, UpdateTrainerDto updateTrainerDto) {
		Trainer trainer = trainerDao.findById(id).orElseThrow(() -> new RuntimeException("Invalid Trainer Id"));

		if (trainer != null) {
//			mapper.map(updateTrainerDto, Trainer.class);

			trainer.setName(updateTrainerDto.getName());
			trainer.setAge(updateTrainerDto.getAge());
			trainer.setExperience(updateTrainerDto.getExperience());
			trainer.setEmail(updateTrainerDto.getEmail());

			trainerDao.save(trainer);

			return new ApiResponse("Trainer Updated Successfully");
		}
		return new ApiResponse("Invalid Trainer Id");
	}

	@Override
	public List<TrainerNamesDto> getTrainerNames() {

		List<TrainerNamesDto> trainerList = trainerDao.findAll().stream()
				.map(trainer -> mapper.map(trainer, TrainerNamesDto.class)).collect(Collectors.toList());

		return trainerList;
	}

	@Override
	public List<TrainerRespDto> getProfile(Long trainerId) {
		List<TrainerRespDto> trainerList = trainerDao.findById(trainerId).stream()
				.map(trainer -> mapper.map(trainer, TrainerRespDto.class)).collect(Collectors.toList());
		
		return trainerList;
	}
	
//	@Override
//	public List<User> findByTrainerId(Long trainerId) {
//		
//		
//		
//		return ;
//	}
}

