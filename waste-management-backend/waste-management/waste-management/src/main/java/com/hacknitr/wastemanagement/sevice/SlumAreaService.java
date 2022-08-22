package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.SlumArea;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SlumAreaService {
    public SlumArea registerSlumArea(SlumArea slumArea);
    public List<SlumArea> getAllSlumAreas();
    public SlumArea getSlumAreaDetails(Long slumAreaId);
    public void deleteSlumArea(Long slumAreaId);
}
