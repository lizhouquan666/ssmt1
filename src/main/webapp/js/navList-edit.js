layui.use(['form', 'upload','layer', 'jquery'],
    function () {
        $ = layui.jquery;
        var form = layui.form
            , layer = layui.layer
            ,upload = layui.upload;

        //监听提交
        form.on('submit(edit)',
            function (data) {
                data = data.field;
                data.id=sessionStorage.getItem("navId");

                let res = myAjax("/nav/update", data);
                if (res != undefined && res.count == 1) {
                    layer.alert("更新成功", {
                            icon: 6
                        },
                        function () {
                            //关闭当前frame

                            xadmin.close();

                            // 可以对父窗口进行刷新
                            xadmin.father_reload();

                        });
                } else {
                    layer.alert("更新失败");
                }

                return false;
            });

    });
$(function () {
    let id = sessionStorage.getItem("navId");
    let res = myAjax("/nav/findNavById", {navId: id}, 'get');
//   将查询出来的数据进行赋值填充
    setData(res.data);
});

//赋值
function setData(data) {
    console.log(data);
    $("#infName").val(data.infName);
    $("#infValue").val(data.infValue);
    $("#infLink").val(data.infLink);
    $('input:radio[name=enable][value=' + data.enable + ']').attr("checked", true);
    layui.form.render();

}
