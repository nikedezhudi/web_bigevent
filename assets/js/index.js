function getUserInfo(){
    $.ajax({
        type:"GET",
        url:"/my/userinfo",
        // headers:{
        //     Authorization: localStorage.getItem("token"),
        // },
        success:(res) => {
           if(res.status !== 0) return layer.msg("获取用户信息失败！")
           layer.msg("获取用户信息成功！")
           renderAvatar(res.data);
        }
    })
}

//渲染用户信息
const renderAvatar=(user) => {
    console.log(user);
    let uname = user.nickname || user.username;
    console.log(uname);
    //渲染欢迎语
    $('#welcome').html(`欢迎${uname}`);
    //按需渲染头像
    if(user.user_pic !== null){
        //设置图片头像
        $('.layui-nav-img').attr("src", user.user_pic);
        $(".text-avatar").hide();
    } else {
        //设置文本头像
        $(".layui-nav-img").hide();
        $(".text-avatar").html(uname[0].to);
    }
}

//退出功能
$('#btnLogout').click(() => {
    layer.confirm("是否退出？",{ icon: 3, title: "提示" },function(index){
        // 清空本地存储里面的 token
        localStorage.removeItem("token");
        // 重新跳转到登录页面
        location.href = "/login.html";
    })
})

getUserInfo()

function change(){
    $('#change').attr('class','layui-this').next().attr('class','')
}