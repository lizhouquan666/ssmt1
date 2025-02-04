layui.use(['form', 'layer', 'jquery', 'laydate'],
    function () {
        $ = layui.jquery;
        var form = layui.form,
            layer = layui.layer
            , laydate = layui.laydate;
        //日期
        laydate.render({
            elem: '#birthday',
            trigger: 'click'
        });
        //自定义验证规则
        form.verify({
            username: [/[a-zA-Z]\w{5,15}/, "以字母开头的后面跟5到15个字母，数字，下划线"],
            password: [/(.+){6,12}$/, '密码必须6到12位'],
            repass: function (value) {
                if ($('#L_pass').val() != $('#L_repass').val()) {
                    return '两次密码不一致';
                }
            }
        });

        //监听提交
        form.on('submit(add)',
            function (data) {
                data = data.field;

                let arr=[];
                $('input:checkbox[name=hobby]:checked').each(function() {
                     arr.push($(this).attr("title")) ;
                });
                data.hobby =arr.toLocaleString();

                let res = myAjax("/user/add", data);

                if (res != undefined && res.count == 1) {
                    layer.alert("增加成功", {
                            icon: 6
                        },
                        function () {
                            //关闭当前frame

                            xadmin.close();

                            // 可以对父窗口进行刷新
                            xadmin.father_reload();

                        });
                } else {
                    layer.alert("增加失败");
                }

                return false;
            });

    });