package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {

    public List<Category> allCategories();

    public  void deleteCategory(Long id);

    public Category viewCategory(Long id);

    public Category getCategoryDetails(String categoryName);

    public Category createCategory(Category category);

    public Category updateCategory(Category category);
}
