package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.NGO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NGOService {

    public NGO registerNGO(NGO ngo);

    public List<NGO> getAllNGOs();

    public void deleteNGO(Long id);

    public NGO getNGODetails(Long id);


}
