package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.Muncipality;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MuncipalityService {
    public Muncipality registerMuncipality(Muncipality muncipality);
    public List<Muncipality> getAllRegisteredMuncipality();
    public void deleteMuncipality(Long id);
    public Muncipality getMuncipalityDetails(Long id);
}
