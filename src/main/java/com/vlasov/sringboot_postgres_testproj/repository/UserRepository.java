package com.vlasov.sringboot_postgres_testproj.repository;

import com.vlasov.sringboot_postgres_testproj.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
