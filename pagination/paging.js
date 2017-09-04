$(function(){

	$.ajax({
		type:"GET",
		url:"http://rapapi.org/mockjsdata/14169/geek",
		data: {
				//
			  },
		dataType:'jsonp',
 		success:function(data){
 			var length = data.list.length;
			// length = 15;  //根据后台数据长度测试	  

			for(var i=1; i<length+1; i++){  //根据后台数据长度动态添加li标签
				var $li = $('<li>'+ i +'</li>');
				$('ul').append($li);
				if(i > 4){
					break;
				}
			}

			$("li:eq(0)").addClass("active"); 
			$('#content').html( data.list[0] );

			var pre = $('.active').text();  //隐藏“上一页”
			if( pre == 1 ){
				$('.pre').hide();
			}
 
 			$('.next').click(function(){   //点击“下一页”跳转				 
 				var index = parseInt( $('.active').index() );
 				var value = parseInt( $('.active').text() );
 				var clickNext = parseInt( $('.active').text() ) ;
				$('#content').html( data.list[clickNext] );
				if( value == length -1 ){  //高亮为最后一个数字隐藏“下一页”
					$('.next').hide();
				}
				else{
					$('.next').show();
					$('.pre').show();
				}				
				if(value > 2 && value < length - 2){					 
					$('li:eq(0)').text( parseInt( $('li:eq(0)').text() ) + 1 );
					$('li:eq(1)').text( parseInt( $('li:eq(1)').text() ) + 1 );
					$('li:eq(2)').text( parseInt( $('li:eq(2)').text() ) + 1 );
					$('li:eq(3)').text( parseInt( $('li:eq(3)').text() ) + 1 );
					$('li:eq(4)').text( parseInt( $('li:eq(4)').text() ) + 1 );
					$('li:eq(2)').addClass("active").siblings().removeClass("active");					
				}
				else if( index == 4 && value == 9 ){
					$('li:eq(0)').text( parseInt( $('li:eq(0)').text() ) + 1 );
					$('li:eq(1)').text( parseInt( $('li:eq(1)').text() ) + 1 );
					$('li:eq(2)').text( parseInt( $('li:eq(2)').text() ) + 1 );
					$('li:eq(3)').text( parseInt( $('li:eq(3)').text() ) + 1 );
					$('li:eq(4)').text( parseInt( $('li:eq(4)').text() ) + 1 );
					$('li:eq(4)').addClass("active").siblings().removeClass("active");
				}
				else{
					$('.active').next().addClass("active").siblings().removeClass("active");					 
				}
			});
			 
			$('li').click(function(){  // 点击li标签跳转					 
				var value = parseInt( $('.active').text() );
				var click = parseInt( $('li').index(this) );
				var clickNow = parseInt( $(this).text() ) - 1;
				var clickLi = parseInt( $(this).text() );
				$('#content').html( data.list[clickNow] );	  
				now = $(this).text();
				if( clickLi == length){ //点击最后一个数字隐藏“下一页”
					$('.next').hide();
				}
				else{
					$('.next').show();
					 
				}
				if( clickLi == 1 ){   //点击1隐藏“上一页”
					$('.pre').hide();
				}
				else{
					$('.pre').show();				 
				}
				
				if( now > 2 && now < length -1 ){	
					$('li:eq(2)').addClass("active").siblings().removeClass("active");
					$('li:eq(2)').text( $(this).text() );
					$('li:eq(0)').text( parseInt( now ) - 2 );
					$('li:eq(1)').text( parseInt( now ) - 1 );
					$('li:eq(3)').text( parseInt( now ) + 1 );
					$('li:eq(4)').text( parseInt( now ) + 2 );
			    }
			    else{
				    $(this).addClass("active").siblings().removeClass("active");
				    $('#content').html( data.list[clickNow] );
			    }
			});

			$('.pre').click(function(){  //点击“上一页”跳转				 
				var index = parseInt( $('.active').index() );
				var value = parseInt( $('.active').text() );
				var clickPre = parseInt( $('.active').text() ) - 2;	
				$('#content').html( data.list[clickPre] );
				if( value == 2 ){  //高亮为1隐藏“上一页”
					$('.pre').hide();
				}
				else{
					$('.pre').show();
					$('.next').show();
				}
					
				if(value > 3 && value < length - 1){					 
					$('li:eq(0)').text( parseInt( $('li:eq(0)').text() ) - 1 );
					$('li:eq(1)').text( parseInt( $('li:eq(1)').text() ) - 1 );
					$('li:eq(2)').text( parseInt( $('li:eq(2)').text() ) - 1 );
					$('li:eq(3)').text( parseInt( $('li:eq(3)').text() ) - 1 );
					$('li:eq(4)').text( parseInt( $('li:eq(4)').text() ) - 1 );
					$('li:ea(2)').addClass("active").siblings().removeClass("active");
					$('#content').html( data.list[clickPre] );				
				}
				else if( index == 0 && value == 2 ){
					$('li:eq(0)').text( parseInt( $('li:eq(0)').text() ) - 1 );
					$('li:eq(1)').text( parseInt( $('li:eq(1)').text() ) - 1 );
					$('li:eq(2)').text( parseInt( $('li:eq(2)').text() ) - 1 );
					$('li:eq(3)').text( parseInt( $('li:eq(3)').text() ) - 1 );
					$('li:eq(4)').text( parseInt( $('li:eq(4)').text() ) - 1 );
					$('li:ea(2)').addClass("active").siblings().removeClass("active");
					$('#content').html( data.list[clickPre] );
				}
				else{
					$('.active').prev().addClass("active").siblings().removeClass("active");
					$('#content').html( data.list[clickPre] );
				}
			});			 
		},
		error:function(){
			alert('请求失败');
		}
	});
})