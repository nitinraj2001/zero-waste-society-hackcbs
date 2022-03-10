package com.hacknitr.wastemanagement.service.impl;

import com.hacknitr.wastemanagement.model.Industry;
import com.hacknitr.wastemanagement.repository.IndustryRepository;
import com.hacknitr.wastemanagement.sevice.IndustryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndustryServiceImpl implements IndustryService {

    @Autowired
    private IndustryRepository industryRepository;

    @Override
    public Industry registerIndustry(Industry industry) {
        return this.industryRepository.save(industry);
    }

    @Override
    public void deleteIndustry(Long id) {
         this.industryRepository.deleteById(id);
    }

    @Override
    public Industry getIndustryDetails(Long id) {
        return this.industryRepository.findById(id).get();
    }

    @Override
    public List<Industry> getAllIndustries() {
        return this.industryRepository.findAll();
    }
}
