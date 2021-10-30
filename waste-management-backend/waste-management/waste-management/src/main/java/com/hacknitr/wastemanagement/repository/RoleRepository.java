package com.hacknitr.wastemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hacknitr.wastemanagement.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
