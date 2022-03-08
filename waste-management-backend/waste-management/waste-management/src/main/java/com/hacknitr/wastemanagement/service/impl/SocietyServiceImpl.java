package com.hacknitr.wastemanagement.service.impl;

import com.hacknitr.wastemanagement.model.Society;
import com.hacknitr.wastemanagement.repository.SocietyRepository;
import com.hacknitr.wastemanagement.sevice.SocietyService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SocietyServiceImpl implements SocietyService {

    @Autowired
    private SocietyRepository societyRepository;

    @Override
    public List<Society> allSocieties() {
        return this.societyRepository.findAll();
    }

    @Override
    public void deleteSociety(Long id) {
       this.societyRepository.deleteById(id);
    }

    @Override
    public Society viewSociety(Long id) {
        return this.societyRepository.findById(id).get();
    }

    @Override
    public Society createSociety(Society society) {
        return this.societyRepository.save(society);
    }
}
