$(function () {
const sideBar = document.getElementsByClassName("side-bar-menu")[0];
const headerBar = document.getElementById("mai-navigation");
const footerBar = document.getElementById("footer-container");

$(document).ready(function() {

  $('.state-reset').click(function(){
    $('input:checkbox').removeAttr('checked');
    var val = { state:'',city:'',profile:'' };
    var url = '/get_checkbox_value_careers';
    var type = 'POST';
    CgetLatestLocationCreers(url,type,val);
  });

  $('.city-reset').click(function(){
    $('input:checkbox').removeAttr('checked');
    var val = { state:'',city:'',profile:'' };
    var url = '/get_checkbox_value_careers';
    var type = 'POST';
    CgetLatestLocationCreers(url,type,val);
  });

  $('.profile-reset').click(function(){
    $('input:checkbox').removeAttr('checked');
    var val = { state:'',city:'',profile:'' };
    var url = '/get_checkbox_value_careers';
    var type = 'POST';
    CgetLatestLocationCreers(url,type,val);
  });
  
  $(".statusClasss").click(function(e) {
    var stats = [];
    $('input.statusClasss:checkbox:checked').each(function () {
      stats.push($(this).val());
    });
    var cites = [];
    $('input.cityClasss:checkbox:checked').each(function () {
      cites.push($(this).val());
    });
    var profiles = [];
    $('input.profileClasss:checkbox:checked').each(function () {
      profiles.push($(this).val());
    });
    
    var val = { state:stats,city:cites,profile:profiles };
    var url = '/get_checkbox_value_careers';
    var type = 'POST';
    CgetLatestLocationCreers(url,type,val);


  });

  $(".cityClasss").click(function(e) {
    var stats = [];
    $('input.statusClasss:checkbox:checked').each(function () {
      stats.push($(this).val());
    });
    var cites = [];
    $('input.cityClasss:checkbox:checked').each(function () {
      cites.push($(this).val());
    });
    var profiles = [];
    $('input.profileClasss:checkbox:checked').each(function () {
      profiles.push($(this).val());
    });
    var val = { state:stats,city:cites,profile:profiles };
    var url = '/get_checkbox_value_careers';
    var type = 'POST';
    CgetLatestLocationCreers(url,type,val);
  });

  $(".profileClasss").click(function(e) {
    var stats = [];
    $('input.statusClasss:checkbox:checked').each(function () {
      stats.push($(this).val());
    });
    var cites = [];
    $('input.cityClasss:checkbox:checked').each(function () {
      cites.push($(this).val());
    });
    var profiles = [];
    $('input.profileClasss:checkbox:checked').each(function () {
      profiles.push($(this).val());
    });
    var val = { state:stats,city:cites,profile:profiles };
    var url = '/get_checkbox_value_careers';
    var type = 'POST';
    CgetLatestLocationCreers(url,type,val);
  });
  
    $('#subbtn').click(function(){
       var url = 'subscriber';
       var type = 'POST';
       var val = {email:$('#subscribe').val()};
       callAjax(url,type,val)
          .then(function(response) {
              if(response.status == true) {
                $('.msg').removeClass('text-success text-danger');
                $('.msg').html('');
                $('.msg').html(response.msg);
                $('.msg').addClass('text-success');
              }else {
                $('.msg').html(response.msg);
                $('.msg').addClass('text-danger');
              }
              
          });
    });


});
 



function CgetLatestLocationCreers (url,type,val) {
        var data=[];
        callAjax(url,type,val)
        .then(function(response) {
            $('.careersLists').html('');
            if(response.data.length >= 1) {
                $.each(response.data, function(index, value){
                data += '<div class="job-detail"><div class="p-5"><h3>'+value.profile_name+'</h3><p>'+value.contant+'</p></div><a href="/careers-apply?state_id='+value.state_id+'&city_id='+value.city_id+'&profile_id='+value.profile_id+'">Apply Now</a></div>';
                });
                $('.careersLists').append(data);
            }else {
                $('.careersLists').html('<li style="display:block !important"><div class="text-center text-danger">No Records Found!</div></li>');
               
            }
            
        }) ;
    }
$(document).on("click", "#getback", function(e){ 
var hash = window.location.hash;
$()
});

$(document).on("click", "#getId", function(e){ 
      var id = hash.split("-");

      var gender = '';
      if(id[1] == 'men') {
        gender = 'men_services';
      }else{
        gender = 'womens_services';
      }

      if(id != ''){
        $('.default-filter').addClass('d-none');
        $('.image-data').addClass('d-none');
      var val = { id:id,type:$(this).data('type'),sub_cat_name:$(this).data('title'), gender:gender };
      var url = '/admin/get_subcat_data';
      var type = 'POST';
      var data = [];
        var imagedata = [];
        callAjax(url,type,val)
        .then(function(response) {
            $('.add_data').html('');
            $('.image-data').html('');
            if(response.data.length >= 1) {

                
                $.each(response.data, function(index, value){
                  //<p class="price">₹ '+value.content_price+'*</p>
                  if(value.sub_title == null ) {

                    data += '<div class="skin-inner-table__row"><div class="tbl-td"><p>'+value.content_title+'</p></div><div class="tbl-td"><p>'+value.content_des+'</p></div><div class="tbl-td"><a href="'+value.url+'" class="button-secondary" title="'+value.content_title+'" target="_blank">Book Now</a></div></div>';
                    $('.add_data').html('');
                  
                    //$('.add_data').html('<a class="button-secondary" href="/all-services#'+window.location.hash+'" class="link-dark rounded active" data-type="5" data-show-target="skin-care-t" id="">Back</a>').append(data);
                    $('.add_data').append(data);
                    
                  }else{ 
                    imagedata += '<div class="service-item"><a href="javascript:void(0)" class="getid" id="getId" data-type="dataonly" data-title="'+value.sub_title+'"><img src="'+value.image+'" alt=""><div class="bottom-service-name"><span>'+value.sub_title+'</span></div></a></div>';  
                      $('.image-data').html('');
                       $('.image-data').append(imagedata);              
                  }
              
                });
                
                
            }else {
                $('.add_data').html('<li style="display:block !important"><div class="text-center text-danger">No Data Founds!</div></li>');
            }
            
        }) ;
      }
 });

    var hash = window.location.hash;
      var id = hash.split("-").pop();

      if(id != ''){
        $('.default-filter').addClass('d-none');
        $('.image-data').removeClass('d-none');
        var val = { id:id,type:'' };
      var url = '/admin/get_subcat_data';
      var type = 'POST';
      var data = [];
        var imagedata = [];
        callAjax(url,type,val)
        .then(function(response) {
            $('.add_data').html('');
            $('.image-data').html('');
            if(response.data.length >= 1) {
                $.each(response.data, function(index, value){
                  //<p class="price">₹ '+value.content_price+'*</p>
                  if(value.sub_title == null ) {
                    data += '<div class="skin-inner-table__row"><div class="tbl-td"><p>'+value.content_title+'</p></div><div class="tbl-td"><p>'+value.content_des+'</p></div><div class="tbl-td"><a href="'+value.url+'" class="button-secondary" title="'+value.content_title+'" target="_blank">Book Now</a></div></div>';
                    $('.add_data').html('');
                    //$('.add_data').html('<a class="button-secondary" href="/all-services#'+window.location.hash+'" class="link-dark rounded active" data-type="5" data-show-target="skin-care-t" id="">Back</a>').append(data);
                    $('.add_data').append(data);
                  }else{
                    imagedata += '<div class="service-item"><a href="javascript:void(0)" class="getid" id="getId" data-type="dataonly" data-title="'+value.sub_title+'"><img src="'+value.image+'" alt=""><div class="bottom-service-name"><span>'+value.sub_title+'</span></div></a></div>';  
                      $('.image-data').html('');
                       $('.image-data').append(imagedata);              
                  }
              
                });
                
                
            }else {
                $('.add_data').html('<li style="display:block !important"><div class="text-center text-danger">No Data Founds!</div></li>');
            }
            
        }) ;
      }
      


$(window).on('hashchange',function(){ 

      $('.default-filter').addClass('d-none');
      $('.image-data').removeClass('d-none');

      var hash = window.location.hash;
      var id = hash.split("-").pop();
      var val = { id:id,type:'' };
      var url = '/admin/get_subcat_data';
      var type = 'POST';
      var data = [];
      var imagedata = [];
        callAjax(url,type,val)
        .then(function(response) {
            $('.add_data').html('');
            $('.image-data').html('');
            if(response.data.length >= 1) {
                $.each(response.data, function(index, value){
                  //<p class="price">₹ '+value.content_price+'*</p>
                if(value.sub_title == null ) {
                    data += '<div class="skin-inner-table__row"><div class="tbl-td"><p>'+value.content_title+'</p></div><div class="tbl-td"><p>'+value.content_des+'</p></div><div class="tbl-td"><a href="'+value.url+'" class="button-secondary" title="'+value.content_title+'" target="_blank">Book Now</a></div></div>';
                    $('.add_data').html(''); 
                     $('.add_data').append(data);
                  }else{
                    imagedata += '<div class="service-item"><a href="javascript:void(0)" class="getid" id="getId" data-type="dataonly" data-title="'+value.sub_title+'"><img src="'+value.image+'" alt=""><div class="bottom-service-name"><span>'+value.sub_title+'</span></div></a></div>';
                    $('.image-data').html('');  
                      $('.image-data').append(imagedata);   
                  }
                });
            }else {
                $('.add_data').html('<li style="display:block !important"><div class="text-center text-danger">No Data Founds!</div></li>');
            }
        }) ;
     });

    /*//skin code here
    $('#body-care').addClass('d-none');
    $('#skin-care-t').addClass('d-none');
    $('#skin1').addClass('d-none');
    $('#basics').addClass('d-none');
    $('#depilation').addClass('d-none');
    if(location.hash.slice(1) == 'body-care' ) {
        $('#body-care').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'skin') {
        $('#skin1').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'basics') {
        $('#basics').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'depilation') {
        $('#depilation').removeClass('d-none');
    }

    //here code here
    $('#hairform').addClass('d-none');
    $('#hair-care').addClass('d-none');
    $('#colors').addClass('d-none');
    $('#styling').addClass('d-none');
    $('#haircut').addClass('d-none');
    $('#hair-all-services').addClass('d-none');
    if(location.hash.slice(1) == 'hair-care' ) {
        $('#hair-care').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'colors') {
        $('#colors').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'styling') {
        $('#styling').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'haircut') {
        $('#haircut').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'hair-all-services') {
        $('#hair-all-services').removeClass('d-none');
    }
    //makeup code here
    $('#mstyling').addClass('d-none');
    $('#msreedrape').addClass('d-none');
    $('#mmakeup').addClass('d-none');
    $('#hair-makeup-services').addClass('d-none');
    if(location.hash.slice(1) == 'msreedrape' ) {
        $('#msreedrape').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'msreedrape') {
        $('#msreedrape').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'mmakeup') {
        $('#mmakeup').removeClass('d-none');
    }

    else if(location.hash.slice(1) == 'hair-makeup-services') {
        $('#hair-makeup-services').removeClass('d-none');
    }


    //hand feet code here
    $('#hf').addClass('d-none');
    $('#hffeet-care').addClass('d-none');
    $('#hfnails').addClass('d-none');
    $('#all-hand-feet-services').addClass('d-none');
    if(location.hash.slice(1) == 'hffeet-care' ) {
        $('#hffeet-care').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'hfnails') {
        $('#hfnails').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'hfnails') {
        $('#hfnails').removeClass('d-none');
    }

    else if(location.hash.slice(1) == 'all-hand-feet-services') {
        $('#all-hand-feet-services').removeClass('d-none');
    }

    //service men code here
    $('#smskin').addClass('d-none');
    $('#smhair').addClass('d-none');
    $('#smmakeup').addClass('d-none');
    $('#all-hand-feet-services').addClass('d-none');
    if(location.hash.slice(1) == 'smhair' ) {
        $('#smhair').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'smmakeup') {
        $('#smmakeup').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'sm-hands-feet') {
        $('#sm-hands-feet').removeClass('d-none');
    }

    //service men code here
    $('#smskin').addClass('d-none');
    $('#smhair').addClass('d-none');
    $('#smmakeup').addClass('d-none');
    $('#all-hand-feet-services').addClass('d-none');
    if(location.hash.slice(1) == 'smhair' ) {
        $('#smhair').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'smmakeup') {
        $('#smmakeup').removeClass('d-none');
    }
    else if(location.hash.slice(1) == 'sm-hands-feet') {
        $('#sm-hands-feet').removeClass('d-none');
    }*/


//-----------Sidebar Include--------------//

if(sideBar){

    //code for sidebar button

    const serviceLinks = document.querySelectorAll('.side-menu .mb-1 a');
    const serviceSubLinks = document.querySelectorAll('.btn-toggle-nav li a');

    
    //console.log(serviceLinks);
    for(sLink of serviceLinks){
        const currentURL = window.location.pathname;
        //console.log(currentURL);
        const urlArray = currentURL.substring(currentURL.lastIndexOf('/')+1);
        const urlIndex = urlArray.indexOf('.');
        const getIDfromURL = urlArray.slice(0,urlIndex);  
        const element = document.getElementById(getIDfromURL);
        
        const collapseDiv = document.querySelectorAll('.collapse.show');

          if(element){
            element.classList.add('active');
            const currentCollapse = element.parentNode.parentNode.parentNode.parentNode.querySelector('.collapse');
            
          }
          
          if(getIDfromURL === 'skin' || getIDfromURL === 'skin-care-treatments'){
            $('#skin2').slideDown();
          }

          const isMenuOpen = {};

        //Code for Toggle Button
          sLink.addEventListener('click', function(e){
            const targetId = e.target.getAttribute('data-collapsed-target');
              if(targetId){
                if(!isMenuOpen[targetId]){
                  $(`#${targetId}`).slideDown();
                 // e.preventDefault();
                  isMenuOpen[targetId]=true;
                }
                else{
                  $(`#${targetId}`).slideDown();
                }
                
              }
            });
      }

//Code for Sub Toggle Button
    for(sbLink of serviceSubLinks){
      sbLink.addEventListener('click', function(ev){
        const activeClass = document.querySelectorAll('.btn-toggle-nav li a.active');
        for(activeLink of activeClass){
          activeLink.classList.remove("active");
        }
        if(ev.target.classList.contains('active')){
           ev.target.classList.remove('active');
        }
        else{
          ev.target.classList.add('active');
        }

            // const isMenuOpenSub = {};

            // const targetIdSubLink = ev.target.getAttribute('data-show-target');
            //   if(targetIdSubLink){
            //     if(!isMenuOpenSub[targetIdSubLink]){

            //       $(`#${targetIdSubLink}`).slideDown();
            //       // ev.preventDefault();
            //       isMenuOpenSub[targetIdSubLink]=true;
            //     }
            //     else{
            //       $(`#${targetIdSubLink}`).slideUp();
            //     }
                
            //   }

      })
    }
}

function getDataList(url,type,val) {
  var data = [];
        callAjax(url,type,val)
        .then(function(response) {
            $('.add_data').html('');
            if(response.data.length >= 1) {
                $.each(response.data, function(index, value){
                data += '<div class="skin-inner-table__row"><div class="tbl-td"><p>'+value.content_title+'</p></div><div class="tbl-td"><p>'+value.content_des+'</p></div><div class="tbl-td"><p class="price">₹ '+value.content_price+'*</p><a href="#" class="button-secondary" title="'+value.content_title+'">Book Now</a></div></div>';
                });
                $('.add_data').append(data);
            }else {
                $('.add_data').html('<li style="display:block !important"><div class="text-center text-danger">No Data Founds!</div></li>');
               
            }
            
        }) ;
}

//ajax function 
//On change get State in consumer case
    $('#city').on('change', function() {
        var val = { state_id:$('#state').val(),city_id:$('#city').val() };   //city changed
        console.log("val "+val.city_id);
        var url = '/get_salon_locator';
        var type = 'POST';
        LocatorList(url,type,val);
    });
    
    $('#state').on('change', function() {
        var val = { state_id:$('#state').val(),city_id:''};
        var url = '/get_salon_locator';
        var type = 'POST';
        LocatorList(url,type,val);
        
    });

     $('#state_id').on('change', function() {
        var val = { state_id:$('#state_id').val(),city_id:''};
        var url = '/get_salon_locator';
        var type = 'POST';
        LocatorList(url,type,val);
        
    });

    function LocatorList (url,type,val) {
        var data=[];
        var cities=[];
        callAjax(url,type,val)
        .then(function(response) {
          // alert("response "+response.city);
            $('.salon_listing').html('');
             $('.citys').html('');

            if(response.city.length >= 1) {
              // console.log("line : "+response.city.length);
              cities = '<option value="" disabled selected>All</option>';
              $.each(response.city, function(index, value){
               if(val.city_id != ""){
                if(val.city_id == value.id){
                  cities += '<option value="'+value.id+'" selected >'+value.title+'</option>';
                } else {
                  cities += '<option value="'+value.id+'" >'+value.title+'</option>';
                }
               } else {
                
                cities += '<option value="'+value.id+'" >'+value.title+'</option>';
               }
                
               
                // if(val.city_id != "" && (val.city_id == value.id)){
                //   // console.log("check " + val.city_id);
                //   cities += '<option value="'+val.city_id+'" selected>'+value.title+'</option>';
                //   return false; 
                // } 

            });
            // console.log(cities);
              $('.citys').html( '<option value="" disabled selected>All</option>' ).append(cities);
              $('.citys').html(cities);
          } 

            if(response.states.length >= 1) {
                $.each(response.states, function(index, value){
                  var number = '';
                  if(value.number != null) {
                    number = '<br><p>Phone Number: ' + value.number + '</p>';
                  }
                data += '<li style="display:block !important"><div class="row justify-content-between align-items-center"><div class="col"><label class="city-name">'+value.title+'</label></div><div class="col-9 col-sm-full"><div class="row justify-content-evenly align-items-center p-10"><div class="col-9"><p>'+value.des + number +' </p></div><div class="col text-center"><a target="_blank" href="http://maps.google.com/maps?q='+value.lat+','+value.lon+'" class="locate-ico"><img src="assets/images/icon.png.rendition.1960.1960.png" alt=""></a></div></div></div></div></li>';
                });
                $('.salon_listing').append(data);
            }else {
                $('.salon_listing').html('<li style="display:block !important"><div class="text-center text-danger">No Stores Exits for the given the location. Search for other nearest location</div></li>');
               
            }
            
        }) ;
    }
//Ajax function
    function callAjax(url,type,data) {
      var defer = $.Deferred(); 
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });
      $.ajax({
          async: false,
          url:url,
          type:type,
          dataType: 'JSON',
          data:data,
          success:function(success){
            defer.resolve(success) 
          }
      });
      return defer.promise();
    }

});

