

var heaName = [];
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {


})

.controller('ChatsCtrl', function($scope,$ionicScrollDelegate) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  /*$scope.chats = Chats.all();
  console.log($scope.chats)*/
  //准备一个数组
  $scope.chats=[
    {imgsrc:"2_85.jpg",id:"0",name:"室内实景图"},
    {imgsrc:"2_378.jpg",id:"1",name:"楼盘实景图"},
    {imgsrc:"21.jpg",id:"2",name:"可观实景图"}
  ];

  $scope.top=function(){
    $ionicScrollDelegate.scrollTop(true);
  };
})

.controller('ChatDetailCtrl', function($scope,$ionicScrollDelegate,$ionicModal,$stateParams) {
  $scope.heaName = heaName;
  $scope.heaId = $stateParams.chatId
  $scope.data=[]

  if($stateParams.chatId==0){
    for(var i=0;i<=29;i++){
      //创建一个对象、
      var l={index:i+1}
      $scope.data.push(l)
    }
  }else if($stateParams.chatId==1){
    for(var i=0;i<20;i++){
      //创建一个对象、
      var l={index:"lou"+(i+1)+""}
      $scope.data.push(l)
    }
  }else if($stateParams.chatId==2){
    for(var i=0;i<28;i++){
      //创建一个对象、
      var l={index:"jing"+(i+1)+""}
      $scope.data.push(l)
    }
  }

  $scope.exampleTop=function(){
    $ionicScrollDelegate.scrollTop(true);
  };
  // 构造模式对话框 - 创建仅服务于当前页面的子页面
  $ionicModal.fromTemplateUrl('views/modal.html', {
    scope: $scope,       // 作用域使用父作用域
    animation: 'slide-in-up'  // 内置了一种动画，其余是自己写的
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//    animation: 'scale-in'
  }).then(function(modal) {
    // 将这个模态对话框保存到一个变量中，方便以后再使用
    $scope.modal = modal;   // 传入的参数model就是构造好的对话框
  });

  $scope.openModal = function(index) {
    $scope.modal.show();        // 打开对话框
    $scope.index = index;
  };

  $scope.closeModal = function() {
    $scope.modal.hide();        // 隐藏对话框(隐藏不是销毁)
  };
})

.controller('AccountCtrl', function($scope,$ionicScrollDelegate) {
  $scope.chats=[
    {imgsrc:"q1.jpg",id:"0",name:"A1户型"},
    {imgsrc:"q2.jpg",id:"1",name:"B1户型"}
  ];
  $scope.top=function(){
    $ionicScrollDelegate.scrollTop(true);
  };
})
    .controller('AccountDetailCtrl', function($scope,$ionicScrollDelegate,$ionicModal,$stateParams) {
      $scope.data=[]

      if($stateParams.chatId==0){
        for(var i=0;i<=29;i++){
          //创建一个对象、
          var l={index:"huxing"+(i+1)+""}
          $scope.data.push(l)
        }
      }else if($stateParams.chatId==1){
        for(var i=0;i<20;i++){
          //创建一个对象、
          var l={index:"huxin"+(i+1)+""}
          $scope.data.push(l)
        }
      }else if($stateParams.chatId==2){
        for(var i=0;i<28;i++){
          //创建一个对象、
          var l={index:"jing"+(i+1)+""}
          $scope.data.push(l)
        }
      }

      $scope.exampleTop=function(){
        $ionicScrollDelegate.scrollTop(true);
      };
      // 构造模式对话框 - 创建仅服务于当前页面的子页面
      $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,       // 作用域使用父作用域
        animation: 'slide-in-up'  // 内置了一种动画，其余是自己写的
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//    animation: 'scale-in'
      }).then(function(modal) {
        // 将这个模态对话框保存到一个变量中，方便以后再使用
        $scope.modal = modal;   // 传入的参数model就是构造好的对话框
      });

      $scope.openModal = function(index) {
        $scope.modal.show();        // 打开对话框
        $scope.index = index;
      };

      $scope.closeModal = function() {
        $scope.modal.hide();        // 隐藏对话框(隐藏不是销毁)
      };
    })

  .controller('ActivityCtrl', function($scope,$ionicScrollDelegate) {

    $scope.chats=[
      {imgsrc:"1411358747.jpg",id:"0",name:"千元礼服 真情回馈",tiem:"2012",content:"1、5.21明星活动嘉宾席门票2张； 2、免费获得香江丽景替先生送给太太的千元定制晚礼服一套； ..."},
      {imgsrc:"1411358506.jpg",id:"1",name:"宝马喊你来丽景免费试驾！",tiem:"2012",content:"‍‍‍‍5月24日-5月25日（本周六、周日）9:00-11..."},
      {imgsrc:"1411359171.jpg",id:"2",name:"营销中心搬家啦！",tiem:"2012",content:"自从营销中心乔迁到现在的礼宾府30#会所，就更火了！"}
    ];
    $scope.top=function(){
      $ionicScrollDelegate.scrollTop(true);
    };
  })
.controller('ActivityDetailCtrl', function($scope,$ionicScrollDelegate,$ionicModal,$stateParams) {
  $scope.data=[]

  if($stateParams.chatId==0){
    for(var i=0;i<=29;i++){
      //创建一个对象、
      var l={index:"lifu"+(i+1)+""}
      $scope.data.push(l)
    }
  }else if($stateParams.chatId==1){
    for(var i=0;i<20;i++){
      //创建一个对象、
      var l={index:"baoma"+(i+1)+""}
      $scope.data.push(l)
    }
  }else if($stateParams.chatId==2){
    for(var i=0;i<28;i++){
      //创建一个对象、
      var l={index:"jing"+(i+1)+""}
      $scope.data.push(l)
    }
  }

  $scope.exampleTop=function(){
    $ionicScrollDelegate.scrollTop(true);
  };
  // 构造模式对话框 - 创建仅服务于当前页面的子页面
  $ionicModal.fromTemplateUrl('views/modal.html', {
    scope: $scope,       // 作用域使用父作用域
    animation: 'slide-in-up'  // 内置了一种动画，其余是自己写的
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//    animation: 'scale-in'
  }).then(function(modal) {
    // 将这个模态对话框保存到一个变量中，方便以后再使用
    $scope.modal = modal;   // 传入的参数model就是构造好的对话框
  });

  $scope.openModal = function(index) {
    $scope.modal.show();        // 打开对话框
    $scope.index = index;
  };

  $scope.closeModal = function() {
    $scope.modal.hide();        // 隐藏对话框(隐藏不是销毁)
  };
});
