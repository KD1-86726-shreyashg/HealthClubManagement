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

import com.project.dto.ClassesReqDto;
import com.project.dto.ClassesRespDto;
import com.project.pojos.Classes;
import com.project.service.ClassesService;

@RestController
@RequestMapping("/classes")
@CrossOrigin("*")
public class ClassesController {
	
	@Autowired
	private ClassesService classesService;
	
	@PostMapping("/addClasses")
	public ResponseEntity<?> addClass(@RequestBody ClassesReqDto classesReqDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(classesService.addClass(classesReqDto));
	}
	
	@GetMapping("/getClasses")
	public ResponseEntity<?> getClasses(){
		
		String message = "ACTIVE";
		
		List<ClassesRespDto> classesList = classesService.getClasses(message);
		
		if(classesList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Classes Found");
		}
		return ResponseEntity.ok(classesList);
	}

	@PutMapping("/deleteClasses/{classesId}")
	public ResponseEntity<?> deleteClasses(@PathVariable Long classesId){
		 return ResponseEntity.status(HttpStatus.OK).body(classesService.deleteClasses(classesId));
	}
	
	@PutMapping("/updateClasses/{classesId}")
	public ResponseEntity<?> updateClasses(@PathVariable Long classesId , @RequestBody ClassesReqDto classesReqDto){
		return ResponseEntity.status(HttpStatus.OK).body(classesService.updateClasses(classesId , classesReqDto));
	}
}
