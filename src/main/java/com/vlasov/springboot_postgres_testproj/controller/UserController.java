package com.vlasov.springboot_postgres_testproj.controller;

import com.vlasov.springboot_postgres_testproj.entity.User;
import com.vlasov.springboot_postgres_testproj.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }
    @GetMapping()
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable(name = "id") Integer id) {
        return service.getUser(id);
    }

    @PostMapping()
    public User saveUser(@RequestBody User user) {
        service.saveUser(user);
        return user;
    }

    @PutMapping()
    public User updateUser(@RequestBody User user) {
        service.saveUser(user);
        return user;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable(name = "id") Integer id) {
        service.deleteUser(id);
    }
}
