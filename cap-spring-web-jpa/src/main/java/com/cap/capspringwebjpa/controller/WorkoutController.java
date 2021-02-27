package com.cap.capspringwebjpa.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cap.capspringwebjpa.entities.Workout;
import com.cap.capspringwebjpa.repos.WorkoutRepository;

@RestController
public class WorkoutController {
	
	@Autowired
	WorkoutRepository workoutRepository;
	
	
	@RequestMapping(value="/workout" , method = RequestMethod.POST)
	public ResponseEntity<Void> addWorkout(@RequestBody Workout w) {
		ResponseEntity<Void> re;
		Workout workout = workoutRepository.findWorkoutByTitle(w.getTitle());
		if(workout == null) {
			workoutRepository.save(w);
			 re = new ResponseEntity<>(HttpStatus.CREATED);
		}
		else {
			re = new ResponseEntity<>(HttpStatus.CONFLICT);
			
		}
		return re;
	}
	
	@RequestMapping(value="/workout",method = RequestMethod.GET)
	public List<Workout> findAllWorkouts(){
		 return workoutRepository.findAll();
	}
	
	@RequestMapping(value="/workout/{name}", method = RequestMethod.GET)
	public Workout findWorkoutByTitle(@PathVariable("name") String name){
		 return workoutRepository.findWorkoutByTitle(name);
	}
	
	@RequestMapping(value="/workout/{id}" ,method = RequestMethod.GET)
	public Optional<Workout> findWorkoutById(@PathVariable("id") int id){
		 return workoutRepository.findById(id);
	}
	
	@DeleteMapping("/workout/{id}")
	public void deleteWorkout(@PathVariable("id") int id) {
		Optional<Workout> workout = workoutRepository.findById(id);
		Workout w = null;
		if(workout.isPresent()) {
			w = workout.get();
			workoutRepository.delete(w);
		}
		
	}
}