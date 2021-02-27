package com.cap.capspringwebjpa.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cap.capspringwebjpa.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	public Category findByName(String name);
}