$(window).load(function(){
   $('#navbarResponsive .nav-item > a').on('click',function(){
      $(this).parent('.nav-item').addClass('active')
   })
   $('a.menu-cat').on('click',function(){
      $('.mega-menu').addClass('im-open');
      $(this).closest('div').addClass('active');
   })
   $('.mega-menu div > a.back').click(function(){
      $(this).parent('div').removeClass('active')
      $('.mega-menu').removeClass('im-open')
   })
   $('.mega-menu a.back.first').click(function(){
      $(this).closest('.nav-item').removeClass('active')
      $('.mega-menu').removeClass('im-open');
      $('.menu-cat').parent('div').removeClass('active')
   })
   $('.navbar-toggler').click(function(){
      if($(this).hasClass('collapsed')){
         $('.right-menu').removeClass('stick-bottom')
      }else{
         setTimeout(function(){$('.right-menu').addClass('stick-bottom')},300)
      }
      $('#navbarResponsive .nav-item').removeClass('active')
      $('.mega-menu').removeClass('im-open');
      $('.menu-cat,.back').parent('active').removeClass('active')   
   })
})

$('.home-slider').slick({
               infinite: true,
               arrows: false,
               dots: true,
               autoplay:true
});

$('.offer-slider').slick({
               infinite: true,
               arrows: true,
               dots: false,
               autoplay:false
            });
