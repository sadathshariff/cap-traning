package com.cap.capspringwebjpa.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cap.capspringwebjpa.entities.Category;
import com.cap.capspringwebjpa.repos.CategoryRepository;

@RestController
public class CategoryController {
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@PostMapping("/category")
	public ResponseEntity<Void> addCategory(@RequestBody Category c) {
		ResponseEntity<Void>  re;
		
		Category category = categoryRepository.findByName(c.getName());
		if(category==null) {
			categoryRepository.save(c);	
			re = new ResponseEntity<>(HttpStatus.CREATED);
		}
		else {
			re = new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		return re;
	}
	
	@RequestMapping(value="/category" , method = RequestMethod.GET)
	public List<Category> findAllCategory(){
		return categoryRepository.findAll();
	}
	
	@RequestMapping(value="/category/{name}" , method = RequestMethod.GET)
	public Category findCategoryByName(@PathVariable("name") String name) {
		Category  e = categoryRepository.findByName(name);
		return e;
	}
	
	@DeleteMapping("/category/{id}")
	public void deleteCategoryById(@PathVariable("id") int id) {
		Optional<Category> category = categoryRepository.findById(id);
		Category c = null;
		if(category.isPresent()) {
			c = category.get();
			categoryRepository.delete(c);
		}
		
	}
//	@DeleteMapping("/user/{name}")
//	public void deleteCategoryByName(@PathVariable("name") String name) {
//		Optional<Category> category = categoryRepository.findByName(name);
//		Category c = null;
//		if(category.isPresent()) {
//			c = category.get();
//			categoryRepository.delete(c);
//		}
//		
//	}
	

}
