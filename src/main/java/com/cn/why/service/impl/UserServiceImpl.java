package com.cn.why.service.impl;


import com.cn.why.mapper.UserDao;
import com.cn.why.pojo.User;
import com.cn.why.result.ResultModel;
import com.cn.why.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service ("UserService")
public class UserServiceImpl implements UserService {
    private final UserDao dao;

    public UserServiceImpl(UserDao dao) {
        this.dao = dao;
    }

    @Override
    public ResultModel login (User user) {
        String msg;
        User i= dao.findByUsernameAndPassword (user);
        if (i==null){
            msg="error";
        }else{
            msg="success";
        }
        return ResultModel.getModel (msg);
    }

    @Override
    public ResultModel findAll (User user) {
        List<User> users= dao.findAll(user);
        return ResultModel.getModel(users);
    }

    @Override
    public ResultModel del (User user) {
        int count = dao.del (user);
        return ResultModel.getModel (count);
    }

    @Override
    public ResultModel add (User user) {
        int count = dao.add (user);
        return ResultModel.getModel (count);
    }

    @Override
    public ResultModel findById (User user) {
        User model = dao.findById (user);
        return ResultModel.getModel (model);
    }

    @Override
    public ResultModel update (User user) {
        int count = dao.update (user);
        return ResultModel.getModel (count);
    }

    @Override
    public ResultModel getCount (User user) {
        int count = dao.getCount (user);
        return ResultModel.getModel (count);
    }

    @Override
    public ResultModel enable (User User) {
        int i = dao.enable (User);
        return ResultModel.getModel (i);
    }

    @Override
    public ResultModel addText (User user) {
        return ResultModel.getModel (dao.addText (user));
    }
}
