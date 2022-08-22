package com.hacknitr.wastemanagement.service.impl;

import com.hacknitr.wastemanagement.model.SlumArea;
import com.hacknitr.wastemanagement.repository.SlumAreaRepository;
import com.hacknitr.wastemanagement.sevice.SlumAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SlumAreaServiceImpl implements SlumAreaService {

    @Autowired
    private SlumAreaRepository slumAreaRepository;

    @Override
    public SlumArea registerSlumArea(SlumArea slumArea) {
        return this.slumAreaRepository.save(slumArea);
    }

    @Override
    public List<SlumArea> getAllSlumAreas() {
        return this.slumAreaRepository.findAll();
    }

    @Override
    public SlumArea getSlumAreaDetails(Long slumAreaId) {
        return this.slumAreaRepository.findById(slumAreaId).get();
    }

    @Override
    public void deleteSlumArea(Long slumAreaId) {
        this.slumAreaRepository.deleteById(slumAreaId);

    }
}
