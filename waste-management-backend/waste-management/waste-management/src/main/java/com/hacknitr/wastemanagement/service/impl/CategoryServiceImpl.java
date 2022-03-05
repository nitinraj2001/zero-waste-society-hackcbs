package com.hacknitr.wastemanagement.service.impl;

import com.hacknitr.wastemanagement.model.Category;
import com.hacknitr.wastemanagement.repository.CategoryRepository;
import com.hacknitr.wastemanagement.sevice.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> allCategories() {
        return this.categoryRepository.findAll();
    }

    @Override
    public void deleteCategory(Long id) {
        this.categoryRepository.deleteById(id);
    }

    @Override
    public Category viewCategory(Long id) {
        return this.categoryRepository.findById(id).get();
    }

    @Override
    public Category createCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.categoryRepository.save(category);
    }
}
