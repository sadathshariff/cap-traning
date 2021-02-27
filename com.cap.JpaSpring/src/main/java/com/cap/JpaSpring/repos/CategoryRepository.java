package com.cap.JpaSpring.repos;

import java.util.List;
import java.util.Locale.Category;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

@Repository
public class CategoryRepository {

	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public void addCategory(Category category) {
		em.persist(category);
	}
	
	public List<Category> findCategoryByName(String categoryName) {	
		TypedQuery<Category> query = em.createQuery("select c from Category c where c.name=:name", Category.class);
		query.setParameter("name", categoryName);
		return query.getResultList();
	}

	// delete a specific workout but .. do not delete the category itself
	@Transactional
	public void deleteCategory(int i) {
		Category c = em.find(Category.class, i);
		em.remove(c);
		
	}
	
	@Transactional
	public void updateCategory(int i, String name) {	
		Category c = em.find(Category.class, i);
		c.setName(name);
		
	}
	
	@Transactional
	public Category findCategory(int i) {	
		Category c = em.find(Category.class, i);
		return c;
	} 
	
}
