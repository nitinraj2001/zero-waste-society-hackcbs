package com.hacknitr.wastemanagement.service.impl;

import com.hacknitr.wastemanagement.model.Muncipality;
import com.hacknitr.wastemanagement.repository.MuncipalityRepository;
import com.hacknitr.wastemanagement.sevice.MuncipalityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MuncipalityServiceImpl implements MuncipalityService {
    @Autowired
    private MuncipalityRepository muncipalityServiceRepository;

    @Override
    public Muncipality registerMuncipality(Muncipality muncipality) {
        return this.muncipalityServiceRepository.save(muncipality);
    }

    @Override
    public List<Muncipality> getAllRegisteredMuncipality() {
        return this.muncipalityServiceRepository.findAll();
    }

    @Override
    public void deleteMuncipality(Long id) {
        this.muncipalityServiceRepository.deleteById(id);

    }

    @Override
    public Muncipality getMuncipalityDetails(Long id) {
        return this.muncipalityServiceRepository.getById(id);
    }
}
