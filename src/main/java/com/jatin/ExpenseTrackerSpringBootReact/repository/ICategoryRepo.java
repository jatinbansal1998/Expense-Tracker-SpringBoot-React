package com.jatin.ExpenseTrackerSpringBootReact.repository;

import com.jatin.ExpenseTrackerSpringBootReact.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ICategoryRepo extends JpaRepository<Category, Long> {
}
