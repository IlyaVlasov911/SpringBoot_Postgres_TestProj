package com.vlasov.sringboot_postgres_testproj.service;

import com.vlasov.sringboot_postgres_testproj.entity.User;
import com.vlasov.sringboot_postgres_testproj.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User getUser(Integer id) {
        return repository.getReferenceById(id);
    }

    public void saveUser(User user) {
        repository.save(user);
    }

    public void deleteUser(Integer id) {
        repository.deleteById(id);
    }
}
