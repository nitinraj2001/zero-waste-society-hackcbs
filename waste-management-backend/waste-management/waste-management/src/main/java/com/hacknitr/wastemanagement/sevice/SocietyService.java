package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.Category;
import com.hacknitr.wastemanagement.model.Society;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SocietyService {

    public List<Society> allSocieties();

    public  void deleteSociety(Long id);

    public Society viewSociety(Long id);

    public Society createSociety(Society society);
}
