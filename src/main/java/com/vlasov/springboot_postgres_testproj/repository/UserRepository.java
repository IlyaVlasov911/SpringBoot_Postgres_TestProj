package com.vlasov.springboot_postgres_testproj.repository;

import com.vlasov.springboot_postgres_testproj.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
